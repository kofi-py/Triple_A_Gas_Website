// Station map initialization
document.addEventListener("DOMContentLoaded", function () {
  if (!document.getElementById("station-map")) return;

  const map = L.map("station-map").setView([5.6037, -0.187], 7);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    maxZoom: 19,
  }).addTo(map);

  const markers = L.featureGroup();

  function createMarker(location) {
    const icon = L.divIcon({
      className: "station-marker",
      html: `<div class="station-marker-label">${location.city}</div>`,
      iconSize: null,
      iconAnchor: [0, 0],
    });

    var popupContent = '<div class="map-info-window">';
    popupContent +=
      "<h4>" +
      location.city +
      " " +
      (location.type === "Headquarters" ? "🏢" : "📍") +
      "</h4>";
    if (location.images && location.images.length > 0) {
      var imgSrc = location.images[0].startsWith("../")
        ? location.images[0].substring(3)
        : location.images[0];
      popupContent +=
        '<img src="' +
        imgSrc +
        '" alt="Photo of ' +
        location.city +
        ' station" style="width:100%;height:120px;object-fit:cover;border-radius:6px;margin-bottom:8px;" loading="lazy" onerror="this.style.display=\'none\'">';
    } else {
      popupContent +=
        '<div style="width:100%;height:80px;background:#F0E4E6;border-radius:6px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;font-size:28px;">📷</div>';
    }
    popupContent += "<p><strong>" + location.address + "</strong></p>";
    popupContent +=
      '<p>📞 <a href="tel:' +
      location.phone.replace(/\s/g, "") +
      '">' +
      location.phone +
      "</a></p>";
    popupContent += "<p>Services: " + location.services.join(", ") + "</p>";
    if (location.googleMapsUrl) {
      popupContent +=
        '<p><a href="' +
        location.googleMapsUrl +
        '" target="_blank" rel="noopener">Open in Google Maps</a></p>';
    }
    if (location.images && location.images.length > 1) {
      popupContent +=
        '<p style="font-size:11px;color:#9A7E84;">📸 ' +
        location.images.length +
        " photos</p>";
    }
    popupContent += "</div>";

    const marker = L.marker(
      [location.coordinates.lat, location.coordinates.lng],
      {
        icon,
        title: location.city,
      },
    ).bindPopup(popupContent, {
      maxWidth: 280,
      className: "station-popup",
    });

    markers.addLayer(marker);
    return marker;
  }

  if (window.COMPANY_INFO && window.COMPANY_INFO.locations) {
    window.COMPANY_INFO.locations.forEach(createMarker);
    map.addLayer(markers);

    if (markers.getLayers().length) {
      map.fitBounds(markers.getBounds().pad(0.1));
    }
  }

  window.addEventListener("resize", function () {
    setTimeout(function () {
      map.invalidateSize();
    }, 250);
  });

  // Recalculate after AOS fade-in animation completes
  setTimeout(function () {
    map.invalidateSize();
    if (markers.getLayers().length) {
      map.fitBounds(markers.getBounds().pad(0.1));
    }
  }, 700);
});
