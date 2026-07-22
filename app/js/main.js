/* Triple A Gas — shared public JS */

const GAUGE_SVG = `
<img class="brand-mark" src="images/offical_logo.png" alt="Triple A Gas" style="width:70px;height:70px;object-fit:contain;display:block;">`;

function formatLocalPhone(phone) {
  return phone.replace(/^\+233\s?/, '0').replace(/\s+/g, ' ').trim();
}

function buildStationsFromCompanyInfo() {
  const locations = window.COMPANY_INFO?.locations || [];
  return locations.map((loc) => ({
    id: loc.id,
    name: loc.type === 'Headquarters'
      ? `Triple A LP Gas — ${loc.city} (HQ)`
      : `Triple A LP Gas — ${loc.city}`,
    town: loc.city,
    region: loc.region,
    address: loc.address,
    phone: formatLocalPhone(loc.phone),
    hours: 'Confirm before travelling',
    status: loc.type === 'Headquarters' ? 'safe' : 'hazard',
    stock: 'Availability to confirm',
    mapUrl: loc.googleMapsUrl || `https://www.openstreetmap.org/?mlat=${loc.coordinates.lat}&mlon=${loc.coordinates.lng}#map=15/${loc.coordinates.lat}/${loc.coordinates.lng}`,
    coordinates: loc.coordinates
  }));
}

const STATIONS = buildStationsFromCompanyInfo();

// Read phone and WhatsApp from site-config.js (fallback to current values)
const PHONE = (window.SITE_CONFIG && window.SITE_CONFIG.PHONE) ? window.SITE_CONFIG.PHONE : '024 507 5496';
const PHONE_TEL = (window.SITE_CONFIG && window.SITE_CONFIG.PHONE_TEL) ? window.SITE_CONFIG.PHONE_TEL : '+233245075496';
const WHATSAPP = (window.SITE_CONFIG && window.SITE_CONFIG.WHATSAPP) ? window.SITE_CONFIG.WHATSAPP : '233245075496';

// Apply site config to existing static anchors (class-based):
function applySiteConfigToStatic() {
  // anchors that should show the phone number
  document.querySelectorAll('a.autophone').forEach((a) => {
    a.setAttribute('href', `tel:${PHONE_TEL}`);
    // If anchor contains the phone text, update it for consistency
    if (a.textContent && a.textContent.trim().match(/\d/)) {
      // preserve surrounding text (e.g., "Call 024 507 5496")
      const text = a.textContent.trim();
      const replaced = text.replace(/\+?233\s?\d{2,3}[\s\d-]*/g, PHONE).replace(/\d{2,3}[\s\d-]{6,}/g, PHONE);
      a.textContent = replaced || PHONE;
    }
  });
  // anchors that should link to WhatsApp
  document.querySelectorAll('a.autowa').forEach((a) => {
    a.setAttribute('href', `https://wa.me/${WHATSAPP}`);
  });
}

function createFloatingCall() {
  if (document.querySelector('.fab-call')) return;
  const a = document.createElement('a');
  a.className = 'fab-call autophone';
  a.setAttribute('aria-label', 'Call Triple A Gas');
  a.innerHTML = '📞';
  document.body.appendChild(a);
}


function getPage() {
  const path = location.pathname.split('/').pop() || 'index.html';
  if (!path || path === '' || path === '/') return 'home';
  return path.replace('.html', '');
}

function isActive(page, current) {
  if (page === 'home' && (current === 'index' || current === 'home' || current === '')) return true;
  return page === current;
}

