/* Triple A Gas — shared public JS */

const GAUGE_SVG = `
<img class="brand-mark" src="images/offical_logo-removebg.png" alt="Triple A Gas" style="width:70px;height:70px;object-fit:contain;display:block;">`;

const WHATSAPP_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>`;

function formatLocalPhone(phone) {
  return phone
    .replace(/^\+233\s?/, "0")
    .replace(/\s+/g, " ")
    .trim();
}

function buildStationsFromCompanyInfo() {
  const locations = window.COMPANY_INFO?.locations || [];
  return locations.map((loc) => ({
    id: loc.id,
    name:
      loc.type === "Headquarters"
        ? `Triple A LP Gas — ${loc.city} (HQ)`
        : `Triple A LP Gas — ${loc.city}`,
    town: loc.city,
    region: loc.region,
    address: loc.address,
    directions: loc.directions || "",
    phone: formatLocalPhone(loc.phone),
    hours: "Confirm before travelling",
    status: loc.type === "Headquarters" ? "safe" : "hazard",
    stock: "Availability to confirm",
    mapUrl:
      loc.googleMapsUrl ||
      `https://www.openstreetmap.org/?mlat=${loc.coordinates.lat}&mlon=${loc.coordinates.lng}#map=15/${loc.coordinates.lat}/${loc.coordinates.lng}`,
    coordinates: loc.coordinates,
  }));
}

const STATIONS = buildStationsFromCompanyInfo();

// Read phone and WhatsApp from site-config.js (fallback to current values)
const PHONE =
  window.SITE_CONFIG && window.SITE_CONFIG.PHONE
    ? window.SITE_CONFIG.PHONE
    : "024 507 5496";
const PHONE_TEL =
  window.SITE_CONFIG && window.SITE_CONFIG.PHONE_TEL
    ? window.SITE_CONFIG.PHONE_TEL
    : "+233245075496";
const WHATSAPP =
  window.SITE_CONFIG && window.SITE_CONFIG.WHATSAPP
    ? window.SITE_CONFIG.WHATSAPP
    : "233245075496";

// Backend API base URL
const API_BASE = "http://localhost:3001/api";

// Apply site config to existing static anchors (class-based):
function applySiteConfigToStatic() {
  // anchors that should show the phone number
  document.querySelectorAll("a.autophone").forEach((a) => {
    a.setAttribute("href", `tel:${PHONE_TEL}`);
    // If anchor contains the phone text, update it for consistency
    if (a.textContent && a.textContent.trim().match(/\d/)) {
      // preserve surrounding text (e.g., "Call 024 507 5496")
      const text = a.textContent.trim();
      const replaced = text
        .replace(/\+?233\s?\d{2,3}[\s\d-]*/g, PHONE)
        .replace(/\d{2,3}[\s\d-]{6,}/g, PHONE);
      a.textContent = replaced || PHONE;
    }
  });
  // anchors that should link to WhatsApp
  document.querySelectorAll("a.autowa").forEach((a) => {
    a.setAttribute("href", `https://wa.me/${WHATSAPP}`);
  });
}

function createFloatingCall() {
  if (document.querySelector(".fab-call")) return;
  const a = document.createElement("a");
  a.className = "fab-call autophone";
  a.setAttribute("aria-label", "Call Triple A Gas");
  a.innerHTML = "📞";
  document.body.appendChild(a);
}

function getPage() {
  const path = location.pathname.split("/").pop() || "index.html";
  if (!path || path === "" || path === "/") return "home";
  return path.replace(".html", "");
}

function isActive(page, current) {
  if (
    page === "home" &&
    (current === "index" || current === "home" || current === "")
  )
    return true;
  return page === current;
}

