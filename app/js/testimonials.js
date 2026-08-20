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

window.TESTIMONIAL_TRANSLATIONS = {
  tw: [
    { text: "Manya me gas afi Triple A Gas bɛboro mfe abien. Wɔde no ba bere so, na adwumayɔfo no yɛ adamfofa ne adwumayɔ yie. Mɛkamfo wɔn kyerɛ obiara a ɔrehwehwɛ LPG a wobetumi de wɔn ho ato so.", highlight: "Wɔde nneɛma ba bere so bɛboro mfe abien" },
    { text: "Banbɔ hwɛ a wɔyɛyɛ mɛ cylinder ho ansa na wɔahyɛ mu no maa me koma tɔɔ me yam. Gas adetɔfo nyinaa nnye bere nhwɛ valve ne hose. Adwuma pa!", highlight: "Banbɔ sohwɛ a emu dɔ" },
    { text: "Sɛ chop bar wura no, mehia gas a ɔba daa. Triple A Gas nnyaa me da. Wɔn bulk supply bo ye, na wɔde ba bere so daa.", highlight: "Bulk gas a wobetumi de wɔn ho ato so ma adwuma" },
    { text: "Efi frɛ a edi kan no so de kosi cylinder no delivery, wɔyɛ adwuma yie. Wɔkyerɛɛ me sɛnea mede samina nsuo bɛhwɛ gas a efi mu. Wɔn adetɔfoɔ nkyerɛkyerɛ no ahye me.", highlight: "Wɔkyerɛɛ me banbɔ ho ade" },
  ],
  ga: [
    { text: "Me naaye me gas kɛjɛ Triple A Gas shikpon mli bɛjɛ nyɛmɛi enɛ. Wɔ kɔkɔba lɛ yɛ shiɛ lɛ, ni wɔn nitsumɔlɔi yɛ mɔi heɔ amɔhe ni wɔnaa nitsumɔ yɛie.", highlight: "Kɔkɔba ni yɛ shiɛ lɛ" },
    { text: "Hewale kwɛmɔ ni wɔyɛɛ me cylinder lɛ he ni wɔhe mli lɛ mɔ mɔni yɛ me. Gas shikafoi fɔɔ kɛbaaye shiɛ ni wɔkwɛ valve kɛ hose lɛ. Nitsumɔ paa!", highlight: "Hewale kwɛmɔ ni emli dɔ" },
    { text: "Me ji chop bar hewɔlɔ, hewɔ gas ni yɛ daa. Triple A Gas bɛjɛ naa me da. Wɔn bulk supply nɔyeli yɛ, ni wɔ kɔkɔba lɛ yɛ shiɛ lɛ daa.", highlight: "Bulk gas ni mɔi heɔ amɔhe ma nitsumɔ" },
    { text: "Je tsɛɛ ni ɔyɛ fɔɔ kɛɛyashi cylinder kɔkɔba lɛ, wɔnaa nitsumɔ yɛie. Wɔtsɛmɔɔ me bɔ ni mebaakɛɛ gas ni jeɔ mli kɛ samina tswɛ. Wɔn customer education lɛ ahye me.", highlight: "Wɔtsɛmɔɔ me hewale he" },
  ],
};

