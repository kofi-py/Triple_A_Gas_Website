// Station map initialization
document.addEventListener('DOMContentLoaded', function() {
  if (!document.getElementById('station-map')) return;

  const map = L.map('station-map').setView([5.6037, -0.1870], 7);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  const wineRedColor = '#722F37';
  const markers = L.featureGroup();

  function createMarker(location) {
    const icon = L.divIcon({
      className: 'station-marker',
      html: `<div class="station-marker-label">${location.city}</div>`,
      iconSize: null,
      iconAnchor: [0, 0]
    });

    const marker = L.marker([location.coordinates.lat, location.coordinates.lng], {
      icon,
      title: location.city
    }).bindPopup(`
      <div class="map-info-window">
        <h4>${location.city} ${location.type === 'Headquarters' ? '🏢' : '📍'}</h4>
        <p><strong>${location.address}</strong></p>
        <p>📞 <a href="tel:${location.phone.replace(/\s/g, '')}">${location.phone}</a></p>
        <p>Services: ${location.services.join(', ')}</p>
        ${location.googleMapsUrl ? `<p><a href="${location.googleMapsUrl}" target="_blank" rel="noopener">Open in Google Maps</a></p>` : ''}
      </div>
    `, {
      maxWidth: 280,
      className: 'station-popup'
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

  window.addEventListener('resize', function() {
    setTimeout(function() {
      map.invalidateSize();
    }, 250);
  });

  // Recalculate after AOS fade-in animation completes
  setTimeout(function() {
    map.invalidateSize();
    if (markers.getLayers().length) {
      map.fitBounds(markers.getBounds().pad(0.1));
    }
  }, 700);
});