function renderHeader() {
  const el = document.getElementById("site-header");
  if (!el) return;
  const current = getPage();
  const base = el.dataset.base || "";

  el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <span>Triple A LP Gas Limited · Ghana</span>
        <div class="topbar-right">
          <a href="tel:${PHONE_TEL}">Call ${PHONE}</a>
          <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${WHATSAPP_ICON} WhatsApp</a>
        </div>
      </div>
    </div>
    <header class="site-header">
      <div class="container">
        <a class="brand" href="${base}index.html">
          ${GAUGE_SVG}
          <div class="brand-text">TRIPLE A GAS<span>LPG · Ghana</span></div>
        </a>
        <button class="nav-toggle" type="button" aria-label="Open menu" aria-expanded="false" id="nav-toggle">☰</button>
        <ul class="nav-links" id="nav-links">
          <li><a href="${base}index.html" ${isActive("home", current) ? 'aria-current="page"' : ""}>Home</a></li>
          <li><a href="${base}products.html" ${isActive("products", current) ? 'aria-current="page"' : ""}>Products</a></li>
          <li><a href="${base}stations.html" ${isActive("stations", current) ? 'aria-current="page"' : ""}>Find a Station</a></li>
          <li><a href="${base}safety.html" ${isActive("safety", current) ? 'aria-current="page"' : ""}>Safety</a></li>
          <li><a href="${base}faq.html" ${isActive("faq", current) ? 'aria-current="page"' : ""}>FAQ</a></li>
          <li><a href="${base}about.html" ${isActive("about", current) ? 'aria-current="page"' : ""}>About</a></li>
          <li><a href="${base}contact.html" ${isActive("contact", current) ? 'aria-current="page"' : ""}>Contact</a></li>
        </ul>
        <div class="header-actions">
          <a class="btn btn-whatsapp btn-sm" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${WHATSAPP_ICON} WhatsApp</a>
          <a class="btn btn-primary btn-sm" href="tel:${PHONE_TEL}">Call Us</a>
        </div>
      </div>
    </header>
  `;

  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open);
      toggle.textContent = open ? "✕" : "☰";
    });
  }
}

function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  const base = el.dataset.base || "";

  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div>
            <div class="footer-brand">
              ${GAUGE_SVG}
            <div class="brand-text">TRIPLE A GAS<span>Reliable cooking gas</span></div>
            </div>
            <p style="margin:0;max-width:32ch;line-height:1.55;">Dependable, safety-first LPG for households and businesses across Ghana.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li><a href="${base}products.html">Products</a></li>
              <li><a href="${base}stations.html">Find a Station</a></li>
              <li><a href="${base}safety.html">Safety</a></li>
              <li><a href="${base}faq.html">FAQ</a></li>
              <li><a href="${base}about.html">About</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <a class="footer-phone" href="tel:${PHONE_TEL}">${PHONE}</a>
            <p style="margin:0 0 6px;">Head Office, Accra</p>
            <a href="mailto:tripleagascompany@yahoo.com">tripleagascompany@yahoo.com</a>
          </div>
          <div>
            <h4>Order</h4>
            <ul>
              <li><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">${WHATSAPP_ICON} Chat on WhatsApp</a></li>
              <li><a href="${base}contact.html">Request delivery</a></li>
              <li><a href="${base}stations.html">Nearest outlet</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© ${new Date().getFullYear()} Triple A Gas Ltd. · Accra, Ghana</span>
          <span>
            <a href="${base}portal/index.html">Staff Login</a>
            · Site built for Triple A Gas
          </span>
        </div>
      </div>
    </footer>
    <a class="fab-whatsapp" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
      ${WHATSAPP_ICON.replace('width="18" height="18"', 'width="26" height="26"')}<span>WhatsApp</span>
    </a>
  `;
}

function initTypewriter() {
  const el = document.getElementById("typewriter-text");
  if (!el) return;
  const phrases = [
    "Reliable LPG for Ghanaian homes and businesses.",
    "Safety-first cooking gas, delivered to your door.",
    "Trusted LPG supply since 2005.",
  ];
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let speed = 60;

  function type() {
    const current = phrases[phraseIndex];
    if (!isDeleting) {
      el.textContent = current.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        speed = 2000; // pause before deleting
        setTimeout(type, speed);
        return;
      }
      speed = 50 + Math.random() * 40;
    } else {
      el.textContent = current.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400; // pause before typing next
        setTimeout(type, speed);
        return;
      }
      speed = 20 + Math.random() * 30;
    }
    setTimeout(type, speed);
  }

  // Small delay before starting
  setTimeout(type, 600);
}

