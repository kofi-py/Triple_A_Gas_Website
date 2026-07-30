/* Triple A Gas — Live Stock Availability per Station */

window.STOCK = {
  // Mock stock data per station (would come from backend in production)
  _stockData: {
    1: {
      status: "in-stock",
      level: "high",
      lastUpdated: "2024-01-15 10:30",
      note: "All sizes available",
    },
    2: {
      status: "in-stock",
      level: "medium",
      lastUpdated: "2024-01-15 10:30",
      note: "14.5kg low stock",
    },
    3: {
      status: "limited",
      level: "low",
      lastUpdated: "2024-01-14 16:00",
      note: "6kg only",
    },
    4: {
      status: "in-stock",
      level: "high",
      lastUpdated: "2024-01-15 08:00",
      note: "All sizes available",
    },
    5: {
      status: "in-stock",
      level: "medium",
      lastUpdated: "2024-01-15 09:15",
      note: "3kg & 14.5kg in stock",
    },
    6: {
      status: "limited",
      level: "low",
      lastUpdated: "2024-01-13 14:30",
      note: "Call to check availability",
    },
    7: {
      status: "in-stock",
      level: "medium",
      lastUpdated: "2024-01-15 07:45",
      note: "6kg & 14.5kg in stock",
    },
  },

  /* ---------- Get stock for a station ---------- */
  getStock(stationId) {
    const stock = this._stockData[stationId];
    if (!stock)
      return {
        status: "unknown",
        level: "unknown",
        lastUpdated: null,
        note: "Contact station",
      };

    return {
      ...stock,
      label: this._getLabel(stock.status),
      badgeClass: this._getBadgeClass(stock.status),
      levelLabel: this._getLevelLabel(stock.level),
    };
  },

  /* ---------- Get all stock data ---------- */
  getAll() {
    return this._stockData;
  },

  /* ---------- Update stock from backend ---------- */
  async fetchStock() {
    const API_BASE =
      window.SITE_CONFIG?.API_BASE || "http://localhost:3001/api";

    try {
      const response = await fetch(API_BASE + "/stock");
      const data = await response.json();

      if (data && data.stations) {
        // Merge fetched data with defaults
        Object.keys(data.stations).forEach((id) => {
          if (this._stockData[id]) {
            this._stockData[id] = {
              ...this._stockData[id],
              ...data.stations[id],
            };
          }
        });
      }
    } catch (err) {
      // Silently fall back to default data
    }
  },

  /* ---------- Render stock badges on station cards ---------- */
  renderBadges() {
    document.querySelectorAll("[data-station-id]").forEach((el) => {
      const id = parseInt(el.dataset.stationId);
      const stock = this.getStock(id);
      const badgeEl = el.querySelector(".stock-badge");

      if (badgeEl) {
        badgeEl.className = `badge badge-${stock.badgeClass}`;
        badgeEl.textContent = stock.label;
        badgeEl.title = stock.note;

        // Show last updated as tooltip
        if (stock.lastUpdated) {
          badgeEl.dataset.tooltip = `Updated: ${stock.lastUpdated}`;
        }
      }

      // Also update the stock note if present
      const noteEl = el.querySelector(".stock-note");
      if (noteEl) {
        noteEl.textContent = stock.note;
      }
    });
  },

  /* ---------- Private helpers ---------- */
  _getLabel(status) {
    const labels = {
      "in-stock": "In Stock",
      limited: "Limited",
      "out-of-stock": "Out of Stock",
      unknown: "Call to check",
    };
    return labels[status] || "Call to check";
  },

  _getBadgeClass(status) {
    const classes = {
      "in-stock": "safe",
      limited: "hazard",
      "out-of-stock": "danger",
      unknown: "hazard",
    };
    return classes[status] || "hazard";
  },

  _getLevelLabel(level) {
    const labels = {
      high: "✓ Ready",
      medium: "• Moderate",
      low: "! Low",
      unknown: "? Unknown",
    };
    return labels[level] || "Unknown";
  },

  /* ---------- Initialize stock tracking ---------- */
  init() {
    this.fetchStock().then(() => {
      this.renderBadges();
    });

    // Re-render badges when stations are loaded (for dynamic content)
    document.addEventListener("DOMContentLoaded", () => {
      // Use MutationObserver to catch dynamically added station cards
      const observer = new MutationObserver(() => {
        this.renderBadges();
      });

      const grid = document.getElementById("station-grid");
      if (grid) {
        observer.observe(grid, { childList: true, subtree: true });
      }
    });
  },
};

// Auto-init
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => window.STOCK.init());
} else {
  window.STOCK.init();
}
