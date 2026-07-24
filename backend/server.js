const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Path to store submissions
const DATA_DIR = path.join(__dirname, "data");
const SUBMISSIONS_FILE = path.join(DATA_DIR, "submissions.json");

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Ensure submissions file exists
if (!fs.existsSync(SUBMISSIONS_FILE)) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify([], null, 2));
}

// Helper: load submissions
function loadSubmissions() {
  try {
    const raw = fs.readFileSync(SUBMISSIONS_FILE, "utf-8");
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

// Helper: save submissions
function saveSubmissions(data) {
  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(data, null, 2));
}

// Helper: get timestamp
function getTimestamp() {
  const now = new Date();
  const pad = (n) => String(n).padStart(2, "0");
  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

// POST /api/contact — handle contact form submissions
app.post("/api/contact", (req, res) => {
  const { name, phone, email, message, source } = req.body;

  // Validate required fields
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, error: "Name is required." });
  }
  if (!phone || !phone.trim()) {
    return res
      .status(400)
      .json({ success: false, error: "Phone number is required." });
  }
  if (!message || !message.trim()) {
    return res
      .status(400)
      .json({ success: false, error: "Message is required." });
  }

  // Validate Ghana phone number
  const digits = phone.replace(/\D/g, "");
  const isValidPhone =
    (digits.length === 10 && digits.startsWith("0")) ||
    (digits.length === 12 && digits.startsWith("233"));

  if (!isValidPhone) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid Ghana phone number (e.g. 024 000 0000).",
    });
  }

  // Create submission record
  const submission = {
    id: Date.now(),
    type: source || "contact",
    name: name.trim(),
    phone: phone.trim(),
    email: email?.trim() || "",
    message: message.trim(),
    createdAt: getTimestamp(),
    status: "new",
  };

  // Save
  const submissions = loadSubmissions();
  submissions.unshift(submission);
  saveSubmissions(submissions);

  console.log(
    `[${submission.createdAt}] New ${submission.type} from ${submission.name} (${submission.phone})`,
  );

  res.json({
    success: true,
    message: "Your message has been received. We will contact you shortly.",
    id: submission.id,
  });
});

// POST /api/order — handle order/delivery form submissions
app.post("/api/order", (req, res) => {
  const { name, phone, size, area, source } = req.body;

  // Validate required fields
  if (!name || !name.trim()) {
    return res.status(400).json({ success: false, error: "Name is required." });
  }
  if (!phone || !phone.trim()) {
    return res
      .status(400)
      .json({ success: false, error: "Phone number is required." });
  }
  if (!size) {
    return res
      .status(400)
      .json({ success: false, error: "Cylinder size is required." });
  }
  if (!area || !area.trim()) {
    return res
      .status(400)
      .json({ success: false, error: "Delivery area is required." });
  }

  // Validate Ghana phone number
  const digits = phone.replace(/\D/g, "");
  const isValidPhone =
    (digits.length === 10 && digits.startsWith("0")) ||
    (digits.length === 12 && digits.startsWith("233"));

  if (!isValidPhone) {
    return res.status(400).json({
      success: false,
      error: "Please enter a valid Ghana phone number (e.g. 024 000 0000).",
    });
  }

  // Create order record
  const order = {
    id: Date.now(),
    type: "delivery-order",
    name: name.trim(),
    phone: phone.trim(),
    cylinderSize: size,
    deliveryArea: area.trim(),
    createdAt: getTimestamp(),
    status: "new",
  };

  // Save
  const submissions = loadSubmissions();
  submissions.unshift(order);
  saveSubmissions(submissions);

  console.log(
    `[${order.createdAt}] New ORDER: ${order.cylinderSize} for ${order.name} → ${order.deliveryArea} (${order.phone})`,
  );

  res.json({
    success: true,
    message:
      "Your delivery request has been received. We will call you to confirm.",
    id: order.id,
  });
});

// GET /api/submissions — view all submissions (for admin/staff)
app.get("/api/submissions", (req, res) => {
  const submissions = loadSubmissions();
  // Support ?status=new filter
  const { status } = req.query;
  if (status) {
    const filtered = submissions.filter((s) => s.status === status);
    return res.json(filtered);
  }
  res.json(submissions);
});

// PATCH /api/submissions/:id/status — update status (mark as read/etc)
app.patch("/api/submissions/:id/status", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const validStatuses = ["new", "read", "contacted", "completed"];
  if (!validStatuses.includes(status)) {
    return res
      .status(400)
      .json({
        success: false,
        error: `Invalid status. Must be one of: ${validStatuses.join(", ")}`,
      });
  }

  const submissions = loadSubmissions();
  const idx = submissions.findIndex((s) => String(s.id) === id);
  if (idx === -1) {
    return res
      .status(404)
      .json({ success: false, error: "Submission not found." });
  }

  submissions[idx].status = status;
  if (status === "read" || status === "contacted") {
    submissions[idx].readAt = getTimestamp();
  }
  saveSubmissions(submissions);

  res.json({ success: true, status });
});

// GET /api/stats — simple stats
app.get("/api/stats", (req, res) => {
  const submissions = loadSubmissions();
  const total = submissions.length;
  const newCount = submissions.filter((s) => s.status === "new").length;
  const contactForms = submissions.filter((s) => s.type === "contact").length;
  const orders = submissions.filter((s) => s.type === "delivery-order").length;

  res.json({ total, new: newCount, contactForms, orders });
});

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: getTimestamp() });
});

// Start server
app.listen(PORT, () => {
  console.log(`Triple A Gas backend running on http://localhost:${PORT}`);
  console.log(`  POST /api/contact  — Contact form`);
  console.log(`  POST /api/order    — Delivery order`);
  console.log(`  GET  /api/submissions — View all submissions`);
  console.log(`  GET  /api/stats    — Submission stats`);
  console.log(`  GET  /api/health   — Health check`);
});