function escapeHtml(str) {
  if (!str) return "";
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

var testimonialAutoRotate;

function renderTestimonials() {
  var container = document.getElementById("testimonials-container");
  if (!container || !window.TESTIMONIALS) return;

  var lang = window.I18N?.currentLang || "en";
  var translated = window.TESTIMONIAL_TRANSLATIONS?.[lang];
  var testimonials = window.TESTIMONIALS.map(function (testimonial, index) {
    return translated?.[index]
      ? Object.assign({}, testimonial, translated[index])
      : testimonial;
  });

  function stars(n) {
    return (
      Array(n).fill("★").join("") +
      Array(5 - n)
        .fill("☆")
        .join("")
    );
  }

  // Build slides
  var slidesHtml = "";
  for (var i = 0; i < testimonials.length; i++) {
    var t = testimonials[i];
    slidesHtml +=
      '<div class="testimonial-slide" data-index="' +
      i +
      '">' +
      '<div class="testimonial-stars">' +
      stars(t.rating) +
      "</div>" +
      '<blockquote>"' +
      escapeHtml(t.text) +
      '"</blockquote>' +
      '<div class="testimonial-author">' +
      '<div class="testimonial-avatar">' +
      t.name.charAt(0) +
      "</div>" +
      "<div>" +
      "<strong>" +
      escapeHtml(t.name) +
      "</strong>" +
      "<span>" +
      escapeHtml(t.location) +
      "</span>" +
      "</div>" +
      "</div>" +
      '<div class="testimonial-highlight">' +
      escapeHtml(t.highlight) +
      "</div>" +
      "</div>";
  }

  // Dots
  var dotsHtml = '<div class="testimonial-dots">';
  for (var j = 0; j < testimonials.length; j++) {
    dotsHtml +=
      '<button class="testimonial-dot' +
      (j === 0 ? " active" : "") +
      '" data-slide="' +
      j +
      '" aria-label="Go to testimonial ' +
      (j + 1) +
      '"></button>';
  }
  dotsHtml += "</div>";

  container.innerHTML =
    '<div class="testimonial-carousel">' +
    '<button class="testimonial-arrow testimonial-arrow-prev" aria-label="Previous testimonial">‹</button>' +
    '<div class="testimonial-track">' +
    slidesHtml +
    "</div>" +
    '<button class="testimonial-arrow testimonial-arrow-next" aria-label="Next testimonial">›</button>' +
    dotsHtml +
    "</div>";

  var current = 0;
  var track = container.querySelector(".testimonial-track");
  var slides = container.querySelectorAll(".testimonial-slide");
  var dots = container.querySelectorAll(".testimonial-dot");
  var prevBtn = container.querySelector(".testimonial-arrow-prev");
  var nextBtn = container.querySelector(".testimonial-arrow-next");

  var translateLabel = function (key, fallback) {
    var value = window.I18N?.t?.(key);
    return value && value !== key ? value : fallback;
  };
  prevBtn.setAttribute(
    "aria-label",
    translateLabel("testimonial_previous", "Previous testimonial"),
  );
  nextBtn.setAttribute(
    "aria-label",
    translateLabel("testimonial_next", "Next testimonial"),
  );
  dots.forEach(function (dot, index) {
    dot.setAttribute(
      "aria-label",
      translateLabel("testimonial_go_to", "Go to testimonial") + " " +
        (index + 1),
    );
  });

  function goTo(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    current = index;
    track.style.transform = "translateX(-" + current * 100 + "%)";
    for (var d = 0; d < dots.length; d++) {
      dots[d].classList.toggle("active", d === current);
    }
  }

  function nextSlide() {
    goTo(current + 1);
  }
  function prevSlide() {
    goTo(current - 1);
  }

  nextBtn.addEventListener("click", function () {
    nextSlide();
    resetAutoRotate();
  });
  prevBtn.addEventListener("click", function () {
    prevSlide();
    resetAutoRotate();
  });

  for (var k = 0; k < dots.length; k++) {
    dots[k].addEventListener("click", function () {
      goTo(parseInt(this.dataset.slide));
      resetAutoRotate();
    });
  }

  // Keyboard
  container.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight") {
      nextSlide();
      resetAutoRotate();
    }
    if (e.key === "ArrowLeft") {
      prevSlide();
      resetAutoRotate();
    }
  });

  // Touch swipe
  var startX = 0;
  var isDragging = false;
  track.addEventListener(
    "touchstart",
    function (e) {
      startX = e.touches[0].clientX;
      isDragging = true;
    },
    { passive: true },
  );
  track.addEventListener(
    "touchend",
    function (e) {
      if (!isDragging) return;
      var diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
        resetAutoRotate();
      }
      isDragging = false;
    },
    { passive: true },
  );

  function resetAutoRotate() {
    clearInterval(testimonialAutoRotate);
    testimonialAutoRotate = setInterval(nextSlide, 5000);
  }
  resetAutoRotate();

  goTo(0);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderTestimonials);
} else {
  renderTestimonials();
}
