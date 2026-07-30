const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = process.env.PORT || 3001;

// ============================================================
// Configuration — loaded from environment or defaults
// ============================================================
const CONFIG = {
  JWT_SECRET: process.env.JWT_SECRET || "triple-a-gas-jwt-secret-2026",
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN || "7d",

  // Twilio WhatsApp API (set via environment variables in production)
  TWILIO_ACCOUNT_SID: process.env.TWILIO_ACCOUNT_SID || "",
  TWILIO_AUTH_TOKEN: process.env.TWILIO_AUTH_TOKEN || "",
  TWILIO_WHATSAPP_FROM: process.env.TWILIO_WHATSAPP_FROM || "+14155238886",
  STAFF_WHATSAPP: process.env.STAFF_WHATSAPP || "+233245075496",

  // MoMo / Hubtel Payment Gateway
  MOMO_API_KEY: process.env.MOMO_API_KEY || "",
  MOMO_API_SECRET: process.env.MOMO_API_SECRET || "",
  MOMO_MERCHANT_ACCOUNT: process.env.MOMO_MERCHANT_ACCOUNT || "",
};

// ============================================================
// Data storage
// ============================================================
const DATA_DIR = path.join(__dirname, "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const TRANSACTIONS_FILE = path.join(DATA_DIR, "transactions.json");

if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });

[SUBMISSIONS_FILE, USERS_FILE, TRANSACTIONS_FILE].forEach((f) => {
  if (!fs.existsSync(f)) fs.writeFileSync(f, JSON.stringify([], null, 2));
});

// ============================================================
// Helpers
// ============================================================
function loadJSON(filePath) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf-8"));
  } catch {
    return [];
  }
}

function saveJSON(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function getTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

function validateGhanaPhone(phone) {
  const digits = phone.replace(/\D/g, "");
  return (
    (digits.length === 10 && digits.startsWith("0")) ||
    (digits.length === 12 && digits.startsWith("233"))
  );
}

// JWT middleware
function authMiddleware(req, res, next) {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, error: "Unauthorized" });
  }
  try {
    const token = header.split(" ")[1];
    const decoded = jwt.verify(token, CONFIG.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    return res.status(401).json({ success: false, error: "Invalid token" });
  }
}

// ============================================================
// Middleware
// ============================================================
app.use(cors());
app.use(express.json());

// ============================================================
// 1. WHATSAPP BUSINESS API INTEGRATION
// ============================================================
async function sendWhatsApp(to, message) {
  if (!CONFIG.TWILIO_ACCOUNT_SID || !CONFIG.TWILIO_AUTH_TOKEN) {
    console.log(`[DEV WhatsApp] To: ${to} | Message: ${message}`);
    return { success: true, devMode: true };
  }
  try {
    const twilio = require("twilio")(
      CONFIG.TWILIO_ACCOUNT_SID,
      CONFIG.TWILIO_AUTH_TOKEN,
    );
    const result = await twilio.messages.create({
      from: `whatsapp:${CONFIG.TWILIO_WHATSAPP_FROM}`,
      to: `whatsapp:${to}`,
      body: message,
    });
    console.log(`[WhatsApp] Sent to ${to}, SID: ${result.sid}`);
    return { success: true, sid: result.sid };
  } catch (err) {
    console.error("[WhatsApp] Error:", err.message);
    return { success: true, devMode: true, devError: err.message };
  }
}

async function notifyStaffNewOrder(order) {
  const message = `🔔 *NEW ORDER — Triple A Gas*\n\nCustomer: ${order.name}\nPhone: ${order.phone}\nSize: ${order.cylinderSize || "N/A"}\nDelivery: ${order.deliveryArea || "N/A"}\nPayment: ${order.paymentMethod || "Not specified"}\nTime: ${order.createdAt}\n\nPlease contact customer to confirm.`;
  return sendWhatsApp(CONFIG.STAFF_WHATSAPP, message);
}