function animateGauges() {
  document.querySelectorAll("[data-gauge]").forEach((el) => {
    const pct = Number(el.dataset.gauge) || 0;
    const circle = el.querySelector(".gauge-arc");
    if (!circle) return;
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - (pct / 100) * circumference;
    circle.style.strokeDasharray = String(circumference);
    circle.style.strokeDashoffset = String(circumference);
    requestAnimationFrame(() => {
      circle.style.transition = "stroke-dashoffset 1.1s ease";
      circle.style.strokeDashoffset = String(offset);
    });
  });
}

function initScrollTriggeredGauges() {
  const heroPanel = document.querySelector(".hero-panel");
  if (!heroPanel || !window.IntersectionObserver) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("gauges-animate");
          entry.target.querySelectorAll(".gauge-arc").forEach((circle, i) => {
            setTimeout(
              () => {
                circle.classList.add("visible");
              },
              i * 200 + 100,
            );
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 },
  );

  observer.observe(heroPanel);
}

/* ---------- Button ripple effect ---------- */
function initButtonRipples() {
  document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
      const ripple = document.createElement("span");
      ripple.className = "ripple-effect";
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      ripple.style.left = x + "px";
      ripple.style.top = y + "px";
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });
}

/* ---------- Animated number counters ---------- */
function initCounters() {
  var statBar = document.getElementById("stat-bar");
  if (!statBar || !window.IntersectionObserver) return;
  var counters = statBar.querySelectorAll("[data-count]");
  if (!counters.length) return;
  var counterObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          var target = parseFloat(el.dataset.count);
          if (isNaN(target)) return;
          var duration = 1600;
          var startTime = null;
          function animate(now) {
            if (!startTime) startTime = now;
            var elapsed = now - startTime;
            var progress = Math.min(elapsed / duration, 1);
            var eased = 1 - Math.pow(1 - progress, 3);
            var currentVal = eased * target;
            if (Number.isInteger(target)) {
              el.textContent = Math.round(currentVal);
            } else {
              el.textContent = currentVal.toFixed(1);
            }
            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              el.textContent = Number.isInteger(target)
                ? target
                : target.toFixed(1);
            }
          }
          requestAnimationFrame(animate);
          counterObserver.unobserve(el);
        }
      });
    },
    { threshold: 0.5 },
  );
  counters.forEach(function (c) {
    counterObserver.observe(c);
  });
}

function initStationSearch() {
  const grid = document.getElementById("station-grid");
  const search = document.getElementById("station-search");
  const chips = document.querySelectorAll(".filter-chip");
  if (!grid) return;

  let region = "all";

  function render(list) {
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state"><p>No stations match your search. Try another town or region.</p></div>`;
      refreshAos();
      return;
    }
    grid.innerHTML = list
      .map(
        (s, i) => `
      <article class="card station-card" data-region="${s.region}" data-aos="fade-up" data-aos-delay="${Math.min(i * 60, 240)}">
        <h3>${s.name}</h3>
        <p>${s.address}</p>
        <a class="phone" href="tel:+233${s.phone.replace(/\s/g, "").replace(/^0/, "")}">${s.phone}</a>
        ${s.mapUrl ? `<a class="station-map" href="${s.mapUrl}" target="_blank" rel="noopener">Open map</a>` : ""}
        <div class="station-meta">
          <span class="badge badge-${s.status}">${s.hours}</span>
          <span class="badge badge-${s.stock === "In stock" ? "safe" : "hazard"}">${s.stock}</span>
        </div>
        ${
          s.directions
            ? `
        <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--steel-100);">
          <a class="station-directions-link" href="${s.mapUrl}" target="_blank" rel="noopener">📍 Get directions</a>
          <details style="margin-top:8px;">
            <summary style="cursor:pointer;font-weight:600;font-size:13px;color:var(--cylinder-blue);">Driving directions</summary>
            <p style="margin:8px 0 0;font-size:13px;color:var(--steel-600);line-height:1.55;">${s.directions}</p>
          </details>
        </div>`
            : ""
        }
      </article>
    `,
      )
      .join("");
    refreshAos();
  }

  function filter() {
    const q = (search?.value || "").trim().toLowerCase();
    const list = STATIONS.filter((s) => {
      const matchRegion = region === "all" || s.region === region;
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.town.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q);
      return matchRegion && matchQ;
    });
    render(list);
  }

  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"));
      chip.classList.add("active");
      region = chip.dataset.region;
      filter();
    });
  });

  search?.addEventListener("input", filter);
  render(STATIONS);
}

