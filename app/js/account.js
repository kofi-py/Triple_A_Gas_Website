/* Triple A Gas — Customer Account Portal (JWT-based) */

const ACCOUNT_KEY = "tag_customer_session";

// ============================================================
// Session Management
// ============================================================
function getCustomerSession() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || "null");
  } catch {
    return null;
  }
}

function setCustomerSession(token, user) {
  localStorage.setItem(
    ACCOUNT_KEY,
    JSON.stringify({ token, user, loggedInAt: new Date().toISOString() }),
  );
}

function clearCustomerSession() {
  localStorage.removeItem(ACCOUNT_KEY);
}

function isCustomerLoggedIn() {
  const session = getCustomerSession();
  if (!session || !session.token) return false;
  // Check JWT expiry (client-side estimate)
  try {
    const payload = JSON.parse(atob(session.token.split(".")[1]));
    if (payload.exp * 1000 < Date.now()) {
      clearCustomerSession();
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

function getAuthHeaders() {
  const session = getCustomerSession();
  if (!session?.token) return {};
  return { Authorization: `Bearer ${session.token}` };
}

// ============================================================
// API Helpers
// ============================================================
function getApiBase() {
  return window.SITE_CONFIG?.API_BASE || "http://localhost:3001/api";
}

async function apiCall(endpoint, options = {}) {
  const url = getApiBase() + endpoint;
  const headers = {
    "Content-Type": "application/json",
    ...getAuthHeaders(),
    ...options.headers,
  };
  const response = await fetch(url, { ...options, headers });
  const data = await response.json();
  return data;
}

// ============================================================
// Auth Functions
// ============================================================
async function registerCustomer(name, email, phone, password) {
  return apiCall("/auth/register", {
    method: "POST",
    body: JSON.stringify({ name, email, phone, password }),
  });
}

async function loginCustomer(email, password) {
  const result = await apiCall("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
  if (result.success && result.token) {
    setCustomerSession(result.token, result.user);
  }
  return result;
}

async function logoutCustomer() {
  clearCustomerSession();
  window.location.href = "account/login.html";
}

async function fetchProfile() {
  return apiCall("/auth/me");
}

async function updateProfile(data) {
  return apiCall("/auth/me", {
    method: "PATCH",
    body: JSON.stringify(data),
  });
}

async function fetchMyOrders() {
  return apiCall("/orders/my");
}

// ============================================================
// Init — check login state on pages
// ============================================================
document.addEventListener("DOMContentLoaded", () => {
  const protectedPages = ["dashboard.html"];
  const currentPage = window.location.pathname.split("/").pop();

  // If on a protected page and not logged in
  if (protectedPages.includes(currentPage) && !isCustomerLoggedIn()) {
    window.location.href =
      "login.html?redirect=" + encodeURIComponent(currentPage);
    return;
  }

  // Update nav if logged in
  if (isCustomerLoggedIn()) {
    const session = getCustomerSession();
    const accountLink = document.querySelector(".nav-account-link");
    if (accountLink) {
      accountLink.textContent = `👤 ${session.user?.name || "My Account"}`;
      accountLink.href = "account/dashboard.html";
    }
  }
});