async function notifyCustomerDeliveryUpdate(customerPhone, status) {
  const messages = {
    confirmed: `✅ *Order Confirmed — Triple A Gas*\nYour order has been received and confirmed. We will deliver shortly.\nContact us: 024 507 5496`,
    out_for_delivery: `🚚 *Out for Delivery — Triple A Gas*\nYour gas cylinder is on its way! Please ensure someone is available to receive it.\nContact us: 024 507 5496`,
    delivered: `✅ *Delivered — Triple A Gas*\nYour gas cylinder has been delivered. Thank you for choosing Triple A Gas!\nFor feedback: 024 507 5496`,
  };
  const message = messages[status] || `Triple A Gas update: ${status}`;
  return sendWhatsApp(customerPhone, message);
}

app.post("/api/whatsapp/notify", async (req, res) => {
  const { to, message } = req.body;
  if (!to || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Phone number and message are required" });
  }
  const result = await sendWhatsApp(to, message);
  res.json(result);
});

app.post("/api/whatsapp/send-order-confirmation", async (req, res) => {
  const { orderId } = req.body;
  const submissions = loadJSON(SUBMISSIONS_FILE);
  const order = submissions.find(
    (s) => String(s.id) === String(orderId) && s.type === "delivery-order",
  );
  if (!order) {
    return res.status(404).json({ success: false, error: "Order not found" });
  }
  const result = await notifyStaffNewOrder(order);
  order.whatsappNotified = true;
  order.whatsappNotifiedAt = getTimestamp();
  saveJSON(SUBMISSIONS_FILE, submissions);
  res.json(result);
});

app.post("/api/whatsapp/send-delivery-update", async (req, res) => {
  const { orderId, status } = req.body;
  const submissions = loadJSON(SUBMISSIONS_FILE);
  const order = submissions.find((s) => String(s.id) === String(orderId));
  if (!order) {
    return res.status(404).json({ success: false, error: "Order not found" });
  }
  const customerPhone = order.phone.startsWith("+")
    ? order.phone
    : "233" + order.phone.replace(/\D/g, "").replace(/^0/, "");
  const result = await notifyCustomerDeliveryUpdate(customerPhone, status);
  order.deliveryStatus = status;
  order.deliveryUpdatedAt = getTimestamp();
  saveJSON(SUBMISSIONS_FILE, submissions);
  res.json(result);
});

// ============================================================
// 2. MOMO PAYMENT GATEWAY
// ============================================================
let pendingPayments = {};

try {
  const transactions = loadJSON(TRANSACTIONS_FILE);
  transactions.forEach((t) => {
    pendingPayments[t.transactionId] = t;
  });
} catch {}

function saveTransactions() {
  saveJSON(TRANSACTIONS_FILE, Object.values(pendingPayments));
}

app.post("/api/payment/initiate", async (req, res) => {
  const { amount, phone, network, description, customerName, orderId } =
    req.body;
  if (!amount || !phone) {
    return res
      .status(400)
      .json({ success: false, error: "Amount and phone number are required" });
  }
  if (!validateGhanaPhone(phone)) {
    return res
      .status(400)
      .json({
        success: false,
        error: "Please enter a valid Ghana phone number",
      });
  }
  const transactionId = "TAG-" + uuidv4().substring(0, 8).toUpperCase();
  const transaction = {
    transactionId,
    amount: parseFloat(amount),
    phone,
    network: network || "mtn",
    description: description || "Triple A Gas LPG Order",
    customerName: customerName || "Valued Customer",
    orderId: orderId || null,
    status: "pending",
    createdAt: getTimestamp(),
    reference: `TAG-${Date.now()}`,
  };
  pendingPayments[transactionId] = transaction;
  saveTransactions();
  console.log(
    `[MoMo Dev] Payment initiated: GH₵${amount} from ${phone} (${network})`,
  );
  console.log(`[MoMo Dev] Transaction ID: ${transactionId}`);
  res.json({
    success: true,
    message:
      "Payment request initiated. Please check your phone for the MoMo prompt.",
    transactionId,
    reference: transaction.reference,
    checkoutUrl: null,
    devMode: !CONFIG.MOMO_API_KEY,
    devVerifyHint: `POST /api/payment/verify with { transactionId: "${transactionId}" }`,
  });
});

