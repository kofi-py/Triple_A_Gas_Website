// Triple A Gas — Blog Data & Renderer
// Blog posts are stored as JSON data and rendered on the blog page.

window.BLOG_DATA = [
  {
    id: 1,
    title: "Dry Season LPG Safety Tips for Ghanaian Homes",
    slug: "dry-season-lpg-safety",
    excerpt:
      "As the dry season sets in, extra caution is needed when handling LPG. Here are essential safety tips to protect your home and family.",
    content:
      "<p>During the dry season, the risk of fire incidents increases significantly. At Triple A Gas, we want every customer to enjoy the benefits of LPG without compromising safety.</p><h3>1. Store cylinders in ventilated areas</h3><p>Ensure your cylinder is kept upright in a well-ventilated space, away from direct sunlight and heat sources like stoves or ovens.</p><h3>2. Check your hose regularly</h3><p>Dry heat can cause rubber hoses to crack. Before each refill, inspect the hose for any signs of wear or brittleness.</p><h3>3. Keep a fire extinguisher nearby</h3><p>Every kitchen using LPG should have a small fire extinguisher or a fire blanket within easy reach.</p><h3>4. Know the smell of gas</h3><p>LPG has a distinct odour added for leak detection. If you smell gas, turn off the cylinder valve immediately, open windows, and call Triple A Gas.</p><p>Visit our <a href='safety.html'>Safety page</a> for more detailed guidance.</p>",
    image: "images/IMG-20260720-WA0003.jpg",
    category: "Safety",
    author: "Triple A Gas Team",
    date: "February 15, 2025",
    readTime: "3 min read",
  },
  {
    id: 2,
    title: "How to Choose the Right Cylinder Size for Your Home",
    slug: "choose-right-cylinder-size",
    excerpt:
      "Not sure whether to buy a 3 kg, 6 kg, or 14.5 kg cylinder? We break down what each size is best for.",
    content:
      "<p>Choosing the right LPG cylinder size depends on your cooking habits, household size, and space for storage.</p><h3>3 kg — Ideal for Students & Small Kitchens</h3><p>Perfect for single-person households, students in hostels, or as a backup cylinder. Lightweight and easy to transport.</p><h3>6 kg — The Standard Household Choice</h3><p>Most Ghanaian families find the 6 kg cylinder suits their weekly cooking needs. It lasts 2–3 weeks for an average family of 4.</p><h3>14.5 kg — For Large Families & Small Businesses</h3><p>Chop bars, food vendors, and large families benefit from the 14.5 kg size. Fewer refills needed and better value per kg.</p><h3>Bulk Supply — For Commercial Use</h3><p>Hotels, schools, factories, and restaurants can opt for bulk tank installations. Contact us for a custom quote.</p><p>Browse our <a href='products.html'>Products page</a> for current guide prices.</p>",
    image: "images/IMG-20260720-WA0002.jpg",
    category: "Products",
    author: "Triple A Gas Team",
    date: "January 28, 2025",
    readTime: "4 min read",
  },
  {
    id: 3,
    title: "Triple A Gas Expands Service to Bonwire and Bogoso",
    slug: "expanding-to-bonwire-bogoso",
    excerpt:
      "We are proud to announce expanded services at our Bonwire (Ashanti) and Bogoso (Western) stations, making LPG more accessible to these communities.",
    content:
      "<p>At Triple A Gas, we believe every Ghanaian deserves access to clean, reliable cooking energy. That's why we're pleased to announce enhanced services at two of our key stations.</p><h3>Bonwire Station — Ashanti Region</h3><p>Located near the famous Bonwire Kente weaving centre, our Bonwire station now offers cylinder refilling, exchange, and retail services to the Ejisu Municipality and surrounding areas.</p><h3>Bogoso Station — Western Region</h3><p>Our Bogoso station serves the Prestea-Huni Valley Municipality with full LPG services. We're now able to reach more homes and businesses in the Western Region.</p><p>Find directions to all our stations on our <a href='stations.html'>Stations page</a>.</p>",
    image: "images/IMG-20260720-WA0000.jpg",
    category: "Company News",
    author: "Nana Kwame Owusu Boateng",
    date: "December 10, 2024",
    readTime: "3 min read",
  },
  {
    id: 4,
    title: "Understanding LPG Refill vs Exchange: What's the Difference?",
    slug: "refill-vs-exchange",
    excerpt:
      "Should you refill your existing cylinder or exchange it for a full one? We explain both options so you can choose what's best.",
    content:
      "<p>When your LPG cylinder runs out, you have two options: refill or exchange. Here's what each means.</p><h3>Refill</h3><p>You bring your existing cylinder to a Triple A Gas station. Our team inspects the valve, hose, and cylinder body. If everything passes the safety check, we refill it to the correct weight.</p><h3>Exchange</h3><p>You swap your empty cylinder for a full one of the same size. This is faster than waiting for a refill, but your empty cylinder must pass a quick visual inspection.</p><h3>Which is better?</h3><p>Exchange is quicker if your cylinder is in good condition. Refill ensures you keep your own cylinder. Both options are available at all Triple A Gas outlets.</p><p>Visit any of our <a href='stations.html'>7 stations</a> for service.</p>",
    image: "images/IMG-20260720-WA0001.jpg",
    category: "Products",
    author: "Triple A Gas Team",
    date: "November 5, 2024",
    readTime: "3 min read",
  },
];

