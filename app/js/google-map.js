// Google Maps embed for the Find a Station page. No API key is required.
document.addEventListener("DOMContentLoaded", () => {
  const map = document.getElementById("station-map");
  if (!map) return;

  document.addEventListener("click", (event) => {
    const stationLink = event.target.closest(".station-map, .station-directions-link");
    if (!stationLink) return;

    const url = new URL(stationLink.href);
    const query = url.searchParams.get("query");
    if (!query) return;

    // Keep the external Google Maps link available, while updating the
    // embedded map for users who want to compare locations on this page.
    map.src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`;
  });
});