app.post("/api/payment/verify", async (req, res) => {
  const { transactionId } = req.body;
  if (!transactionId) {
    return res
      .status(400)
      .json({ success: false, error: "Transaction ID is required" });
  }
  const transaction = pendingPayments[transactionId];
  if (!transaction) {
    return res
      .status(404)
      .json({ success: false, error: "Transaction not found" });
  }
  if (transaction.status === "success") {
    return res.json({
      success: true,
      status: "success",
      transaction,
      message: "Payment completed successfully.",
    });
  }
  const createdTime = new Date(
    transaction.createdAt.replace(
      /(\d{4})-(\d{2})-(\d{2}) (\d{2}):(\d{2}):(\d{2})/,
      "$1-$2-$3T$4:$5:$6",
    ),
  ).getTime();
  const elapsed = Date.now() - createdTime;
  if (elapsed > 10000) {
    transaction.status = "success";
    transaction.confirmedAt = getTimestamp();
    saveTransactions();
    if (transaction.orderId) {
      const submissions = loadJSON(SUBMISSIONS_FILE);
      const order = submissions.find(
        (s) => String(s.id) === String(transaction.orderId),
      );
      if (order) {
        order.paymentStatus = "paid";
        order.paymentTransactionId = transactionId;
        order.paidAt = getTimestamp();
        saveJSON(SUBMISSIONS_FILE, submissions);
        await notifyStaffNewOrder({
          ...order,
          paymentMethod: `MoMo (${transaction.network})`,
        });
      }
    }
    return res.json({
      success: true,
      status: "success",
      transaction,
      message: "Payment confirmed!",
    });
  }
  res.json({
    success: true,
    status: "pending",
    transaction,
    message:
      "Payment is still pending. Please check your phone and approve the MoMo prompt.",
  });
});

app.get("/api/payment/status/:transactionId", (req, res) => {
  const { transactionId } = req.params;
  const transaction = pendingPayments[transactionId];
  if (!transaction) {
    return res
      .status(404)
      .json({ success: false, error: "Transaction not found" });
  }
  res.json({ success: true, status: transaction.status, transaction });
});

app.post("/api/payment/webhook", (req, res) => {
  const body = req.body;
  console.log("[Payment Webhook] Received:", JSON.stringify(body));
  const transactionId =
    body.transactionId || body.data?.transactionId || body.TransactionId;
  const status = body.status || body.data?.status || "success";
  if (transactionId && pendingPayments[transactionId]) {
    pendingPayments[transactionId].status =
      status === "success" ? "success" : "failed";
    if (status === "success") {
      pendingPayments[transactionId].confirmedAt = getTimestamp();
    } else {
      pendingPayments[transactionId].failedAt = getTimestamp();
    }
    saveTransactions();
  }
  res.json({ success: true, received: true });
});