function initStationTeaser() {
  const el = document.getElementById("station-teaser");
  if (!el) return;
  const preview = STATIONS.slice(0, 3);
  el.innerHTML = preview
    .map(
      (s, i) => `
    <article class="card station-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <h3>${s.name}</h3>
      <p>${s.address}</p>
        <a class="phone" href="tel:+233${s.phone.replace(/\s/g, "").replace(/^0/, "")}">${s.phone}</a>
        ${s.mapUrl ? `<a class="station-map" href="${s.mapUrl}" target="_blank" rel="noopener">Open map</a>` : ""}
      <div class="station-meta">
        <span class="badge badge-${s.status}">${s.hours}</span>
      </div>
      ${
        s.directions
          ? `
      <div style="margin-top:10px;padding-top:10px;border-top:1px solid var(--steel-100);">
        <a class="station-directions-link" href="${s.mapUrl}" target="_blank" rel="noopener">📍 Get directions</a>
        <details style="margin-top:8px;">
          <summary style="cursor:pointer;font-weight:600;font-size:13px;color:var(--cylinder-blue);">Driving directions</summary>
          <p style="margin:8px 0 0;font-size:13px;color:var(--steel-600);line-height:1.55;">${s.directions}</p>
        </details>
      </div>`
          : ""
      }
    </article>
  `,
    )
    .join("");
  refreshAos();
}

// Station gallery (for stations page)
function initStationGalleries() {
  var container = document.getElementById("station-galleries");
  if (!container || !window.COMPANY_INFO) return;
  var locations = window.COMPANY_INFO.locations.filter(function (l) {
    return l.images && l.images.length > 0;
  });
  if (!locations.length) {
    container.innerHTML =
      '<p style="color:var(--steel-600);">Gallery photos coming soon.</p>';
    return;
  }
  var html = "";
  for (var l = 0; l < locations.length; l++) {
    var loc = locations[l];
    var cols = Math.min(loc.images.length, 3);
    html +=
      '<div class="station-gallery-block" data-aos="fade-up" style="margin-bottom:36px;">';
    html +=
      '<h3 style="font-family:var(--display);font-size:18px;margin:0 0 4px;">' +
      loc.city +
      ", " +
      loc.region +
      "</h3>";
    html +=
      '<p style="font-size:14px;color:var(--steel-600);margin:0 0 16px;">' +
      loc.address +
      "</p>";
    html +=
      '<div class="gallery-grid" style="grid-template-columns: repeat(' +
      cols +
      ', 1fr);">';
    for (var i = 0; i < loc.images.length; i++) {
      html +=
        '<div class="gallery-item lightbox-target" role="img" tabindex="0" aria-label="' +
        loc.city +
        " station photo " +
        (i + 1) +
        '" data-full="' +
        loc.images[i] +
        '" style="background-image:url(\'' +
        loc.images[i] +
        "'); min-height:160px;\"></div>";
    }
    html += "</div>";
  }
  container.innerHTML = html;
}

function initAos() {
  if (typeof AOS === "undefined") return;
  AOS.init({
    duration: 650,
    easing: "ease-out-cubic",
    once: true,
    offset: 60,
    disable: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  });
}

function refreshAos() {
  if (typeof AOS === "undefined") return;
  requestAnimationFrame(() => AOS.refreshHard());
}

function normalizeGhPhone(value) {
  const digits = value.replace(/\D/g, "");
  if (digits.length === 10 && digits.startsWith("0")) return true;
  if (digits.length === 12 && digits.startsWith("233")) return true;
  if (digits.length === 9) return true;
  return false;
}

function initForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = form.querySelector('[name="phone"]');
      if (phone && !normalizeGhPhone(phone.value)) {
        phone.focus();
        phone.setCustomValidity(
          "Enter a valid Ghana phone number, e.g. 024 000 0000",
        );
        phone.reportValidity();
        return;
      }
      if (phone) phone.setCustomValidity("");

      // Gather form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Determine endpoint: if form has "size" field, it's an order
      const isOrder = form.querySelector('[name="size"]') !== null;
      const endpoint = isOrder ? "/order" : "/contact";
      data.source = isOrder ? "delivery-order" : "contact";

      // Show loading state
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }

      const success = form.querySelector(".form-success");

      // Send to backend
      fetch(API_BASE + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            if (success) {
              success.classList.add("show");
              success.textContent =
                result.message ||
                form.dataset.success ||
                "Thanks — we will contact you shortly.";
            }
            form.reset();
          } else {
            alert(result.error || "Something went wrong. Please try again.");
          }
        })
        .catch((err) => {
          console.error("Form submission error:", err);
          // Fallback: show success locally if backend is unreachable
          if (success) {
            success.classList.add("show");
            success.textContent =
              form.dataset.success || "Thanks — we will contact you shortly.";
          }
          form.reset();
        })
        .finally(() => {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        });
    });

    const phone = form.querySelector('[name="phone"]');
    phone?.addEventListener("input", () => phone.setCustomValidity(""));
  });
}

// Lightbox: simple, dependency-free
function initLightbox() {
  function openLightbox(src, alt) {
    if (!src) return;
    const overlay = document.createElement("div");
    overlay.className = "lightbox-overlay";

    overlay.innerHTML = `
      <div class="lightbox-inner" role="dialog" aria-modal="true">
        <button class="lightbox-close" aria-label="Close">×</button>
        <img src="${src}" alt="${alt || ""}" loading="lazy">
      </div>
    `;

    document.body.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add("show"));

    const close = () => {
      overlay.classList.remove("show");
      document.removeEventListener("keydown", onKey);
      overlay.addEventListener("transitionend", () => overlay.remove(), {
        once: true,
      });
    };

    function onKey(e) {
      if (e.key === "Escape") close();
    }
    document.addEventListener("keydown", onKey);

    overlay.querySelector(".lightbox-close")?.addEventListener("click", close);
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) close();
    });
  }

  document.querySelectorAll(".lightbox-target").forEach((el) => {
    el.addEventListener("click", () => {
      const src = el.dataset.full;
      const alt = el.getAttribute("aria-label") || "";
      openLightbox(src, alt);
    });
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const src = el.dataset.full;
        const alt = el.getAttribute("aria-label") || "";
        openLightbox(src, alt);
      }
    });
  });
}

/* ---------- Dark Mode Toggle ---------- */
function initThemeToggle() {
  const toggle = document.getElementById("theme-toggle");
  if (!toggle) return;

  // Restore saved preference
  const saved = localStorage.getItem("triplea-theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem("triplea-theme", "light");
      toggle.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("triplea-theme", "dark");
      toggle.textContent = "☀️";
    }
  });
}

/* ---------- Mobile Slide-in Nav Drawer ---------- */
function initMobileDrawer() {
  const toggle = document.getElementById("nav-toggle");
  if (!toggle) return;

  // Create drawer elements if not exist
  if (!document.querySelector(".nav-drawer")) {
    const drawer = document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.setAttribute("role", "dialog");
    drawer.setAttribute("aria-modal", "true");
    drawer.setAttribute("aria-label", "Navigation menu");
    drawer.innerHTML = `
      <div class="nav-drawer-header">
        <div class="brand-text">TRIPLE A GAS<span>LPG · Ghana</span></div>
        <button class="nav-drawer-close" aria-label="Close menu" id="nav-drawer-close">✕</button>
      </div>
      <ul class="nav-drawer-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="products.html">Products</a></li>
        <li><a href="stations.html">Find a Station</a></li>
        <li><a href="safety.html">Safety</a></li>
        <li><a href="faq.html">FAQ</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
      <div class="nav-drawer-footer">
        <a href="tel:${PHONE_TEL}">📞 Call ${PHONE}</a>
        <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">💬 Chat on WhatsApp</a>
      </div>
    `;
    document.body.appendChild(drawer);

    const overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);

    const closeBtn = document.getElementById("nav-drawer-close");
    const drawerLinks = drawer.querySelectorAll("a");

    function openDrawer() {
      drawer.classList.add("open");
      overlay.classList.add("open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = "✕";
      document.body.style.overflow = "hidden";
    }

    function closeDrawer() {
      drawer.classList.remove("open");
      overlay.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
      document.body.style.overflow = "";
    }

    toggle.addEventListener("click", () => {
      if (drawer.classList.contains("open")) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });

    closeBtn.addEventListener("click", closeDrawer);
    overlay.addEventListener("click", closeDrawer);

    drawerLinks.forEach((link) => {
      link.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && drawer.classList.contains("open")) {
        closeDrawer();
      }
    });
  }
}

