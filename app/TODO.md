# Triple A Gas — Enhancement Tracker

## ✅ Phase 1 — Homepage Hero Improvements

- [x] Create TODO.md
- [x] Typewriter effect on hero headline
- [x] Re-trigger gauge animation on scroll

## ✅ Phase 2 — Visual Design Upgrades

- [x] Glassmorphism utility classes
- [x] Glassmorphism hero panel
- [x] Enhanced shadows & depth
- [x] Animated gradient hero backgrounds
- [x] Noise texture overlay
- [x] Button micro-interactions (scale, glow, ripple)
- [x] Card hover lift effect
- [x] Border glow utility

## ✅ Phase 2.5 — Station Directions

- [x] Driving directions for all 7 stations
- [x] Expandable directions in station cards

## ✅ Phase 2 — UX & Interactive Features

- [x] **Dark Mode Toggle** — localStorage-persisted, CSS custom properties swap
- [x] **Mobile Slide-in Nav Drawer** — overlay + drawer pattern, no dropdown
- [x] **Toast Notifications** — success/error/warning animated toasts
- [x] **Particle Background** — canvas particles on hero section
- [x] **Smooth Anchor Scroll** — header offset-aware
- [x] **Image Lazy-Load with Blur-Up** — IntersectionObserver + blur placeholder
- [x] **Back-to-Top Button** — appears after 400px scroll
- [x] **Scroll-Aware Sticky Nav** — shrinks on scroll
- [x] **Email Fix** — `hello@triplaagas.com` → `tripleagascompany@yahoo.com`

## ✅ Phase 3 — Per-Page Polish (Complete)

### About Page ✅

- [x] Company timeline with dot markers
- [x] 3D team card flip on hover
- [x] NPA License badge visual

### Products Page ✅

- [x] SVG cylinder illustrations
- [x] Compare sizes modal with overlay

### Safety Page ✅

- [x] Illustrated safety icons
- [x] Expandable detailed guides
- [x] Sticky emergency bar

### FAQ Page ✅

- [x] "Was this helpful?" thumbs up/down feedback
- [x] Expand All / Collapse All button

### Contact Page ✅

- [x] Quick-contact animated pill buttons
- [x] Animated form validation with `.form-field` wrappers

### 404 Page ✅

- [x] Bouncing cylinder animation (`bounce-cylinder` keyframes applied)

### Stations Page ✅

- [x] Enhanced `.station-directions-link` in JS templates

## ✅ Phase 4 — Technical & Performance Infrastructure

- [x] **Service Worker** (`app/sw.js`) — Cache-first for static assets, network-first for API, offline fallback
- [x] **PWA Manifest Enhancement** — Added `description`, `categories`, `scope`, `orientation`, `screenshots`, `purpose: maskable`
- [x] **Font Loading Optimization** — Google Fonts loaded with `media="print"` + `onload="this.media='all'"` + `<noscript>` fallback on all pages, `font-display: swap` in CSS
- [x] **Environment Config** — `site-config.js` now has `ENV` (dev/prod), `API_BASE` getter that auto-switches, `SITE_URL`, `EMAIL`, company name constants
- [x] **Complete Sitemap** — All 7 pages with `changefreq`/`priority`, trailing slash for root
- [x] **Dynamic API Base** — `main.js` reads `API_BASE` from `SITE_CONFIG` instead of hardcoded localhost
- [x] **Service Worker Registration** — Added to all pages' `<head>` with `navigator.serviceWorker.register('sw.js')`

## 🚀 Next — Phase 5: Advanced Features (Future)

- [ ] Online ordering system with MoMo payment integration
- [ ] Live stock availability per station
- [ ] Customer portal with order history & delivery tracking
- [ ] Multi-language support (English + Twi + Ga)
- [ ] Blog/news section for company updates & safety tips
- [ ] Image WebP conversion & CDN deployment