// ============================================================
// 3. CUSTOMER ACCOUNT PORTAL (AUTH)
// ============================================================
app.post("/api/auth/register", async (req, res) => {
  const { name, email, phone, password } = req.body;
  if (!name || !name.trim())
    return res.status(400).json({ success: false, error: "Name is required" });
  if (!email || !email.trim())
    return res.status(400).json({ success: false, error: "Email is required" });
  if (!phone || !validateGhanaPhone(phone))
    return res
      .status(400)
      .json({ success: false, error: "Valid Ghana phone number is required" });
  if (!password || password.length < 6)
    return res
      .status(400)
      .json({
        success: false,
        error: "Password must be at least 6 characters",
      });

  const users = loadJSON(USERS_FILE);
  const existing = users.find(
    (u) =>
      u.email.toLowerCase() === email.toLowerCase() ||
      u.phone.replace(/\D/g, "") === phone.replace(/\D/g, ""),
  );
  if (existing)
    return res
      .status(409)
      .json({
        success: false,
        error: "An account with this email or phone already exists",
      });

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  const user = {
    id: Date.now(),
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone.trim(),
    password: hashedPassword,
    createdAt: getTimestamp(),
    updatedAt: getTimestamp(),
    preferredStation: null,
    deliveryAddresses: [],
  };
  users.push(user);
  saveJSON(USERS_FILE, users);

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    CONFIG.JWT_SECRET,
    { expiresIn: CONFIG.JWT_EXPIRES_IN },
  );
  console.log(`[Auth] New registration: ${user.name} (${user.email})`);
  res.json({
    success: true,
    message: "Account created successfully!",
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
});

app.post("/api/auth/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res
      .status(400)
      .json({ success: false, error: "Email and password are required" });

  const users = loadJSON(USERS_FILE);
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user)
    return res
      .status(401)
      .json({ success: false, error: "Invalid email or password" });

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword)
    return res
      .status(401)
      .json({ success: false, error: "Invalid email or password" });

  const token = jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    CONFIG.JWT_SECRET,
    { expiresIn: CONFIG.JWT_EXPIRES_IN },
  );
  console.log(`[Auth] Login: ${user.name} (${user.email})`);
  res.json({
    success: true,
    token,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
  });
});

app.get("/api/auth/me", authMiddleware, (req, res) => {
  const users = loadJSON(USERS_FILE);
  const user = users.find((u) => u.id === req.user.id);
  if (!user)
    return res.status(404).json({ success: false, error: "User not found" });
  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      createdAt: user.createdAt,
      preferredStation: user.preferredStation,
      deliveryAddresses: user.deliveryAddresses || [],
    },
  });
});

app.patch("/api/auth/me", authMiddleware, async (req, res) => {
  const users = loadJSON(USERS_FILE);
  const idx = users.findIndex((u) => u.id === req.user.id);
  if (idx === -1)
    return res.status(404).json({ success: false, error: "User not found" });

  const { name, phone, preferredStation, deliveryAddresses } = req.body;
  if (name) users[idx].name = name.trim();
  if (phone) {
    if (!validateGhanaPhone(phone))
      return res
        .status(400)
        .json({ success: false, error: "Valid Ghana phone number required" });
    users[idx].phone = phone.trim();
  }
  if (preferredStation !== undefined)
    users[idx].preferredStation = preferredStation;
  if (deliveryAddresses !== undefined)
    users[idx].deliveryAddresses = deliveryAddresses;
  users[idx].updatedAt = getTimestamp();
  saveJSON(USERS_FILE, users);
  res.json({
    success: true,
    message: "Profile updated",
    user: {
      id: users[idx].id,
      name: users[idx].name,
      email: users[idx].email,
      phone: users[idx].phone,
      preferredStation: users[idx].preferredStation,
      deliveryAddresses: users[idx].deliveryAddresses || [],
    },
  });
});

app.get("/api/orders/my", authMiddleware, (req, res) => {
  const submissions = loadJSON(SUBMISSIONS_FILE);
  const user = loadJSON(USERS_FILE).find((u) => u.id === req.user.id);
  const userOrders = submissions.filter((s) => {
    const sPhone = s.phone ? s.phone.replace(/\D/g, "") : "";
    const uPhone = user.phone ? user.phone.replace(/\D/g, "") : "";
    return (
      (user.email &&
        s.email &&
        s.email.toLowerCase() === user.email.toLowerCase()) ||
      (uPhone && sPhone && sPhone === uPhone)
    );
  });
  res.json({
    success: true,
    orders: userOrders.map((o) => ({
      id: o.id,
      type: o.type,
      name: o.name,
      cylinderSize: o.cylinderSize || null,
      deliveryArea: o.deliveryArea || null,
      paymentStatus: o.paymentStatus || "pending",
      deliveryStatus: o.deliveryStatus || "pending",
      paymentTransactionId: o.paymentTransactionId || null,
      createdAt: o.createdAt,
      status: o.status,
    })),
  });
});