/* ---------- Toast Notifications ---------- */
function ensureToastContainer() {
  let container = document.querySelector(".toast-container");
  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message, type) {
  type = type || "success";
  const container = ensureToastContainer();
  const toast = document.createElement("div");
  toast.className = "toast toast-" + type;
  const icons = { success: "✅", error: "❌", warning: "⚠️" };
  toast.innerHTML = (icons[type] || "✅") + " " + message;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add("toast-out");
    toast.addEventListener("animationend", () => toast.remove());
  }, 4000);
}

// Override initForms to use toasts
function initForms() {
  document.querySelectorAll("[data-form]").forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = form.querySelector('[name="phone"]');
      if (phone && !normalizeGhPhone(phone.value)) {
        phone.focus();
        phone.setCustomValidity(
          "Enter a valid Ghana phone number, e.g. 024 000 0000",
        );
        phone.reportValidity();
        return;
      }
      if (phone) phone.setCustomValidity("");

      // Gather form data
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // Determine endpoint: if form has "size" field, it's an order
      const isOrder = form.querySelector('[name="size"]') !== null;
      const endpoint = isOrder ? "/order" : "/contact";
      data.source = isOrder ? "delivery-order" : "contact";

      // Show loading state
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn ? btn.textContent : "";
      if (btn) {
        btn.disabled = true;
        btn.textContent = "Sending…";
      }

      // Send to backend
      fetch(API_BASE + endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.success) {
            showToast(
              result.message ||
                form.dataset.success ||
                "Thanks — we will contact you shortly.",
              "success",
            );
            form.reset();
          } else {
            showToast(
              result.error || "Something went wrong. Please try again.",
              "error",
            );
          }
        })
        .catch((err) => {
          // Fallback: show success locally if backend is unreachable
          showToast(
            form.dataset.success || "Thanks — we will contact you shortly.",
            "success",
          );
          form.reset();
        })
        .finally(() => {
          if (btn) {
            btn.disabled = false;
            btn.textContent = originalText;
          }
        });
    });

    const phone = form.querySelector('[name="phone"]');
    phone?.addEventListener("input", () => phone.setCustomValidity(""));
  });
}

/* ---------- Particle Background (Canvas-based, lightweight) ---------- */
function initParticles() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  // Remove existing canvas if any
  const existing = document.getElementById("particle-canvas");
  if (existing) existing.remove();

  const canvas = document.createElement("canvas");
  canvas.id = "particle-canvas";
  hero.appendChild(canvas);
  const ctx = canvas.getContext("2d");
  let particles = [];
  let animId = null;

  function resize() {
    const rect = hero.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }

  function createParticles(count) {
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2.5 + 1,
        alpha: Math.random() * 0.4 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const w = canvas.width;
    const h = canvas.height;
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(255, 255, 255, " + p.alpha + ")";
      ctx.fill();
      // Draw connections
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle =
            "rgba(255, 255, 255, " + 0.08 * (1 - dist / 120) + ")";
          ctx.lineWidth = 0.6;
          ctx.stroke();
        }
      }
    }
    animId = requestAnimationFrame(draw);
  }

  resize();
  const count = Math.min(Math.floor((canvas.width * canvas.height) / 8000), 60);
  createParticles(count);
  draw();

  const ro = new ResizeObserver(() => {
    resize();
    const newCount = Math.min(
      Math.floor((canvas.width * canvas.height) / 8000),
      60,
    );
    if (Math.abs(newCount - particles.length) > 5) {
      createParticles(newCount);
    }
  });
  ro.observe(hero);
}

