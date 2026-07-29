// Site configuration — central source for phone, WhatsApp, and environment settings
// Update values here and all pages will use them automatically.
window.SITE_CONFIG = {
  // Display phone (local format)
  PHONE: "024 507 5496",
  // International tel: value used in tel: links (include +)
  PHONE_TEL: "+233245075496",
  // WhatsApp number for wa.me (no +)
  WHATSAPP: "233245075496",

  // Environment detection
  // Set to 'production' when deploying to the live server
  ENV: "development", // 'development' | 'production'

  // Backend API base — auto-switches based on ENV
  get API_BASE() {
    return this.ENV === "production"
      ? "https://triplaagas.com/api"
      : "http://localhost:3001/api";
  },

  // Site URL
  SITE_URL: "https://triplaagas.com",

  // Company email
  EMAIL: "tripleagascompany@yahoo.com",

  // Company name variants
  COMPANY_NAME: "Triple A Gas Company Limited",
  COMPANY_ALT: "Triple A LP Gas Limited",
};