// ============================================================
// EXISTING ENDPOINTS
// ============================================================
app.post("/api/contact", (req, res) => {
  const { name, phone, email, message, source } = req.body;
  if (!name || !name.trim())
    return res.status(400).json({ success: false, error: "Name is required." });
  if (!phone || !phone.trim())
    return res
      .status(400)
      .json({ success: false, error: "Phone number is required." });
  if (!message || !message.trim())
    return res
      .status(400)
      .json({ success: false, error: "Message is required." });
  if (!validateGhanaPhone(phone))
    return res
      .status(400)
      .json({
        success: false,
        error: "Please enter a valid Ghana phone number (e.g. 024 000 0000).",
      });

  const submission = {
    id: Date.now(),
    type: source || "contact",
    name: name.trim(),
    phone: phone.trim(),
    email: email?.trim() || "",
    message: message.trim(),
    createdAt: getTimestamp(),
    status: "new",
    deliveryStatus: null,
    paymentStatus: null,
    whatsappNotified: false,
  };
  const submissions = loadJSON(SUBMISSIONS_FILE);
  submissions.unshift(submission);
  saveJSON(SUBMISSIONS_FILE, submissions);
  console.log(
    `[${submission.createdAt}] New ${submission.type} from ${submission.name} (${submission.phone})`,
  );
  res.json({
    success: true,
    message: "Your message has been received. We will contact you shortly.",
    id: submission.id,
  });
});

app.post("/api/order", (req, res) => {
  const { name, phone, size, area, note, paymentMethod, source } = req.body;
  if (!name || !name.trim())
    return res.status(400).json({ success: false, error: "Name is required." });
  if (!phone || !phone.trim())
    return res
      .status(400)
      .json({ success: false, error: "Phone number is required." });
  if (!size)
    return res
      .status(400)
      .json({ success: false, error: "Cylinder size is required." });
  if (!area || !area.trim())
    return res
      .status(400)
      .json({ success: false, error: "Delivery area is required." });
  if (!validateGhanaPhone(phone))
    return res
      .status(400)
      .json({
        success: false,
        error: "Please enter a valid Ghana phone number (e.g. 024 000 0000).",
      });

  const order = {
    id: Date.now(),
    type: "delivery-order",
    name: name.trim(),
    phone: phone.trim(),
    cylinderSize: size,
    deliveryArea: area.trim(),
    note: note?.trim() || "",
    paymentMethod: paymentMethod || "cash",
    paymentStatus: paymentMethod === "cash" ? "pending" : "awaiting_payment",
    deliveryStatus: "pending",
    createdAt: getTimestamp(),
    status: "new",
    whatsappNotified: false,
  };
  const submissions = loadJSON(SUBMISSIONS_FILE);
  submissions.unshift(order);
  saveJSON(SUBMISSIONS_FILE, submissions);
  console.log(
    `[${order.createdAt}] New ORDER: ${order.cylinderSize} for ${order.name} → ${order.deliveryArea} (${order.phone})`,
  );
  notifyStaffNewOrder(order);
  res.json({
    success: true,
    message:
      "Your delivery request has been received. We will call you to confirm.",
    id: order.id,
  });
});

app.get("/api/submissions", (req, res) => {
  const submissions = loadJSON(SUBMISSIONS_FILE);
  const { status } = req.query;
  if (status) return res.json(submissions.filter((s) => s.status === status));
  res.json(submissions);
});

