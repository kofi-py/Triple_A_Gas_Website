/* Triple A Gas — staff portal */

const AUTH_KEY = 'tag_portal_session';
const NOTES_KEY = 'tag_shift_notes';

const DEMO_USER = {
  email: 'manager@triplaagas.com',
  password: 'gas2026',
  name: 'Kwame A.',
  role: 'Manager',
  outlet: 'Achimota',
};

const GAUGE_SVG = `
<img class="brand-mark" src="../images/offical_logo.png" alt="Triple A Gas" style="width:70px;height:70px;object-fit:contain;display:block;">`;

function getSession() {
  try {
    return JSON.parse(sessionStorage.getItem(AUTH_KEY) || 'null');
  } catch {
    return null;
  }
}

function setSession(user) {
  sessionStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

function clearSession() {
  sessionStorage.removeItem(AUTH_KEY);
}

function requireAuth() {
  const session = getSession();
  if (!session) {
    location.href = 'index.html';
    return null;
  }
  return session;
}

function initLogin() {
  const form = document.getElementById('login-form');
  if (!form) return;

  if (getSession()) {
    location.href = 'dashboard.html';
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value.trim().toLowerCase();
    const password = form.password.value;
    const error = document.getElementById('login-error');

    if (email === DEMO_USER.email && password === DEMO_USER.password) {
      setSession({
        name: DEMO_USER.name,
        role: DEMO_USER.role,
        outlet: DEMO_USER.outlet,
        email: DEMO_USER.email,
      });
      location.href = 'dashboard.html';
      return;
    }

    error?.classList.add('show');
  });
}

function getNotes() {
  try {
    return JSON.parse(localStorage.getItem(NOTES_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveNotes(notes) {
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
}

function formatStamp(date = new Date()) {
  const pad = (n) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())} · ${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function initDashboard() {
  const session = requireAuth();
  if (!session) return;

  document.getElementById('user-name').textContent = session.name;
  document.getElementById('user-role').textContent = `${session.role} · ${session.outlet}`;
  document.getElementById('dash-title').textContent = `${session.outlet} — Dashboard`;
  const badge = document.getElementById('session-badge');
  if (badge) badge.textContent = `${session.name} · ${session.role}`;

  document.getElementById('logout-btn')?.addEventListener('click', (e) => {
    e.preventDefault();
    clearSession();
    location.href = 'index.html';
  });

  const menuToggle = document.getElementById('portal-menu-toggle');
  const side = document.getElementById('portal-side');
  menuToggle?.addEventListener('click', () => side?.classList.toggle('open'));

  // Module nav
  document.querySelectorAll('[data-module]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.module;
      document.querySelectorAll('[data-module]').forEach((b) => b.classList.remove('active'));
      document.querySelectorAll('.admin-module').forEach((m) => m.classList.remove('active'));
      btn.classList.add('active');
      document.getElementById(`module-${id}`)?.classList.add('active');
      side?.classList.remove('open');
    });
  });

  // Note meta clock
  const meta = document.getElementById('note-meta');
  if (meta) {
    meta.textContent = `${formatStamp()} · ${session.name}`;
  }

  renderNotes();

  document.getElementById('note-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = document.getElementById('note-body');
    const text = textarea.value.trim();
    if (!text) return;

    const notes = getNotes();
    notes.unshift({
      id: Date.now(),
      body: text,
      staff: session.name,
      outlet: session.outlet,
      at: formatStamp(),
    });
    saveNotes(notes);
    textarea.value = '';
    if (meta) meta.textContent = `${formatStamp()} · ${session.name}`;
    renderNotes();
  });
}

function renderNotes() {
  const list = document.getElementById('note-list');
  if (!list) return;

  const defaults = [
    {
      id: 1,
      body: 'Low stock on 6kg — reorder before Friday.',
      staff: 'Kwame A.',
      at: '2026-07-19 · 08:52',
    },
    {
      id: 2,
      body: 'Bulk tank #04 inspection scheduled for tomorrow morning. Hose kit ready in store room.',
      staff: 'Efua O.',
      at: '2026-07-18 · 17:10',
    },
  ];

  const notes = [...getNotes(), ...defaults];
  list.innerHTML = notes.map((n) => `
    <li>
      <div class="meta">${n.at} · ${n.staff}${n.outlet ? ` · ${n.outlet}` : ''}</div>
      <p class="body">${escapeHtml(n.body)}</p>
    </li>
  `).join('');
}

function escapeHtml(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

document.addEventListener('DOMContentLoaded', () => {
  initLogin();
  if (document.body.classList.contains('portal-dashboard')) {
    initDashboard();
  }
});
