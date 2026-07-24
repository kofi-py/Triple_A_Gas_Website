// Triple A Gas — Testimonials Data
window.TESTIMONIALS = [
  {
    id: 1,
    name: "Abena Osei",
    location: "Madina, Accra",
    text: "I have been getting my gas from Triple A Gas for over two years. The delivery is always on time, and the staff are friendly and professional. I recommend them to anyone looking for reliable LPG.",
    rating: 5,
    highlight: "Reliable delivery for over 2 years",
  },
  {
    id: 2,
    name: "Kwame Asante",
    location: "Ejisu, Ashanti",
    text: "The safety check they did on my cylinder before refilling gave me peace of mind. Not every gas seller takes the time to inspect the valve and hose. Great service!",
    rating: 5,
    highlight: "Thorough safety inspections",
  },
  {
    id: 3,
    name: "Mama Esther",
    location: "Bogoso, Western Region",
    text: "As a chop bar owner, I depend on consistent gas supply. Triple A Gas has never let me down. Their bulk supply pricing is fair and the delivery is always on schedule.",
    rating: 5,
    highlight: "Reliable bulk supply for business",
  },
  {
    id: 4,
    name: "Dr. Michael Nkrumah",
    location: "North Legon, Accra",
    text: "Professional from the first call to the cylinder delivery. They even showed me how to check for leaks with soapy water. Very impressed with their customer education.",
    rating: 5,
    highlight: "Educated me on safety",
  },
];

function renderTestimonials() {
  const container = document.getElementById("testimonials-container");
  if (!container || !window.TESTIMONIALS) return;

  const stars = (n) =>
    Array(n).fill("★").join("") +
    Array(5 - n)
      .fill("☆")
      .join("");

  container.innerHTML = window.TESTIMONIALS.map(
    (t, i) => `
    <div class="testimonial-card" data-aos="fade-up" data-aos-delay="${i * 80}">
      <div class="testimonial-stars">${stars(t.rating)}</div>
      <blockquote>"${escapeHtml(t.text)}"</blockquote>
      <div class="testimonial-author">
        <div class="testimonial-avatar">${t.name.charAt(0)}</div>
        <div>
          <strong>${escapeHtml(t.name)}</strong>
          <span>${escapeHtml(t.location)}</span>
        </div>
      <div class="testimonial-highlight">${escapeHtml(t.highlight)}</div>
  `,
  ).join("");
}

document.addEventListener("DOMContentLoaded", renderTestimonials);