function renderHeader() {
  const el = document.getElementById('site-header');
  if (!el) return;
  const current = getPage();
  const base = el.dataset.base || '';

  el.innerHTML = `
    <div class="topbar">
      <div class="container">
        <span>Triple A LP Gas Limited · Ghana</span>
        <div class="topbar-right">
          <a href="tel:${PHONE_TEL}">Call ${PHONE}</a>
          <a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>
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
          <li><a href="${base}index.html" ${isActive('home', current) ? 'aria-current="page"' : ''}>Home</a></li>
          <li><a href="${base}products.html" ${isActive('products', current) ? 'aria-current="page"' : ''}>Products</a></li>
          <li><a href="${base}stations.html" ${isActive('stations', current) ? 'aria-current="page"' : ''}>Find a Station</a></li>
          <li><a href="${base}safety.html" ${isActive('safety', current) ? 'aria-current="page"' : ''}>Safety</a></li>
          <li><a href="${base}about.html" ${isActive('about', current) ? 'aria-current="page"' : ''}>About</a></li>
          <li><a href="${base}contact.html" ${isActive('contact', current) ? 'aria-current="page"' : ''}>Contact</a></li>
        </ul>
        <div class="header-actions">
          <a class="btn btn-whatsapp btn-sm" href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-primary btn-sm" href="tel:${PHONE_TEL}">Call Us</a>
        </div>
      </div>
    </header>
  `;

  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', open);
      toggle.textContent = open ? '✕' : '☰';
    });
  }
}

