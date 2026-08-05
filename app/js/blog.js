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

const BLOG_TRANSLATIONS = {
  tw: {
    1: {
      title: "LPG Ahobammɔ Afotu ma Ghana Fie Awo Bere Mu",
      excerpt:
        "Bere a awo bere no reba no, ɛsɛ sɛ yɛhwɛ yie paa bere a yɛde LPG redi dwuma. Eyinom ne ahobammɔ afotu a ɛbɛbɔ wo fie ne w'abusua ho ban.",
      category: "Ahobammɔ",
      date: "Ɔgyefoɔ 15, 2025",
      readTime: "kenkan simma 3",
      author: "Triple A Gas Kuw no",
      content:
        "<p>Awo bere mu no, ogya ho asiane tumi kɔ soro. Wɔ Triple A Gas, yɛpɛ sɛ customer biara de LPG di dwuma wɔ ahobammɔ mu.</p><h3>1. Fa cylinder no sie baabi a mframa kɔ mu</h3><p>Ma wo cylinder no nnyina hɔ yiye wɔ baabi a mframa kɔ mu, na mma ɛnka owia anaa ɔhyew fibea te sɛ gas cooker ho.</p><h3>2. Hwɛ wo hose no daa</h3><p>Ɔhyew tumi ma rubber hose no paapae. Ansa na wobɛhyɛ gas bio no, hwɛ sɛ hose no nni mpaapaemu anaa sɛe biara.</p><h3>3. Ma ogya dum ade nni hɔ</h3><p>Fie biara a wɔde LPG di dwuma no, ɛsɛ sɛ wonya ogya dum ade anaa ogya ntama wɔ baabi a ɛbɛn.</p><h3>4. Hu gas hua no</h3><p>Wɔde hua soronko bi ka LPG ho na ama wɔahu leakage. Sɛ wote gas hua a, to cylinder valve no mu ntɛm ara, bue mfɛnsere, na frɛ Triple A Gas.</p><p>Kɔ <a href='safety.html'>Ahobammɔ krataafa</a> no so na kenkan akwankyerɛ pii.</p>",
    },
    2: {
      title: "Sɛnea Wobɛpaw Cylinder Kɛse a Ɛfata Wo Fie",
      excerpt:
        "Wonnim sɛ 3 kg, 6 kg anaa 14.5 kg cylinder na ɛfata wo? Yɛkyerɛ nea cylinder biara ye ma no.",
      category: "Nneɛma",
      date: "Sanda 28, 2025",
      readTime: "kenkan simma 4",
      author: "Triple A Gas Kuw no",
      content:
        "<p>LPG cylinder kɛse a ɛfata wo no gyina wo adidie, abusua kɛse ne baabi a wobɛkora so.</p><h3>3 kg — Ɛfata sukuufo ne adididan ketewa</h3><p>Ɛfata obiako fie, sukuufo a wɔwɔ hostel mu, anaa sɛ backup cylinder. Emu yɛ hare na ɛnyɛ den sɛ wobɛsoa.</p><h3>6 kg — Fie dodow no ara paw</h3><p>Ghana mmusua pii hu sɛ 6 kg no fata wɔn nnawɔtwe biara adidie. Ebetumi adi nnawɔtwe 2–3 ama abusua a emu yɛ nnan.</p><h3>14.5 kg — Mmusua akɛse ne nketewa businesses</h3><p>Chop bar, aduane tɔnfo ne mmusua akɛse nya mfaso fi 14.5 kg no mu. Ɛma refill so tew na bo nso yɛ papa kilogram biara.</p><h3>Bulk supply — Aguadi mu dwumadie</h3><p>Hotels, sukuu, factories ne restaurants betumi apaw bulk tank installation. Frɛ yɛn na nya quote a ɛfa wo ahiade ho.</p><p>Kɔ <a href='products.html'>Nneɛma krataafa</a> no so na hwɛ guide prices.</p>",
    },
    3: {
      title: "Triple A Gas Trɛw Dwumadie Mu wɔ Bonwire ne Bogoso",
      excerpt:
        "Yɛde anigye bɔ amanneɛ sɛ yɛatrɛw yɛn dwumadie mu wɔ Bonwire ne Bogoso stations, na ama LPG anya nkɔso wɔ saa mpɔtam no mu.",
      category: "Kuw no Ho Nsɛm",
      date: "Mumu 10, 2024",
      readTime: "kenkan simma 3",
      author: "Nana Kwame Owusu Boateng",
      content:
        "<p>Wɔ Triple A Gas, yegye di sɛ Ghanafoɔ nyinaa fata sɛ wonya cooking energy a ɛho tew na wobetumi de wɔn ho ato so. Enti yɛatrɛw yɛn dwumadie mu wɔ stations a ɛho hia mmienu mu.</p><h3>Bonwire Station — Ashanti Region</h3><p>Yɛn Bonwire station a ɛbɛn Kente nwene beae no de cylinder refill, exchange ne retail service ma Ejisu Municipality ne mmeae a ɛho bɛn.</p><h3>Bogoso Station — Western Region</h3><p>Yɛn Bogoso station som Prestea-Huni Valley Municipality wɔ LPG dwumadie nyinaa mu. Seesei yebetumi aduru afie ne businesses pii wɔ Western Region.</p><p>Hwɛ <a href='stations.html'>yɛn stations krataafa</a> no so na nya kwan akwankyerɛ.</p>",
    },
    4: {
      title: "LPG Refill ne Exchange: Nsonsonoeɛ Bɛn na Ɛda Ntam?",
      excerpt:
        "Ɛsɛ sɛ wohyɛ wo cylinder no bio anaa wosesa no ma nea ahyɛ ma? Yɛkyerɛ nea option biara kyerɛ na woatumi apaw nea ɛfata wo.",
      category: "Nneɛma",
      date: "Ɔberɛfɛw 5, 2024",
      readTime: "kenkan simma 3",
      author: "Triple A Gas Kuw no",
      content:
        "<p>Sɛ wo LPG cylinder no asa a, wowɔ options mmienu: refill anaa exchange. Eyinom ne nea emu biara kyerɛ.</p><h3>Refill</h3><p>Wode wo cylinder a wowɔ no ba Triple A Gas station. Yɛn kuw no hwɛ valve, hose ne cylinder no nipadua. Sɛ biribiara yɛ yie a, yɛhyɛ no ma sɛnea ne kɛse te.</p><h3>Exchange</h3><p>Wosesa wo cylinder a hwee nnim no ma nea ahyɛ ma a ɛyɛ kɛse koro. Eyi yɛ ntɛm sen sɛ wobetwɛn refill, nanso ɛsɛ sɛ wo cylinder no di aniwa so hwɛ mu no mu.</p><h3>Nea ɛyɛ papa no?</h3><p>Exchange yɛ ntɛm sɛ wo cylinder no yɛ yie. Refill ma wokura wo cylinder ankasa no. Options mmienu no wɔ Triple A Gas outlets nyinaa mu.</p><p>Kɔ <a href='stations.html'>stations 7 no mu biara</a> na nya service.</p>",
    },
  },
  ga: {
    1: {
      title: "LPG Hewale Afotu ma Ghana Shĩai wɔ Awo Bere Mli",
      excerpt: "Awo bere lɛ mli, emaa esa akɛ wɔjea yɛ LPG hewale mli. Hei ni yɛ afotu ni baabɔ o shĩa kɛ o weku ho ban.",
      category: "Hewale",
      date: "Ŋgɔɔ 15, 2025",
      readTime: "minute 3 kane",
      author: "Triple A Gas Team",
      content: "<p>Awo bere lɛ mli, ogya hewale lɛ baanyɛ akɛ eyashi. Wɔ Triple A Gas, wɔbaanyɛ akɛ customer biara baafee LPG nitsumɔ lɛ yɛ hewale mli.</p><h3>1. Kora cylinder lɛ wɔ he ni mframa yɛ</h3><p>Ŋmaa o cylinder lɛ nɛ ejaa wɔ he ni mframa yɛ, na ejɛ owia kɛ ɔhyew ni baanyɛ akɛ efee te sɛ cooker ŋa.</p><h3>2. Kwɛ o hose lɛ daa</h3><p>Ɔhyew lɛ baanyɛ akɛ rubber hose lɛ agbo. Dɛŋ obaahyɛ gas nɔ, kwɛ hose lɛ sɛ egbɔ loo efee.</p><h3>3. Ŋmaa ogya dum nii nɛ ejaa he ni bɛ miŋ</h3><p>Shĩa biara ni wɔ fee LPG mli lɛ, esa akɛ ogya dum nii loo ogya ntama nɛ ejaa he ni bɛ miŋ.</p><h3>4. Hu gas lɛ nu</h3><p>Wɔ maa LPG lɛ nu ni he wã akɛ wɔ baahu leakage. Sɛ o nu gas a, to cylinder valve lɛ fɛŋ, bue mfɛnsere, nɛ otsɛ Triple A Gas.</p><p>Ya <a href='safety.html'>Hewale page</a> lɛ nɛ okane wulu.</p>",
    },
    2: {
      title: "Te O Baapaw Cylinder Gbii ni Sa ma O Shĩa",
      excerpt: "O bɛ gbɛ ni 3 kg, 6 kg loo 14.5 kg cylinder ni sa ma o? Wɔ kyerɛ bɔ ni cylinder gbii biara sa ma nɔ.",
      category: "Nii",
      date: "Sanda 28, 2025",
      readTime: "minute 4 kane",
      author: "Triple A Gas Team",
      content: "<p>LPG cylinder gbii ni sa ma o lɛ da o adidii, o weku gbii kɛ he ni obaakora lɛ ŋa.</p><h3>3 kg — Sukuufoɔ kɛ adididan bibii</h3><p>Esa ma mɛi kɛji akɛ mɔko, sukuufoɔ ni yeɔ hostel, loo backup cylinder. Efee kɛ ebaanyɛ akɛ osoo.</p><h3>6 kg — Shĩa dodow no ara paw</h3><p>Ghana weku pii hu sɛ 6 kg lɛ sa ma wɔn daa adidii. Ebaanyɛ akɛ etaa weku ni mɛi yɛ wɔn nnan nnawɔtwe 2–3.</p><h3>14.5 kg — Weku akɛse kɛ businesses bibii</h3><p>Chop bar, aduane tɔnfoɔ kɛ weku akɛse nyɛ mfaso kɛjɛ 14.5 kg lɛ mli. Refill lɛ baanyɛ akɛ etew kɛ nɔyeli lɛ sa.</p><h3>Bulk supply — Nitsumɔi akɛse</h3><p>Hotels, sukuu, factories kɛ restaurants baanyɛ apaw bulk tank. Tsɛ wɔ nɛ ohu quote ni sa ma o.</p><p>Ya <a href='products.html'>Nii page</a> lɛ nɛ okwɛ nɔyeli lɛ.</p>",
    },
    3: {
      title: "Triple A Gas Trɛw Nitsumɔ Mu wɔ Bonwire kɛ Bogoso",
      excerpt: "Wɔ nyɛ anigye akɛ wɔ ka sɛ wɔ atrɛw wɔ nitsumɔ mu wɔ Bonwire kɛ Bogoso stations, akɛ LPG abaanyɛ akɛ ebɛ mɛi ni yeɔ amɛhe nɔ.",
      category: "Kumpani Sane",
      date: "Mumu 10, 2024",
      readTime: "minute 3 kane",
      author: "Nana Kwame Owusu Boateng",
      content: "<p>Wɔ Triple A Gas, wɔ suɔ akɛ Ghanafoɔ fɛɛ fata cooking energy ni eho tew kɛ ni wɔ baanyɛ wɔn heɔ wɔn he nɔ. Nɔ hewɔ nɔ yɛ ni wɔ atrɛw nitsumɔ lɛ wɔ stations enyo mli.</p><h3>Bonwire Station — Ashanti Region</h3><p>Wɔ Bonwire station ni bɛ miŋ Kente nwene he lɛ maa cylinder refill, exchange kɛ retail service ma Ejisu Municipality kɛ hei ni bɛ miŋ.</p><h3>Bogoso Station — Western Region</h3><p>Wɔ Bogoso station lɛ som Prestea-Huni Valley Municipality yɛ LPG nitsumɔi fɛɛ mli. Seesei wɔ baanyɛ akɛ wɔ baaduru shĩai kɛ businesses pii wɔ Western Region.</p><p>Kwɛ <a href='stations.html'>wɔ stations page</a> lɛ nɛ ohu gbɛ lɛ.</p>",
    },
    4: {
      title: "LPG Refill kɛ Exchange: Bɔ ni da wɔn ntam?",
      excerpt: "Esa akɛ ohyɛ o cylinder lɛ nɔ loo otsɛ ni eja nɔ? Wɔ kyerɛ bɔ ni option biara yɛ nɛ obaapaw ni sa ma o.",
      category: "Nii",
      date: "Ɔberɛfɛw 5, 2024",
      readTime: "minute 3 kane",
      author: "Triple A Gas Team",
      content: "<p>Sɛ o LPG cylinder lɛ asa a, oyeɔ options enyo: refill loo exchange. Hei ni option biara yɛ.</p><h3>Refill</h3><p>O fa o cylinder lɛ ba Triple A Gas station. Wɔ team lɛ kwɛ valve, hose kɛ cylinder lɛ. Sɛ nii fɛɛ sa a, wɔ hyɛ nɔ sɛ ni esa.</p><h3>Exchange</h3><p>O tsɛ o cylinder ni bɛ nɔ lɛ ma ni eja nɔ ni gbii koro. Eyi fee kɛ ebaanyɛ akɛ efee kɔkɔɔ, nanso cylinder ni bɛ nɔ lɛ esa akɛ efee yɛ kwɛmɔ lɛ mli.</p><h3>Bɔ ni sa kɛ?</h3><p>Exchange lɛ fee kɔkɔɔ sɛ o cylinder lɛ sa. Refill lɛ maa okura o mli cylinder. Options enyo lɛ yɛ Triple A Gas outlets fɛɛ.</p><p>Ya <a href='stations.html'>stations 7 lɛ</a> nɛ o nya service.</p>",
    },
  },
};

function getLocalizedPost(post) {
  const language = window.I18N?.currentLang;
  const translation = BLOG_TRANSLATIONS[language]?.[post.id];
  return translation ? { ...post, ...translation } : post;
}

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
    var post = getLocalizedPost(window.BLOG_DATA[i]);
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
  container.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = window.__?.(el.dataset.i18n) || el.textContent;
  });
  window.I18N?.translateStaticText();

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
      post = getLocalizedPost(window.BLOG_DATA[i]);
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
  window.I18N?.translateStaticText();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", renderBlog);
} else {
  renderBlog();
}