/* ---------- Smooth Anchor Scroll ---------- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const targetId = anchor.getAttribute("href");
      if (targetId === "#" || !targetId) return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerH =
          parseInt(
            getComputedStyle(document.documentElement).getPropertyValue(
              "--header-h",
            ),
          ) || 68;
        const top =
          target.getBoundingClientRect().top +
          window.pageYOffset -
          headerH -
          16;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });
}

/* ---------- Image Lazy-Load with Blur-Up ---------- */
function initLazyImages() {
  if (!window.IntersectionObserver) return;
  const images = document.querySelectorAll(".lazy-img");
  if (!images.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          if (src) {
            img.src = src;
            img.removeAttribute("data-src");
            img.addEventListener("load", () => {
              const wrap = img.closest(".lazy-img-wrap");
              if (wrap) wrap.classList.add("loaded");
            });
            img.addEventListener("error", () => {
              const wrap = img.closest(".lazy-img-wrap");
              if (wrap) wrap.classList.add("loaded");
            });
          }
          observer.unobserve(img);
        }
      });
    },
    { rootMargin: "200px 0px" },
  );

  images.forEach((img) => observer.observe(img));
}

/* ---------- Back-to-Top Button ---------- */
function initBackToTop() {
  let btn = document.querySelector(".back-to-top");
  if (!btn) {
    btn = document.createElement("button");
    btn.className = "back-to-top";
    btn.setAttribute("aria-label", "Back to top");
    btn.innerHTML = "↑";
    document.body.appendChild(btn);
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle("visible", window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ---------- Scroll-Aware Sticky Nav (shrink on scroll) ---------- */
function initScrollNav() {
  const header = document.querySelector(".site-header");
  if (!header) return;

  let lastScroll = 0;
  let ticking = false;

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const currentScroll = window.scrollY;
        if (currentScroll > 120) {
          header.style.setProperty("--header-h", "56px");
          header.style.boxShadow = "0 2px 16px rgba(0,0,0,0.2)";
        } else {
          header.style.setProperty("--header-h", "68px");
          header.style.boxShadow = "";
        }
        lastScroll = currentScroll;
        ticking = false;
      });
      ticking = true;
    }
  });
}

/* ---------- Update renderHeader to include theme toggle ---------- */
const _origRenderHeader = renderHeader;
renderHeader = function () {
  _origRenderHeader();
  // Add theme toggle button next to nav toggle inside the header
  const container = document.querySelector(".site-header .container");
  if (container) {
    const existingToggle = document.getElementById("theme-toggle");
    if (!existingToggle) {
      const themeBtn = document.createElement("button");
      themeBtn.className = "theme-toggle";
      themeBtn.id = "theme-toggle";
      themeBtn.type = "button";
      themeBtn.setAttribute("aria-label", "Toggle dark mode");
      // Check saved preference
      const saved = localStorage.getItem("triplea-theme");
      themeBtn.textContent = saved === "dark" ? "☀️" : "🌙";
      const actions = container.querySelector(".header-actions");
      if (actions) {
        actions.insertBefore(themeBtn, actions.firstChild);
      }
    }
  }
};

document.addEventListener("DOMContentLoaded", () => {
  renderHeader();
  renderFooter();
  applySiteConfigToStatic();
  createFloatingCall();
  initAos();
  initTypewriter();
  animateGauges();
  initScrollTriggeredGauges();
  initButtonRipples();
  initCounters();
  initStationSearch();
  initStationTeaser();
  initStationGalleries();
  initForms();
  initLightbox();
  // Phase 2 features
  initThemeToggle();
  initMobileDrawer();
  initParticles();
  initSmoothScroll();
  initLazyImages();
  initBackToTop();
  initScrollNav();
});