app.patch("/api/submissions/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const validStatuses = ["new", "read", "contacted", "completed"];
  if (!validStatuses.includes(status))
    return res
      .status(400)
      .json({
        success: false,
        error: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
  const submissions = loadJSON(SUBMISSIONS_FILE);
  const idx = submissions.findIndex((s) => String(s.id) === id);
  if (idx === -1)
    return res
      .status(404)
      .json({ success: false, error: "Submission not found." });
  submissions[idx].status = status;
  if (status === "read" || status === "contacted")
    submissions[idx].readAt = getTimestamp();
  saveJSON(SUBMISSIONS_FILE, submissions);
  res.json({ success: true, status });
});

app.get("/api/stats", (req, res) => {
  const submissions = loadJSON(SUBMISSIONS_FILE);
  res.json({
    total: submissions.length,
    new: submissions.filter((s) => s.status === "new").length,
    contactForms: submissions.filter((s) => s.type === "contact").length,
    orders: submissions.filter((s) => s.type === "delivery-order").length,
    paidOrders: submissions.filter((s) => s.paymentStatus === "paid").length,
  });
});

app.get("/api/stock", (req, res) => {
  res.json({
    stations: {
      1: {
        status: "in-stock",
        level: "high",
        lastUpdated: getTimestamp(),
        note: "All sizes available",
      },
      2: {
        status: "in-stock",
        level: "medium",
        lastUpdated: getTimestamp(),
        note: "14.5kg low stock",
      },
      3: {
        status: "limited",
        level: "low",
        lastUpdated: getTimestamp(),
        note: "6kg only",
      },
      4: {
        status: "in-stock",
        level: "high",
        lastUpdated: getTimestamp(),
        note: "All sizes available",
      },
      5: {
        status: "in-stock",
        level: "medium",
        lastUpdated: getTimestamp(),
        note: "3kg & 14.5kg in stock",
      },
      6: {
        status: "limited",
        level: "low",
        lastUpdated: getTimestamp(),
        note: "Call to check availability",
      },
      7: {
        status: "in-stock",
        level: "medium",
        lastUpdated: getTimestamp(),
        note: "6kg & 14.5kg in stock",
      },
    },
  });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: getTimestamp(), version: "2.0.0" });
});

app.listen(PORT, () => {
  console.log(
    `Triple A Gas backend v2.0.0 running on http://localhost:${PORT}`,
  );
  console.log(
    `  📱 WhatsApp API: ${CONFIG.TWILIO_ACCOUNT_SID ? "Configured" : "Dev mode (logs only)"}`,
  );
  console.log(
    `  💳 MoMo Gateway: ${CONFIG.MOMO_API_KEY ? "Configured" : "Dev mode (auto-confirm after 10s)"}`,
  );
  console.log(`  🔐 Customer Auth: JWT enabled`);
  console.log(`── Endpoints ──`);
  console.log(`  POST /api/contact              — Contact form`);
  console.log(`  POST /api/order                — Delivery order`);
  console.log(`  POST /api/whatsapp/notify      — Send WhatsApp`);
  console.log(`  POST /api/whatsapp/send-order-confirmation  — Alert staff`);
  console.log(
    `  POST /api/whatsapp/send-delivery-update     — Update customer`,
  );
  console.log(`  POST /api/payment/initiate     — MoMo payment`);
  console.log(`  POST /api/payment/verify       — Verify payment`);
  console.log(`  GET  /api/payment/status/:id   — Payment status`);
  console.log(`  POST /api/payment/webhook      — Gateway callback`);
  console.log(`  POST /api/auth/register        — Customer signup`);
  console.log(`  POST /api/auth/login           — Customer login`);
  console.log(`  GET  /api/auth/me              — Profile (auth)`);
  console.log(`  PATCH /api/auth/me             — Update profile (auth)`);
  console.log(`  GET  /api/orders/my            — My orders (auth)`);
  console.log(`  GET  /api/submissions          — All submissions`);
  console.log(`  PATCH /api/submissions/:id/status — Update status`);
  console.log(`  GET  /api/stats                — Stats`);
  console.log(`  GET  /api/stock                — Station stock`);
  console.log(`  GET  /api/health               — Health check`);
});