function renderFooter() {
  const el = document.getElementById('site-footer');
  if (!el) return;
  const base = el.dataset.base || '';

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
              <li><a href="${base}about.html">About</a></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <a class="footer-phone" href="tel:${PHONE_TEL}">${PHONE}</a>
            <p style="margin:0 0 6px;">Head Office, Accra</p>
            <a href="mailto:hello@triplaagas.com">hello@triplaagas.com</a>
          </div>
          <div>
            <h4>Order</h4>
            <ul>
              <li><a href="https://wa.me/${WHATSAPP}" target="_blank" rel="noopener">Chat on WhatsApp</a></li>
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
      💬<span>WhatsApp</span>
    </a>
  `;
}

function animateGauges() {
  document.querySelectorAll('[data-gauge]').forEach((el) => {
    const pct = Number(el.dataset.gauge) || 0;
    const circle = el.querySelector('.gauge-arc');
    if (!circle) return;
    const circumference = 2 * Math.PI * 42;
    const offset = circumference - (pct / 100) * circumference;
    circle.style.strokeDasharray = String(circumference);
    circle.style.strokeDashoffset = String(circumference);
    requestAnimationFrame(() => {
      circle.style.transition = 'stroke-dashoffset 1.1s ease';
      circle.style.strokeDashoffset = String(offset);
    });
  });
}

function initStationSearch() {
  const grid = document.getElementById('station-grid');
  const search = document.getElementById('station-search');
  const chips = document.querySelectorAll('.filter-chip');
  if (!grid) return;

  let region = 'all';

  function render(list) {
    if (!list.length) {
      grid.innerHTML = `<div class="empty-state"><p>No stations match your search. Try another town or region.</p></div>`;
      refreshAos();
      return;
    }
    grid.innerHTML = list.map((s, i) => `
      <article class="card station-card" data-region="${s.region}" data-aos="fade-up" data-aos-delay="${Math.min(i * 60, 240)}">
        <h3>${s.name}</h3>
        <p>${s.address}</p>
        <a class="phone" href="tel:+233${s.phone.replace(/\s/g, '').replace(/^0/, '')}">${s.phone}</a>
        ${s.mapUrl ? `<a class="station-map" href="${s.mapUrl}" target="_blank" rel="noopener">Open map</a>` : ''}
        <div class="station-meta">
          <span class="badge badge-${s.status}">${s.hours}</span>
          <span class="badge badge-${s.stock === 'In stock' ? 'safe' : 'hazard'}">${s.stock}</span>
        </div>
      </article>
    `).join('');
    refreshAos();
  }

  function filter() {
    const q = (search?.value || '').trim().toLowerCase();
    const list = STATIONS.filter((s) => {
      const matchRegion = region === 'all' || s.region === region;
      const matchQ = !q ||
        s.name.toLowerCase().includes(q) ||
        s.town.toLowerCase().includes(q) ||
        s.region.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q);
      return matchRegion && matchQ;
    });
    render(list);
  }

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      region = chip.dataset.region;
      filter();
    });
  });

  search?.addEventListener('input', filter);
  render(STATIONS);
}

function initStationTeaser() {
  const el = document.getElementById('station-teaser');
  if (!el) return;
  const preview = STATIONS.slice(0, 3);
  el.innerHTML = preview.map((s, i) => `
    <article class="card station-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <h3>${s.name}</h3>
      <p>${s.address}</p>
        <a class="phone" href="tel:+233${s.phone.replace(/\s/g, '').replace(/^0/, '')}">${s.phone}</a>
        ${s.mapUrl ? `<a class="station-map" href="${s.mapUrl}" target="_blank" rel="noopener">Open map</a>` : ''}
      <div class="station-meta">
        <span class="badge badge-${s.status}">${s.hours}</span>
      </div>
    </article>
  `).join('');
  refreshAos();
}

function initAos() {
  if (typeof AOS === 'undefined') return;
  AOS.init({
    duration: 650,
    easing: 'ease-out-cubic',
    once: true,
    offset: 60,
    disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  });
}

function refreshAos() {
  if (typeof AOS === 'undefined') return;
  requestAnimationFrame(() => AOS.refreshHard());
}

function normalizeGhPhone(value) {
  const digits = value.replace(/\D/g, '');
  if (digits.length === 10 && digits.startsWith('0')) return true;
  if (digits.length === 12 && digits.startsWith('233')) return true;
  if (digits.length === 9) return true;
  return false;
}

function initForms() {
  document.querySelectorAll('[data-form]').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = form.querySelector('[name="phone"]');
      if (phone && !normalizeGhPhone(phone.value)) {
        phone.focus();
        phone.setCustomValidity('Enter a valid Ghana phone number, e.g. 024 000 0000');
        phone.reportValidity();
        return;
      }
      if (phone) phone.setCustomValidity('');

      const success = form.querySelector('.form-success');
      if (success) {
        success.classList.add('show');
        success.textContent = form.dataset.success || 'Thanks — we will contact you shortly.';
      }
      form.reset();
    });

    const phone = form.querySelector('[name="phone"]');
    phone?.addEventListener('input', () => phone.setCustomValidity(''));
  });
}

// Lightbox: simple, dependency-free
function initLightbox() {
  function openLightbox(src, alt) {
    if (!src) return;
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';

    overlay.innerHTML = `
      <div class="lightbox-inner" role="dialog" aria-modal="true">
        <button class="lightbox-close" aria-label="Close">×</button>
        <img src="${src}" alt="${alt || ''}">
      </div>
    `;

    document.body.appendChild(overlay);
    // allow CSS transition
    requestAnimationFrame(() => overlay.classList.add('show'));

    const close = () => {
      overlay.classList.remove('show');
      document.removeEventListener('keydown', onKey);
      overlay.addEventListener('transitionend', () => overlay.remove(), { once: true });
    };

    function onKey(e) { if (e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);

    overlay.querySelector('.lightbox-close')?.addEventListener('click', close);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) close(); });
  }

  document.querySelectorAll('.lightbox-target').forEach((el) => {
    el.addEventListener('click', () => {
      const src = el.dataset.full;
      const alt = el.getAttribute('aria-label') || '';
      openLightbox(src, alt);
    });
    el.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault(); const src = el.dataset.full; const alt = el.getAttribute('aria-label') || ''; openLightbox(src, alt); } });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderHeader();
  renderFooter();
  // Apply config-driven updates to any static anchors and add floating CTA
  applySiteConfigToStatic();
  createFloatingCall();
  initAos();
  animateGauges();
  initStationSearch();
  initStationTeaser();
  initForms();
  initLightbox();
});