function renderBlog() {
  var container = document.getElementById("blog-container");
  if (!container) return;

  if (!window.BLOG_DATA || !window.BLOG_DATA.length) {
    container.innerHTML =
      '<p class="empty-state" style="grid-column:1/-1;" data-i18n="no_posts">No posts yet. Check back soon!</p>';
    return;
  }

  var html = "";
  for (var i = 0; i < window.BLOG_DATA.length; i++) {
    var post = window.BLOG_DATA[i];
    html +=
      '<article class="card blog-card" data-aos="fade-up" data-aos-delay="' +
      Math.min(i * 80, 240) +
      '">';
    if (post.image) {
      html +=
        '<div class="blog-card-image" style="background-image:url(\'' +
        post.image +
        "');\"></div>";
    }
    html += '<div class="blog-card-body">';
    html +=
      '<span class="badge badge-blue">' + escapeHtml(post.category) + "</span>";
    html +=
      '<h3><a href="blog.html?post=' +
      post.id +
      '">' +
      escapeHtml(post.title) +
      "</a></h3>";
    html +=
      '<div class="blog-meta">' + post.date + " · " + post.readTime + "</div>";
    html += '<p class="blog-excerpt">' + escapeHtml(post.excerpt) + "</p>";
    html +=
      '<a class="btn btn-ghost btn-sm" href="blog.html?post=' +
      post.id +
      '" data-i18n="read_more">Read more →</a>';
    html += "</div>";
    html += "</article>";
  }

  container.innerHTML = html;

  // Check if a specific post is requested
  var params = new URLSearchParams(window.location.search);
  var postId = params.get("post");
  if (postId) {
    showBlogPost(parseInt(postId));
  }
}

function escapeHtml(str) {
  if (!str) return "";
  var div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function showBlogPost(id) {
  var container = document.getElementById("blog-container");
  if (!container) return;

  var post = null;
  for (var i = 0; i < window.BLOG_DATA.length; i++) {
    if (window.BLOG_DATA[i].id === id) {
      post = window.BLOG_DATA[i];
      break;
    }
  }

  if (!post) {
    renderBlog();
    return;
  }

  container.innerHTML =
    '<article class="blog-single" data-aos="fade-up">' +
    (post.image
      ? '<div class="blog-single-image" style="background-image:url(\'' +
        post.image +
        "');\"></div>"
      : "") +
    '<div class="blog-single-body">' +
    '<span class="badge badge-blue">' +
    escapeHtml(post.category) +
    "</span>" +
    '<h1 style="font-family:var(--display);font-size:clamp(22px,3vw,30px);margin:12px 0 8px;">' +
    escapeHtml(post.title) +
    "</h1>" +
    '<div class="blog-meta" style="margin-bottom:20px;">' +
    post.date +
    " · " +
    post.readTime +
    " · By " +
    escapeHtml(post.author) +
    "</div>" +
    post.content +
    '<div style="margin-top:28px;padding-top:20px;border-top:1px solid var(--steel-100);">' +
    '<a class="btn btn-ghost" href="blog.html">← Back to all posts</a>' +
    "</div>" +
    "</div>" +
    "</article>";
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderBlog);
} else {
  renderBlog();
}
