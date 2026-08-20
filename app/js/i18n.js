// Triple A Gas — Internationalization (i18n) Support
// English (default), Twi (Asante Twi), Ga (Gã)

window.I18N = {
  currentLang: localStorage.getItem("triplea-lang") || "en",

  translations: {
    en: {
      // Nav
      nav_home: "Home",
      nav_products: "Products",
      nav_stations: "Find a Station",
      nav_safety: "Safety",
      nav_faq: "FAQ",
      nav_about: "About",
      nav_contact: "Contact",
      nav_blog: "Blog",

      // Hero
      hero_kicker: "Triple A LP Gas Limited · Ghana",
      hero_lead:
        "Find a publicly listed Triple A LP Gas location, get in touch, or explore practical LPG safety guidance.",
      hero_stock: "stock",
      hero_routes: "routes",
      hero_tank: "Tank level",
      hero_deliveries: "Deliveries",

      // Stats
      stat_sales_record: "Historical sales record",
      stat_mt_sales: "MT LPG sales reported",
      stat_market_share: "% market share reported",
      stat_member: "Member directory listing",

      // Products
      products_title: "Cylinder sizes for every kitchen",
      products_desc:
        "Talk to Triple A LP Gas for current availability and pricing. LPG safety and cylinder suitability should always come first.",
      starter: "Starter cylinder",
      household: "Household",
      family: "Family / small biz",
      commercial: "Commercial supply",
      enquire: "Enquire",
      ask_price: "Ask for price",
      quote: "Quote",
      view_all: "View all products & services →",

      // Safety strip
      safety_title: "Safety is not a footnote — it is how we work.",
      safety_desc:
        "From cylinder inspection to leak response, every Triple A Gas outlet follows clear, actionable safety practice.",
      safety_cta: "Read safety tips",

      // Testimonials
      testimonials_title: "What our customers say",
      testimonials_desc:
        "Real feedback from homes and businesses that rely on Triple A Gas.",

      // Stations
      stations_title: "Find your nearest outlet",
      stations_desc:
        "Triple A Gas serves customers from 7 locations across Ghana. Browse nearby branches and contact them to confirm availability before travelling.",
      browse_stations: "Browse all stations",
      open_map: "Open map",
      get_directions: "📍 Get directions",
      driving_directions: "Driving directions",
      confirm_before: "Confirm before travelling",
      availability: "Availability to confirm",

      // Trust strip
      trust_title: "Trusted LPG supply for homes and businesses",
      trust_desc:
        "Triple A LP Gas Limited is listed in Ghana's downstream petroleum marketing sector.",
      trust_cta: "About Triple A Gas",

      // Gallery
      gallery_title: "See Triple A Gas in action",
      gallery_desc:
        "Photos from our stations, deliveries and safety practices.",

      // Footer
      footer_desc:
        "Dependable, safety-first LPG for households and businesses across Ghana.",
      explore: "Explore",
      contact_title: "Contact",
      order_title: "Order",
      chat_whatsapp: "Chat on WhatsApp",
      request_delivery: "Request delivery",
      nearest_outlet: "Nearest outlet",
      staff_login: "Staff Login",
      site_built: "Site built for Triple A Gas",

      // Order page
      order_now: "Order Now",
      order_desc: "Order LPG delivery to your doorstep",
      your_order: "Your Order",
      cart_empty: "Your cart is empty",
      checkout: "Proceed to Checkout",
      continue_shopping: "Continue Shopping",
      payment_method: "Payment Method",
      cash: "Cash on Delivery",
      momo: "Mobile Money (MoMo)",
      place_order: "Place Order",
      order_success: "Order placed successfully!",
      order_summary: "Order Summary",
      product: "Product",
      price: "Price",
      delivery: "Delivery",
      payment: "Payment",
      ask_at_station: "Ask at station",
      delivery_info_title: "📍 Delivery Info",
      delivery_info_text:
        "We deliver to areas near our 7 stations. Call us to confirm if we cover your specific location. Same-day delivery available in selected areas.",

      // Blog
      blog_title: "Triple A Gas News & Updates",
      blog_desc:
        "Safety tips, company updates, and community news from Triple A Gas.",
      read_more: "Read more →",
      latest_posts: "Latest Posts",
      no_posts: "No posts yet. Check back soon!",

      // Language
      lang_en: "English",
      lang_twi: "Twi (Asante)",
      lang_ga: "Ga (Gã)",

      // Products page
      prod_hero_title: "Products & services",
      prod_hero_desc:
        "Cylinder sizes, refill vs. exchange, door-to-door delivery, and bulk supply for businesses.",
      prod_cylinders: "Cylinders",
      prod_choose_size: "Choose your size",
      prod_choose_desc:
        "Guide refill prices — confirm at your nearest station. Exchange available where empty cylinders meet inspection standards.",
      prod_compare: "Compare sizes",
      prod_3kg_desc: "Starter / student / small kitchen",
      prod_3kg_price: "GH₵ 55 refill",
      prod_6kg_desc: "Everyday household cooking",
      prod_6kg_price: "GH₵ 95 refill",
      prod_14kg_desc: "Family homes & chop bars",
      prod_14kg_price: "GH₵ 145 refill",
      prod_bulk_desc: "Hotels, factories, institutions",
      prod_bulk_price: "Custom quote",
      prod_order: "Order",
      prod_enquire: "Enquire",
      prod_how_works: "How it works",
      prod_refill_title: "Refill",
      prod_refill_desc:
        "Bring your Triple A Gas or compatible cylinder to any outlet. We inspect the valve and hose, then refill to the marked weight.",
      prod_exchange_title: "Exchange",
      prod_exchange_desc:
        "Swap an empty for a full cylinder of the same size when your empty passes a quick safety check.",
      prod_delivery_title: "Door-to-door",
      prod_delivery_desc:
        "Order by phone or WhatsApp. We deliver to your home or business in covered delivery zones.",
      prod_order_title: "Order",
      prod_request_delivery: "Request a delivery",
      prod_request_desc:
        "Tell us your size and location. We will call back to confirm price and arrival window.",
      prod_chat_whatsapp: "Chat on WhatsApp",
      prod_call: "Call 024 507 5496",
      form_name: "Full name",
      form_name_placeholder: "Ama Owusu",
      form_phone: "Phone number",
      form_phone_placeholder: "024 000 0000",
      form_hint: "Ghana numbers: 0XX XXX XXXX or +233...",
      form_size: "Cylinder size",
      form_select_size: "Select size",
      form_area: "Delivery area",
      form_area_placeholder: "East Legon, Accra",
      form_request: "Request Delivery",
      compare_title: "Cylinder Size Comparison",
      compare_desc:
        "Compare our cylinder sizes to choose the right one for your needs.",
      compare_size: "Size",
      compare_best: "Best for",
      compare_price: "Refill price",
      compare_exchange: "Exchange",
      compare_3kg: "Students, small kitchens",
      compare_6kg: "Everyday household",
      compare_14kg: "Families, chop bars",
      compare_bulk: "Hotels, factories",
      compare_available: "Available",
      compare_na: "N/A",
      compare_custom: "Custom quote",

      // About page
      about_hero_title: "About Triple A Gas",
      about_hero_desc:
        "Oil Marketing Company specialising in Liquified Petroleum Gas (LPG) with seven retail outlets across Ghana.",
      about_company: "About the company",
      about_company_title: "Triple A Gas Company Limited",
      about_company_desc:
        "Triple A Gas Company Limited is an Oil Marketing Company that deals in Liquified Petroleum Gas (LPG) with seven retail outlet stations serving communities across Greater Accra, Central, Ashanti, and Western regions.",
      about_trustworthy: "Trustworthy",
      about_trustworthy_desc:
        "We keep company information clear: public records are identified as such, and current service details are confirmed directly.",
      about_safety_literate: "Safety-literate",
      about_safety_desc:
        "LPG deserves care. Customers should confirm cylinder suitability, availability and opening hours before travelling or ordering.",
      about_energetic: "Energetic",
      about_energetic_desc:
        "Triple A Gas Company Limited appears in Ghana's downstream petroleum marketing ecosystem with seven retail outlets.",
      about_profile: "Public company profile",
      about_profile_title: "Triple A Gas Company Limited in Ghana",
      about_profile_desc:
        "COMAC Ghana's member directory lists Triple A LP Gas Limited. A Global LPG Partnership report, using 2017 sector data, records the company as an LPG-only seller with 1,599.1 metric tonnes of LPG sales and a 0.6% market share for that year.",
      about_location: "Publicly listed location",
      about_location_desc:
        "A public map listing places Triple A Gas in Ga East Municipal Assembly, Greater Accra. Availability, hours and services can change, so please confirm directly before visiting.",
      about_industry: "Industry listing",
      about_industry_desc:
        "Triple A LP Gas Limited appears in the COMAC Ghana member directory.",
      about_historical: "Historical sector data",
      about_historical_desc:
        "The 2019 LPG-sector report records 2017 sales; it is not a current price, stock or operating figure.",
      about_outlets: "Retail outlets",
      about_regions: "Regions served",
      about_mt_sales: "MT LPG sales reported",
      about_hq: "Head office location",
      about_branches: "Branch locations",
      about_branches_title: "All Triple A Gas Stations",
      about_branches_desc:
        "Seven retail outlets serving communities across Greater Accra, Central, Ashanti, and Western regions.",
      about_view_stations: "View all stations",
      about_journey: "Our Journey",
      about_timeline_title: "Company Timeline",
      about_timeline_desc:
        "From a vision to trusted LPG supplier across four regions of Ghana.",
      about_founded: "Company Founded",
      about_founded_desc:
        "Triple A Gas Company Limited is established as an Oil Marketing Company specialising in LPG, registered with the Registrar General's Department (CA-18,223).",
      about_growth: "Initial Growth Phase",
      about_growth_desc:
        "Established the first retail outlet in Agbogba, Greater Accra. Built relationships with household customers and small businesses across the region.",
      about_expansion: "Regional Expansion",
      about_expansion_desc:
        "Expanded operations to Central, Ashanti, and Western regions. Added retail outlets in Apam, Antoa, Bonwire, Bogoso, Prestea, and Klagon. Achieved 1,599.1 MT in LPG sales (2017).",
      about_recognition: "Industry Recognition & Continued Service",
      about_recognition_desc:
        "Listed in COMAC Ghana member directory. Continues to serve households, chop bars, and businesses across 7 retail outlets in 4 regions with safety-first LPG delivery.",
      about_leadership: "Leadership",
      about_team_title: "Meet the Team",
      about_team_desc: "The people behind Triple A Gas Company Limited.",
      about_accreditation: "Accreditation",
      about_licensed: "Licensed & Regulated",
      about_licensed_desc:
        "Triple A Gas Company Limited is a fully registered and licensed LPG marketing company operating under the regulatory framework of Ghana's downstream petroleum sector.",
      about_npa: "NPA Licensed Marketer",
      about_npa_desc:
        "Registered with the National Petroleum Authority — Ghana's downstream petroleum regulator.",
      about_comac: "COMAC Member",
      about_comac_desc:
        "Chamber of Oil Marketing Companies — listed member directory.",
      about_registration: "Company Registration",
      about_registration_desc: "Official details and contact information.",
      about_official_name: "Official Name",
      about_status: "Company Status",
      about_status_val: "In Good Standing",
      about_reg_number: "Registration Number",
      about_tax: "Tax ID",
      about_address: "Official Address",
      about_contact: "Primary Contact",
      about_representative: "Company Representative",

      // Contact page
      contact_hero_title: "Contact us",
      contact_hero_desc:
        "Phone and WhatsApp are the fastest way to order. Use the form if you prefer a callback.",
      contact_reach: "Reach us",
      contact_answer: "We answer the phone",
      contact_call: "Call Us",
      contact_whatsapp: "WhatsApp",
      contact_email: "Email",
      contact_find: "Find Station",
      contact_head_office: "Head office",
      contact_address:
        "Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra",
      contact_reg_details: "Registration details",
      contact_reg_info:
        "CA-18,223 | Tax ID: C5647752015 | Status: In Good Standing",
      contact_chat_whatsapp: "Chat on WhatsApp",
      contact_find_station: "Find a Station",
      contact_emergency: "Gas emergency",
      contact_emergency_desc:
        "If you smell gas, follow the steps on our Safety page, then call 024 507 5496 immediately.",
      form_name_label: "Full name",
      form_name_placeholder: "Kwame Mensah",
      form_phone_label: "Phone number",
      form_phone_placeholder: "024 000 0000",
      form_hint_text: "Ghana numbers: 0XX XXX XXXX or +233...",
      form_email_label: "Email (optional)",
      form_email_placeholder: "you@example.com",
      form_message_label: "How can we help?",
      form_message_placeholder: "I need a 14.5kg refill delivered to...",
      form_send: "Send message",
      form_error_name: "Please enter your name",
      form_error_phone: "Enter a valid Ghana number (e.g. 024 000 0000)",
      form_error_email: "Enter a valid email address",
      form_error_message: "Please describe how we can help",

      // Safety page
      safety_hero_title: "LPG safety",
      safety_hero_desc:
        "Clear steps for storage, inspection, and what to do if you smell gas. Safety is a craft we are proud of — not a legal disclaimer.",
      safety_smell_gas: "Smell gas?",
      safety_smell_desc:
        "Turn off the cylinder valve, open windows, do not switch anything electrical on or off, leave the area, and call 024 507 5496 immediately.",
      safety_storage: "Storage",
      safety_storage_desc:
        "Keep cylinders upright, in a ventilated space, away from heat sources and direct sun. Never store cylinders indoors in a closed cupboard.",
      safety_storage_detail:
        "Ensure the storage area is free of flammable materials like petrol, paint thinners, or paper. Cylinders should be at least 1 metre away from cookers, ovens, and other heat sources. In commercial settings, cylinders must be stored in a dedicated, well-ventilated cage or room with appropriate fire extinguishers nearby.",
      safety_inspection: "Inspection",
      safety_inspection_desc:
        "Check valves, regulators, and hoses for cracks or wear every refill. If anything looks damaged, do not use it — bring it to a Triple A Gas outlet.",
      safety_inspection_detail:
        "Pay special attention to the rubber hose connecting the regulator to the cooker — this is the most common point of failure. Look for cracks, brittleness, or signs of burning. The valve on the cylinder should open and close smoothly. If the regulator hisses or feels loose, replace it immediately.",
      safety_connection: "Connection",
      safety_connection_desc:
        "Tighten fittings by hand, then check for leaks with soapy water. Bubbles mean a leak — close the valve and re-seat the connection.",
      safety_connection_detail:
        "Mix a small amount of dish soap with water in a spray bottle. After connecting the regulator, spray the solution on all connection points and the hose. If you see bubbles forming, there is a leak. Tighten the connection and test again. If bubbles persist, do not use the cylinder — contact Triple A Gas for assistance.",
      safety_transport: "Transport",
      safety_transport_desc:
        "Secure cylinders upright in the vehicle. Do not leave a filled cylinder in a closed hot car for long periods.",
      safety_transport_detail:
        "Always transport cylinders in an upright position with the valve closed and protective cap on. Use a non-slip mat or straps to prevent rolling. Never transport cylinders in the passenger compartment of a car — use a pickup bed or open trailer. If transporting in a van, open windows for ventilation.",
      safety_more: "More details",
      safety_checklist: "Checklist",
      safety_checklist_title: "Before you light the stove",
      safety_checklist_1: "Cylinder is upright and stable on a firm surface",
      safety_checklist_2: "Hose is free of cracks, kinks, and burns",
      safety_checklist_3:
        "Regulator is seated correctly and valve opens smoothly",
      safety_checklist_4: "No smell of gas after opening the valve",
      safety_checklist_5:
        "Area around the cooker is clear of flammable materials",
      safety_emergency: "Emergency: 024 507 5496",
      safety_find_station: "Find a station",
      safety_emergency_bar:
        "Gas emergency? Call 024 507 5496 immediately — available 24/7",

      // Stations page
      stations_hero_title: "Find a Station",
      stations_hero_desc:
        "Triple A Gas operates 7 retail outlets across Greater Accra, Central, Ashanti, and Western regions. Use the map or list below to find your nearest branch — confirm availability before travelling.",
      stations_map_title: "Interactive map",
      stations_map_heading: "Our Locations",
      stations_map_desc:
        "Triple A Gas operates 7 retail outlets across Ghana. Use the map to find the branch nearest to you.",
      stations_all: "All stations",
      stations_find: "Find & Contact",
      stations_search: "Search by town or region...",
      stations_all_locations: "All locations",
      stations_gallery: "Station gallery",
      stations_gallery_title: "See our stations",
      stations_gallery_desc: "Real photos from our stations across Ghana.",
      stations_need_gas: "Need gas today?",
      stations_need_desc:
        "Call your nearest branch to confirm current availability and opening hours.",
      stations_call_now: "Call now",

      // FAQ page
      faq_hero_title: "Frequently Asked Questions",
      faq_hero_desc:
        "Everything you need to know about ordering LPG, delivery, safety, and service from Triple A Gas.",
      faq_search: "Search questions…",
      faq_expand_all: "Expand All",
      faq_collapse_all: "Collapse All",
      faq_orders: "Orders & Delivery",
      faq_q1: "How do I order gas from Triple A Gas?",
      faq_a1:
        "You can order by phone, WhatsApp, or using the delivery request form on our Contact or Products pages. Tell us your cylinder size and delivery area, and we will confirm availability and pricing.",
      faq_q2: "How long does delivery take?",
      faq_a2:
        "Delivery times depend on your location and the station's current workload. Most deliveries within the station's coverage area are completed the same day or within 24 hours. Call your nearest branch to confirm.",
      faq_q3: "What areas do you deliver to?",
      faq_a3:
        "We serve areas near our 7 retail outlets across Greater Accra (Agbogba, Klagon), Central Region (Apam), Ashanti Region (Antoa, Bonwire), and Western Region (Bogoso, Prestea). Call the branch closest to you to check if we deliver to your specific location.",
      faq_q4: "Do you charge for delivery?",
      faq_a4:
        "Delivery charges vary by distance and order size. Please ask the station when you place your order. Delivery is free or discounted for bulk/commercial orders in some areas.",
      faq_products: "Products & Pricing",
      faq_q5: "What cylinder sizes do you offer?",
      faq_a5:
        "We offer four sizes to suit different needs: 3 kg (Starter cylinder, ideal for students and small kitchens), 6 kg (Everyday household cooking), 14.5 kg (Family homes and chop bars), Bulk / tank (Commercial supply for hotels, factories, and institutions). Visit our Products page for current guide prices.",
      faq_q6: "Can I exchange an empty cylinder for a full one?",
      faq_a6:
        "Yes. You can swap your empty cylinder for a full one of the same size at any Triple A Gas outlet, provided the empty cylinder passes a quick safety inspection (valve and hose condition). Exchange is usually faster than waiting for a refill.",
      faq_q7: "What payment methods do you accept?",
      faq_a7:
        "We accept cash and mobile money (MoMo) at all our stations. Please confirm with your branch when ordering, as payment options may vary by location.",
      faq_q8: "Do I need my own cylinder?",
      faq_a8:
        "If you are a new customer, you may need to purchase a new cylinder or pay a deposit for one. If you already own a Triple A Gas or compatible cylinder, we can refill or exchange it. Ask your nearest station for details.",
      faq_safety_cat: "Safety",
      faq_q9: "What should I do if I smell gas?",
      faq_a9:
        "Follow these steps immediately: 1. Turn off the cylinder valve, 2. Open windows and doors to ventilate the area, 3. Do not switch any electrical devices on or off, 4. Do not light matches or use lighters, 5. Leave the area and call 024 507 5496 immediately. For more safety tips, visit our Safety page.",
      faq_q10: "How should I store my LPG cylinder at home?",
      faq_a10:
        "Keep the cylinder upright at all times, in a well-ventilated area away from heat sources, direct sunlight, and flammable materials. Never store cylinders indoors inside closed cupboards. Ensure the valve is fully closed when not in use.",
      faq_q11: "How do I check if my cylinder and hose are safe?",
      faq_a11:
        "Before every refill, check: The hose for cracks, kinks, or signs of wear, the regulator is seated correctly and seals tightly, the valve opens and closes smoothly, apply soapy water to connections — bubbles mean a leak. If you notice any damage, bring the cylinder to your nearest Triple A Gas outlet for inspection.",
      faq_stations_cat: "Stations & Service",
      faq_q12: "What are your opening hours?",
      faq_a12:
        "Opening hours may vary by station. Please call your nearest branch to confirm their current hours before travelling.",
      faq_q13: "Where is your head office located?",
      faq_a13:
        "Our head office is at Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra, Greater Accra Region. You can also visit any of our other 6 retail outlets — see all locations on our Stations page.",
      faq_q14: "Do you offer bulk supply for businesses?",
      faq_a14:
        "Yes. We supply bulk LPG to hotels, restaurants, factories, schools, and other commercial customers. Contact us via WhatsApp or call 024 507 5496 to discuss your requirements and get a quote.",
      faq_helpful: "Was this helpful?",
      faq_yes: "Yes",
      faq_no: "No",
      faq_thanks: "Thanks!",
      faq_empty: "No questions match your search. Try a different term.",
      faq_cta_title: "Still have questions?",
      faq_cta_desc: "We are happy to help. Call or send us a message.",
      faq_cta_call: "Call 024 507 5496",
      faq_cta_whatsapp: "WhatsApp",
      faq_cta_message: "Send a message",

      // 404 page
      error_404: "404",
      error_subtitle: "Page not found",
      error_title: "This page ran out of gas",
      error_desc:
        "The link you followed may be broken, the page may have been moved, or you may have typed the address incorrectly. Let's get you back on track.",
      error_home: "Back to Home",
      error_station: "Find a Station",
      error_whatsapp: "Help on WhatsApp",
      error_page_not_found: "Page not found",

      // General
      call_us: "Call Us",
      send_message: "Send a message",
      search: "Search...",
      close: "Close",
      loading: "Loading...",
    },

    tw: {
      nav_home: "Fie",
      nav_products: "Nneɛma",
      nav_stations: "Hwehwɛ Station",
      nav_safety: "Banbɔ",
      nav_faq: "FAQ",
      nav_about: "Yɛn Ho Asɛm",
      nav_contact: "Kasa Kyɛre Yɛn",
      nav_blog: "Blog",

      hero_kicker: "Triple A LP Gas Limited · Ghana",
      hero_lead:
        "Hwehwɛ Triple A LP Gas beae a ɛwɔ hɔ ma amansan, kasa kyɛre yɛn, anaasɛ sua LPG banbɔ ho nsɛm.",
      hero_stock: "akoradeɛ",
      hero_routes: "akwan",
      hero_tank: "Tank a emu dɔ",
      hero_deliveries: "Nneɛma a yɛde ma",

      stat_sales_record: "Nneɛma a yɛtɔn dada",
      stat_mt_sales: "MT LPG tɔn a yɛkae",
      stat_market_share: "% gua mu kyɛfa",
      stat_member: "Memba din krataa",

      products_title: "Cylinder kɛseɛ a ɛfata fie biara",
      products_desc:
        "Kasa kyɛre Triple A LP Gas ma nneɛma a ɛwɔ hɔ ne boɔ. LPG banbɔ ne cylinder a ɛfata na ɛsɛ sɛ yɛbu no kan.",
      starter: "Starter cylinder",
      household: "Fie",
      family: "Fie / adwuma ketewa",
      commercial: "Adwuma kɛseɛ",
      enquire: "Bisa",
      ask_price: "Bisa boɔ",
      quote: "boɔ",
      view_all: "Hwɛ nneɛma ne adwuma nyinaa →",

      safety_title: "Banbɔ nyɛ asɛmfua kɛseɛ — ɛyɛ yɛn adwuma.",
      safety_desc:
        "Fi cylinder sohwɛ so kosi gas a efi mu, Triple A Gas adwumakorabea biara di banbɔ a ɛyɛ na ɛbɛyɛ adwuma no akyi.",
      safety_cta: "Kenkan banbɔ afutudeɛ",

      testimonials_title: "Deɛ yɛn adetɔnfoɔ ka",
      testimonials_desc:
        "Nsɛm a efi fie ne adwumayɛfoɔ a wɔde wɔn ho to Triple A Gas so no hɔ.",

      stations_title: "Hwehwɛ adwumakorabea a ɛbɛn wo",
      stations_desc:
        "Triple A Gas di adetɔnfoɔ som wɔ beae 7 a ɛwɔ Ghana mu. Hwɛ nkorabea a ɛbɛn wo na frɛ wɔn ansa na woakɔ.",
      browse_stations: "Hwɛ adwumakorabea nyinaa",
      open_map: "Bue map",
      get_directions: "📍 Hwehwɛ ɛkwan",
      driving_directions: "Ɛkwan a wɔfa so kɔ",
      confirm_before: "Hwehwɛ ansa na woakɔ",
      availability: "Nneɛma a ɛwɔ hɔ",

      trust_title: "LPG a wɔde wɔn ho to so ma fie ne adwumayɛfoɔ",
      trust_desc: "Triple A LP Gas Limited din wɔ Ghana petroleum gua mu.",
      trust_cta: "Yɛn Ho Asɛm",

      gallery_title: "Hwɛ Triple A Gas adwuma",
      gallery_desc: "Mfonini a efi yɛn adwumakorabea ne yɛn dwumadie mu.",

      footer_desc:
        "LPG a wɔde wɔn ho to so a banbɔ yɛ nea edi kan ma fie ne adwumayɛfoɔ wɔ Ghana.",
      explore: "Hwehwɛ",
      contact_title: "Kasa kyɛre yɛn",
      order_title: "Tɔ",
      chat_whatsapp: "Kasa WhatsApp so",
      request_delivery: "Srɛ wɔmfa mma wo",
      nearest_outlet: "Adwumakorabea a ɛbɛn wo",
      staff_login: "Adwumayɛfoɔ Login",
      site_built: "Wɔayɛ wei ama Triple A Gas",

      order_now: "Tɔ Seesei",
      order_desc: "Srɛ LPG wɔmfa mma wo fie",
      your_order: "Wo tɔn",
      cart_empty: "Wo tɔn no da hɔ",
      checkout: "Kɔ Checkout",
      continue_shopping: "Kɔ tɔ so",
      payment_method: "Sika a wode bɛtua",
      cash: "Sika a wode bɛma",
      momo: "Mobile Money (MoMo)",
      place_order: "Fa wo tɔn no",
      order_success: "Wɔagye wo tɔn no ato mu!",
      order_summary: "Wo tɔn no mu nsɛm",
      product: "Nneɛma",
      price: "Bo",
      delivery: "De kɔma wo",
      payment: "Sikatua",
      ask_at_station: "Bisa wɔ station no",
      delivery_info_title: "📍 De kɔma wo ho nsɛm",
      delivery_info_text: "Yɛde kɔma mmeae a ɛbɛn yɛn station 7 no. Frɛ yɛn na yɛnhwɛ sɛ yɛde bɛkɔ wo hɔ anaa. Wobetumi de akɔ da koro no ara wɔ mmeae bi.",

      blog_title: "Triple A Gas Nsɛm ne Nsɛmpa",
      blog_desc:
        "Banbɔ afutudeɛ, adwumakuw mu nsɛm, ne mpɔtam nsɛm a efi Triple A Gas.",
      read_more: "Kenkan kɛseɛ →",
      latest_posts: "Nsɛm a ɛdi akyire",
      no_posts: "Nsɛm nni hɔ mprenampa. San hwɛ bio!",

      lang_en: "English",
      lang_twi: "Twi (Asante)",
      lang_ga: "Ga (Gã)",

      // Products page (Twi)
      prod_hero_title: "Nneɛma ne Adwuma",
      prod_hero_desc:
        "Cylinder kɛseɛ, refill ne exchange, fie-fie delivery, ne bulk ma adwumayɛfoɔ.",
      prod_cylinders: "Cylinder",
      prod_choose_size: "Saw wo kɛseɛ",
      prod_choose_desc:
        "Kyerɛ boɔ a wɔde refill — hwɛ wɔ adwumakorabea a ɛbɛn wo. Exchange wɔ hɔ sɛ cylinder no tɔn.",
      prod_compare: "Toto kɛseɛ ho",
      prod_3kg_desc: "Starter / sukuuni / tiawa tiawa",
      prod_3kg_price: "GH₵ 55 refill",
      prod_6kg_desc: "Fie noa daa",
      prod_6kg_price: "GH₵ 95 refill",
      prod_14kg_desc: "Fie kɛseɛ ne chop bar",
      prod_14kg_price: "GH₵ 145 refill",
      prod_bulk_desc: "Hotel, factory, sukuu",
      prod_bulk_price: "Bisa boɔ",
      prod_order: "Tɔ",
      prod_enquire: "Bisa",
      prod_how_works: "Neɛ ɛyɛ",
      prod_refill_title: "Refill",
      prod_refill_desc:
        "Fa wo Triple A Gas cylinder kɔ adwumakorabea. Yɛhwehwɛ valve ne hose, na yɛhyɛ no ma kosi sɛ yɛduruu so.",
      prod_exchange_title: "Exchange",
      prod_exchange_desc:
        "Fa nnaka sesa fa ma yɛmfa foforo ma wo sɛ nnaka no tɔn nkrataa a yɛhwehwɛe no.",
      prod_delivery_title: "Fie-fie delivery",
      prod_delivery_desc: "Tɔ frɛ anaa WhatsApp so. Yɛde ma wo fie.",
      prod_order_title: "Tɔ",
      prod_request_delivery: "Srɛ wɔmfa mma wo",
      prod_request_desc:
        "Ka kɛseɛ ne beaeɛ no kyerɛ yɛn. Yɛbɛfrɛ wo akɔhwɛ boɔ.",
      prod_chat_whatsapp: "Kasa WhatsApp so",
      prod_call: "Frɛ 024 507 5496",
      form_name: "Din",
      form_name_placeholder: "Ama Owusu",
      form_phone: "Telefon nɔma",
      form_phone_placeholder: "024 000 0000",
      form_hint: "Ghana nɔma: 0XX XXX XXXX or +233...",
      form_size: "Cylinder kɛseɛ",
      form_select_size: "Saw kɛseɛ",
      form_area: "Beaeɛ a yɛde bɛma wo",
      form_area_placeholder: "East Legon, Accra",
      form_request: "Srɛ Wɔmfa Mma Wo",
      compare_title: "Cylinder Kɛseɛ Toto Ho",
      compare_desc: "Toto yɛn cylinder ho na saw nea ɛfata wo.",
      compare_size: "Kɛseɛ",
      compare_best: "Ɛfata",
      compare_price: "Refill boɔ",
      compare_exchange: "Exchange",
      compare_3kg: "Sukuuni, tiawa tiawa",
      compare_6kg: "Fie noa daa",
      compare_14kg: "Fie kɛseɛ, chop bar",
      compare_bulk: "Hotel, factory",
      compare_available: "Wɔ hɔ",
      compare_na: "N/A",
      compare_custom: "Bisa boɔ",

      // About page (Twi)
      about_hero_title: "Yɛn Ho Asɛm",
      about_hero_desc:
        "Oil Marketing Company a ɛyɛ LPG adwuma wɔ Ghana kɛseɛ mu.",
      about_company: "Yɛn Ho Asɛm",
      about_company_title: "Triple A Gas Company Limited",
      about_company_desc:
        "Triple A Gas Company Limited yɛ Oil Marketing Company a ɛyɛ LPG adwuma.",
      about_trustworthy: "Nea wɔde wɔn ho to so",
      about_trustworthy_desc: "Yɛma company ho nsɛm da hɔ pefee.",
      about_safety_literate: "Banbɔ ho nimdefoɔ",
      about_safety_desc: "LPG hia banbɔ. Hwɛ cylinder no ansa na woakɔ.",
      about_energetic: "Nea ɔyɛ adwuma den",
      about_energetic_desc: "Triple A Gas din wɔ Ghana petroleum gua mu.",
      about_profile: "Company krataa a ɛwɔ hɔ ma amansan",
      about_profile_title: "Triple A Gas Company Limited wɔ Ghana",
      about_profile_desc: "COMAC Ghana din krataa. 2017 no 1,599.1 MT LPG tɔn.",
      about_location: "Beaeɛ a ɛda hɔ ma amansan",
      about_location_desc: "Ga East Municipal Assembly, Greater Accra.",
      about_industry: "Adwuma din krataa",
      about_industry_desc:
        "Triple A LP Gas Limited din wɔ COMAC Ghana member directory.",
      about_historical: "Tete adwuma nsɛm",
      about_historical_desc: "2019 LPG-sector report kyerɛ 2017 tɔn.",
      about_outlets: "Retail outlets",
      about_regions: "Nkran a yɛsom mu",
      about_mt_sales: "MT LPG tɔn",
      about_hq: "Head office beaeɛ",
      about_branches: "Nkorabea nsɛm",
      about_branches_title: "Triple A Gas Nkorabea Nyinaa",
      about_branches_desc:
        "Nkorabea 7 wɔ Greater Accra, Central, Ashanti, Western.",
      about_view_stations: "Hwɛ nkorabea nyinaa",
      about_journey: "Yɛn Nkɔsoɔ",
      about_timeline_title: "Company Timeline",
      about_timeline_desc: "Ɛfiri anisoadehunu kɔsi LPG a wɔde wɔn ho to so.",
      about_founded: "Wɔtee Company no",
      about_founded_desc: "Wɔtee Triple A Gas Company Limited wɔ afe 2005.",
      about_growth: "Mfitiaseɛ Nkɔsoɔ",
      about_growth_desc: "Yɛbuee adwumakorabea a edi kan wɔ Agbogba.",
      about_expansion: "Nkran kɛseɛ mu nkɔsoɔ",
      about_expansion_desc: "Yɛtrɛɛ adwuma kɔɔ Central, Ashanti, Western.",
      about_recognition: "Adwuma mu din ne som a ɛkɔ so",
      about_recognition_desc: "COMAC member. Yɛkɔ so som adwuma wɔ nkorabea 7.",
      about_leadership: "Akannifoɔ",
      about_team_title: "Hyia Team no",
      about_team_desc: "Nnipa a wɔwɔ Triple A Gas Company Limited akyi.",
      about_accreditation: "Nkrataa",
      about_licensed: "Wɔama ho kwan",
      about_licensed_desc:
        "Wɔagye Triple A Gas Company Limited ato mu wɔ Ghana petroleum ase.",
      about_npa: "NPA Licensed Marketer",
      about_npa_desc: "Wɔagye ato mu wɔ National Petroleum Authority.",
      about_comac: "COMAC Member",
      about_comac_desc: "Chamber of Oil Marketing Companies.",
      about_registration: "Company Registration",
      about_registration_desc: "Nkrataa ne kontakt.",
      about_official_name: "Official Name",
      about_status: "Company Status",
      about_status_val: "In Good Standing",
      about_reg_number: "Registration Number",
      about_tax: "Tax ID",
      about_address: "Official Address",
      about_contact: "Primary Contact",
      about_representative: "Company Representative",

      // Contact page (Twi)
      contact_hero_title: "Kasa Kyɛre Yɛn",
      contact_hero_desc:
        "Telefon ne WhatsApp yɛ ɛkwan a eye sen biara. Fa form no sɛ wopɛ sɛ wɔfrɛ wo.",
      contact_reach: "Fa kasa kyɛre yɛn",
      contact_answer: "Yɛgye telefon so",
      contact_call: "Frɛ yɛn",
      contact_whatsapp: "WhatsApp",
      contact_email: "Email",
      contact_find: "Hwehwɛ Station",
      contact_head_office: "Head office",
      contact_address:
        "Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra",
      contact_reg_details: "Registration details",
      contact_reg_info:
        "CA-18,223 | Tax ID: C5647752015 | Status: In Good Standing",
      contact_chat_whatsapp: "Kasa WhatsApp so",
      contact_find_station: "Hwehwɛ Station",
      contact_emergency: "Gas ho haw",
      contact_emergency_desc:
        "Sɛ wote gas a, di Safety krataa no so nsɛm akyi, na frɛ 024 507 5496.",
      form_name_label: "Din",
      form_name_placeholder: "Kwame Mensah",
      form_phone_label: "Telefon nɔma",
      form_phone_placeholder: "024 000 0000",
      form_hint_text: "Ghana nɔma: 0XX XXX XXXX or +233...",
      form_email_label: "Email (wopɛ a)",
      form_email_placeholder: "wo@example.com",
      form_message_label: "Yɛn ho asɛm?",
      form_message_placeholder: "Mehia 14.5kg refill a wɔmfa mma...",
      form_send: "Fa nsɛm kɔma yɛn",
      form_error_name: "Yɛsrɛ wo, kyerɛw wo din",
      form_error_phone: "Kyerɛw Ghana nɔma a ɛyɛ (e.g. 024 000 0000)",
      form_error_email: "Kyerɛw email a ɛyɛ",
      form_error_message: "Yɛsrɛ wo, kyerɛkyerɛ mu",

      // Safety page (Twi)
      safety_hero_title: "LPG banbɔ",
      safety_hero_desc: "Nea ɛsɛ sɛ woyɛ wɔ banbɔ ne hwɛ mu.",
      safety_smell_gas: "Wote gas?",
      safety_smell_desc:
        "Tɔ cylinder valve no mu, bue mpomma, na frɛ 024 507 5496.",
      safety_storage: "Kora",
      safety_storage_desc: "Sisi cylinder no nteɛso so wɔ baabi a mframa wɔ.",
      safety_storage_detail: "Mma nneɛma a ɛhye no nkɔ cylinder no ho.",
      safety_inspection: "Hwɛ",
      safety_inspection_desc: "Hwɛ valve, regulator ne hose no.",
      safety_inspection_detail: "Hwɛ hose a ɛkɔ cooker no so.",
      safety_connection: "Connection",
      safety_connection_desc:
        "Tɔ nkɔsoɔ no den, na hwɛ sɛ nsuo ne samina bɛma wo.",
      safety_connection_detail: "Fa samina ne nsuo fra na hwɛ.",
      safety_transport: "Transport",
      safety_transport_desc: "Sisi cylinder no nteɛso so wɔ car no mu.",
      safety_transport_detail: "Fa cylinder no sisi nteɛso so.",
      safety_more: "Nkaeɛ mu",
      safety_checklist: "Nsɛm a ɛwɔ hɔ",
      safety_checklist_title: "Ansa na wobehye stove no",
      safety_checklist_1: "Cylinder no sisi nteɛso so",
      safety_checklist_2: "Hose nni paapae",
      safety_checklist_3: "Regulator no sisi nteɛso so",
      safety_checklist_4: "Wompe gas",
      safety_checklist_5: "Nneɛma a ɛhye nni cooker no ho",
      safety_emergency: "Haw: 024 507 5496",
      safety_find_station: "Hwehwɛ station",
      safety_emergency_bar: "Gas haw? Frɛ 024 507 5496 seesei — 24/7",

      // Stations page (Twi)
      stations_hero_title: "Hwehwɛ Station",
      stations_hero_desc: "Triple A Gas wɔ nkorabea 7 wɔ Ghana.",
      stations_map_title: "Map a ɛyɛ anigye",
      stations_map_heading: "Yɛn Beaeɛ",
      stations_map_desc: "Fa map no hwehwɛ nkorabea a ɛbɛn wo.",
      stations_all: "Nkorabea nyinaa",
      stations_find: "Hwehwɛ & Kontakt",
      stations_search: "Hwehwɛ fie kuro...",
      stations_all_locations: "Beae nyinaa",
      stations_gallery: "Station mfonini",
      stations_gallery_title: "Hwɛ yɛn nkorabea",
      stations_gallery_desc: "Mfonini a efi yɛn nkorabea.",
      stations_need_gas: "Woho hia gas ɛnnɛ?",
      stations_need_desc: "Frɛ nkorabea a ɛbɛn wo na hwɛ.",
      stations_call_now: "Frɛ seesei",

      // FAQ page (Twi)
      faq_hero_title: "Nsɛmmisa a wɔtae bisa",
      faq_hero_desc: "Nea ɛsɛ sɛ wunyɛ wɔ LPG tɔn mu.",
      faq_search: "Hwehwɛ nsɛmmisa...",
      faq_expand_all: "Bue nyinaa",
      faq_collapse_all: "To nyinaa mu",
      faq_orders: "Tɔn ne Delivery",
      faq_q1: "Mɛkwan so na metumi tɔ gas?",
      faq_a1: "Wubetumi afrɛ yɛn, afa WhatsApp so, anaa wode delivery form a ɛwɔ Contact anaa Products krataafa so atɔ. Ka cylinder kɛse ne beae a wɔmfa nkɔ no, na yɛbɛsi bo ne nea ɛwɔ hɔ no so dua.",
      faq_q2: "Bere bɛn na wɔde gas no bɛba?",
      faq_a2: "Bere a wɔde bɛba no gyina wo beae ne station no adwuma so. Mpɛn pii no, wɔde bɛba da koro no ara anaa nnɔnhwerew 24 mu. Frɛ station a ɛbɛn wo no na hu mu.",
      faq_q3: "Mmeae bɛn na mode kɔma?",
      faq_a3: "Yɛsom mmeae a ɛbɛn yɛn retail outlet 7 wɔ Greater Accra, Central, Ashanti ne Western Region mu. Frɛ branch a ɛbɛn wo no na hu sɛ wɔde bɛba wo beae pɔtee no anaa.",
      faq_q4: "Motu ka wɔ delivery ho anaa?",
      faq_a4: "Delivery ka gyina kwan tenten ne order kɛse so. Bisa station no bere a woreyɛ order no. Wobetumi ayi ka no afi so ama bulk order wɔ mmeae bi.",
      faq_products: "Nneɛma ne Bo",
      faq_q5: "Cylinder akɛse bɛn na mowɔ?",
      faq_a5: "Yɛwɔ 3 kg, 6 kg, 14.5 kg ne bulk/tank cylinders ma fie ne adwuma ahorow. Kɔ Products krataafa no so na hwɛ bo a ɛwɔ hɔ.",
      faq_q6: "Metumi asesa cylinder a hwee nnim ama nea ahyɛ ma anaa?",
      faq_a6: "Yiw. Sɛ wo cylinder no di ahobammɔ nhwehwɛmu no mu a, wubetumi asesa no ama nea ahyɛ ma a ɛyɛ kɛse koro wɔ yɛn outlet biara.",
      faq_q7: "Sikatua kwan bɛn na mogye?",
      faq_a7: "Yɛgye sika kɛse ne Mobile Money wɔ yɛn stations nyinaa mu. Si so dua wɔ branch no hɔ bere a woreyɛ order no.",
      faq_q8: "Ɛsɛ sɛ mewɔ m'ankasa cylinder anaa?",
      faq_a8: "Sɛ woyɛ customer foforo a, ebia wobɛtɔ cylinder foforo anaa wode deposit bɛto hɔ. Sɛ wowɔ Triple A Gas anaa cylinder a ɛfata dedaw a, yɛbɛhyɛ ama wo anaa yɛasesa ama wo.",
      faq_safety_cat: "Ahobammɔ",
      faq_q9: "Sɛ mete gas hua a, dɛn na menyɛ?",
      faq_a9: "Dum cylinder valve no, bue mfɛnsere, nnan anyinam ahoɔden ade bi, fi beae no hɔ, na frɛ 024 507 5496 ntɛm ara.",
      faq_q10: "Mɛyɛ dɛn de me LPG cylinder akora fie?",
      faq_a10: "Ma cylinder no nnyina hɔ yiye wɔ beae a mframa kɔ mu, na mma ɛnka ogya, owia anaa nneɛma a ɛtumi sɔ ogya ho. Mfa nkora dan a wɔato mu mu.",
      faq_q11: "Mɛyɛ dɛn ahu sɛ me cylinder ne hose no yɛ den?",
      faq_a11: "Ansa na wobɛhyɛ bio no, hwɛ sɛ hose no nni mpaapaemu, regulator no atim yiye, valve no bue na ɛto yiye, na fa samina nsu sɔ nkitahodi no hwɛ sɛ bubble bi pue anaa.",
      faq_stations_cat: "Stations ne Dwumadie",
      faq_q12: "Dɛn ne mo opening hours?",
      faq_a12: "Opening hours tumi sesa wɔ station biara. Frɛ branch a ɛbɛn wo no ansa na wotu kwan.",
      faq_q13: "Ɛhe na mo head office wɔ?",
      faq_a13: "Yɛn head office wɔ Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra, Greater Accra Region.",
      faq_q14: "Mode bulk gas ma businesses anaa?",
      faq_a14: "Yiw. Yɛma hotels, restaurants, factories, sukuu ne businesses afoforo bulk LPG. Frɛ yɛn anaa fa WhatsApp so ka wo ahiade no.",
      faq_helpful: "Eyi boaa wo?",
      faq_yes: "Aane",
      faq_no: "Dabi",
      faq_thanks: "Meda ase!",
      faq_empty: "Nsɛmmisa biara nni hɔ. Hwɛ bio.",
      faq_cta_title: "Nsɛmmisa wɔ hɔ?",
      faq_cta_desc: "Yɛpɛ sɛ yɛboa. Frɛ yɛn.",
      faq_cta_call: "Frɛ 024 507 5496",
      faq_cta_whatsapp: "WhatsApp",
      faq_cta_message: "Fa nsɛm kɔma yɛn",

      // 404 page (Twi)
      error_404: "404",
      error_title: "Krataa yi nni hɔ",
      error_desc: "Link no ayɛ bone. Mma yɛmfa wo nkɔ fie.",
      error_home: "San kɔ Fie",
      error_station: "Hwehwɛ Station",
      error_whatsapp: "Mmoa WhatsApp so",
      error_page_not_found: "Wonnyawee krataa no",

      call_us: "Frɛ yɛn",
      send_message: "Fa nsɛm kɔma yɛn",
      search: "Hwehwɛ...",
      close: "To mu",
      loading: "Ɛrewura mu...",
    },

    ga: {
      nav_home: "Shĩa",
      nav_products: "Nii",
      nav_stations: "Maya Station",
      nav_safety: "Hewale",
      nav_faq: "FAQ",
      nav_about: "Wɔ Wa",
      nav_contact: "Wɔ Ye Wɔ",
      nav_blog: "Blog",

      hero_kicker: "Triple A LP Gas Limited · Ghana",
      hero_lead:
        "Maya Triple A LP Gas he ni yɛ kɛ̃́, wɔ ye wɔ, loo kase LPG hewale sanei.",
      hero_stock: "nii",
      hero_routes: "gbɛi",
      hero_tank: "Tank lɛ nɔ",
      hero_deliveries: "Nii ni ya nɔ",

      stat_sales_record: "Nii ni wo jeɔ mli",
      stat_mt_sales: "MT LPG nii ni wo jeɔ",
      stat_market_share: "% he ni wo yeɔ",
      stat_member: "Memba gbɛ́i krataa",

      products_title: "Cylinder gbii ni sa shĩa fɛɛ",
      products_desc:
        "Wɔ ye Triple A LP Gas wɔ nii ni yɛ kɛ nɔyeli lɛ he. LPG hewale kɛ cylinder ni sa lɛ esa akɛ wo bu nɔ.",
      starter: "Starter cylinder",
      household: "Shĩa",
      family: "We / nitsumɔ bibii",
      commercial: "Nitsumɔ wulu",
      enquire: "Bi",
      ask_price: "Bi nɔyeli",
      quote: "Nɔyeli",
      view_all: "Kwɛ nii kɛ nitsumɔ fɛɛ →",

      safety_title: "Hewale ji nɔ ni feɔ nɔ — no ji wɔ nitsumɔ.",
      safety_desc:
        "Je cylinder kwɛmɔ no shishi kɛyashi gas ni jeɔ mli lɛ, Triple A Gas he fɛɛ ni yɛ miitsuɔ hewale ni yɛ naa nɔ.",
      safety_cta: "Kane hewale sanei",

      testimonials_title: "Mɛi ni wo jeɔ nii lɛɛi",
      testimonials_desc:
        "Sanei kɛjɛ shĩai kɛ nitsumɔi ni wo amɛhe Triple A Gas nɔ.",

      stations_title: "Maya he ni bɛ miŋ nɔ",
      stations_desc:
        "Triple A Gas yeɔ mɛi anɔkwa yɛ hei 7 ni yɛ Ghana. Kwɛ hei ni bɛ miŋ ni wɔ ye amɛ nɔ kɛji oyaa shi.",
      browse_stations: "Kwɛ he fɛɛ",
      open_map: "Bue map",
      get_directions: "📍 Maya gbɛ",
      driving_driving_directions: "Gbɛ ni abɔɔ",
      confirm_before: "Kwɛ dɛŋ dɛŋ",
      availability: "Nii ni yɛ",

      trust_title: "LPG ni mɛi heɔ amɛhe nɔ ni sa shĩai kɛ nitsumɔi",
      trust_desc: "Triple A LP Gas Limited gbɛ́i yɛ Ghana petroleum gua lɛ mli.",
      trust_cta: "Wɔ Wa Sane",

      gallery_title: "Kwɛ Triple A Gas nitsumɔ",
      gallery_desc: "Mfonirii kɛjɛ wɔ hei kɛ wɔ nitsumɔi amli.",

      footer_desc:
        "LPG ni mɛi heɔ amɛhe nɔ, hewale ji nɔ ni feɔ nɔ, sa shĩai kɛ nitsumɔi yɛ Ghana.",
      explore: "Maya",
      contact_title: "Wɔ Ye Wɔ",
      order_title: "Wo",
      chat_whatsapp: "Wɔ ye WhatsApp nɔ",
      request_delivery: "Bi akɛ amɛkɛba oŋ",
      nearest_outlet: "He ni bɛ miŋ",
      staff_login: "Nitsumɔlɔi Login",
      site_built: "Aŋma nɔ yɛ Triple A Gas hewɔ",

      order_now: "Wo Fɛŋ",
      order_desc: "Bi LPG akɛkɛba o shĩa",
      your_order: "O nii ni owo",
      cart_empty: "O nii ni owo lɛ da",
      checkout: "Ya Checkout",
      continue_shopping: "Ya wo nɔ",
      payment_method: "Gbɛ ni obaayo nɔ yɛ nɔyeli lɛ",
      cash: "Shika ni obaafɔ",
      momo: "Mobile Money (MoMo)",
      place_order: "Ŋmaa o nii ni owo",
      order_success: "Wɔ nyɛɛ o nii ni owo lɛ nɔ!",
      order_summary: "O nii ni owo lɛ sane",
      product: "Nii",
      price: "Nɔyeli",
      delivery: "Kɛkɛba",
      payment: "Nɔyeli",
      ask_at_station: "Bisa wɔ station lɛ",
      delivery_info_title: "📍 Kɛkɛba sane",
      delivery_info_text: "Wɔ kɛkɛba yɛ hei ni bɛ miŋ wɔ wɔ station 7 lɛ ŋa. Tsɛ wɔ nɛ wɔ kwɛ ni wɔ kɛkɛba ekɛya o he. Wɔ baanyɛ akɛkɛba yɛ gbeleko mli wɔ hei bi.",

      blog_title: "Triple A Gas Sane kɛ Sane",
      blog_desc:
        "Hewale sanei, kumpani sanei, kɛ mantsɛ sanei kɛjɛ Triple A Gas.",
      read_more: "Kane wulu →",
      latest_posts: "Sanei ni yeɔ nɔ",
      no_posts: "Sanei bɛ. Baa kwɛ ekoŋŋ!",

      lang_en: "English",
      lang_twi: "Twi (Asante)",
      lang_ga: "Ga (Gã)",

      // Products page (Ga)
      prod_hero_title: "Nii kɛ Nitsumɔi",
      prod_hero_desc:
        "Cylinder gbii, refill kɛ exchange, shĩa-shĩa delivery, kɛ bulk nii kɛha nitsumɔi.",
      prod_cylinders: "Cylinder",
      prod_choose_size: "Kwɛ o gbii",
      prod_choose_desc:
        "Kwɛ nɔyeli — kɛji oyaa o he ni bɛ miŋ lɛ. Exchange yɛ kɛji cylinder lɛ sa.",
      prod_compare: "Tee gbii he",
      prod_3kg_desc: "Starter / sukuu / kuku bibii",
      prod_3kg_price: "GH₵ 55 refill",
      prod_6kg_desc: "Shĩa ni yeɔ daa",
      prod_6kg_price: "GH₵ 95 refill",
      prod_14kg_desc: "We kɛ chop bar",
      prod_14kg_price: "GH₵ 145 refill",
      prod_bulk_desc: "Hotel, factory, sukuu",
      prod_bulk_price: "Bi nɔyeli",
      prod_order: "Wo",
      prod_enquire: "Bi",
      prod_how_works: "Bɔ ni ewuɔ",
      prod_refill_title: "Refill",
      prod_refill_desc:
        "Kɛ o Triple A Gas cylinder lɛ kɛba wɔ he. Wɔ kwɛɔ valve kɛ hose lɛ, nɛ wɔŋɔɔ nɔ.",
      prod_exchange_title: "Exchange",
      prod_exchange_desc: "Ŋmaa o dɔŋ lɛ ni wɔkɛ ekpa oŋ kɛji eho kwɛmɔ lɛ.",
      prod_delivery_title: "Shĩa-shĩa",
      prod_delivery_desc: "Wo yɛ phone loo WhatsApp nɔ. Wɔkɛbaa o shĩa.",
      prod_order_title: "Wo",
      prod_request_delivery: "Bi akɛ amɛkɛba oŋ",
      prod_request_desc:
        "Ŋmaa wɔ o gbii kɛ o he lɛ. Wɔɔtsɛ bo nɛ wɔkɛ nɔyeli lɛ aje.",
      prod_chat_whatsapp: "Wɔ ye WhatsApp nɔ",
      prod_call: "Tsɛ 024 507 5496",
      form_name: "Gbɛ́i",
      form_name_placeholder: "Ama Owusu",
      form_phone: "Phone nɔmba",
      form_phone_placeholder: "024 000 0000",
      form_hint: "Ghana nɔmba: 0XX XXX XXXX loo +233...",
      form_size: "Cylinder gbii",
      form_select_size: "Kwɛ gbii",
      form_area: "He ni obaakɛba",
      form_area_placeholder: "East Legon, Accra",
      form_request: "Bi akɛ amɛkɛba oŋ",
      compare_title: "Cylinder Gbii Tee He",
      compare_desc: "Tee wɔ cylinder gbii he koni okwɛ ni sa bo.",
      compare_size: "Gbii",
      compare_best: "Sa",
      compare_price: "Refill nɔyeli",
      compare_exchange: "Exchange",
      compare_3kg: "Sukuu, kuku bibii",
      compare_6kg: "Shĩa ni yeɔ daa",
      compare_14kg: "We, chop bar",
      compare_bulk: "Hotel, factory",
      compare_available: "Yɛ",
      compare_na: "N/A",
      compare_custom: "Bi nɔyeli",

      // About page (Ga)
      about_hero_title: "Wɔ Wa Sane",
      about_hero_desc: "Oil Marketing Company ni feeɔ LPG nitsumɔ yɛ Ghana.",
      about_company: "Wɔ Wa Sane",
      about_company_title: "Triple A Gas Company Limited",
      about_company_desc:
        "Triple A Gas Company Limited ji Oil Marketing Company ni feeɔ LPG nitsumɔ.",
      about_trustworthy: "Mɔ ni afee nɔ akɛ wɔ he wɔ nɔ",
      about_trustworthy_desc: "Wɔjea kumpani sane lɛ kpo.",
      about_safety_literate: "Hewale he wolo",
      about_safety_desc: "LPG hiaa hewale. Kwɛ cylinder lɛ dɛŋ dɛŋ.",
      about_energetic: "Mɔ ni wua nitsumɔ",
      about_energetic_desc: "Triple A Gas gbɛ́i yɛ Ghana petroleum gua lɛ mli.",
      about_profile: "Kumpani krataa ni yɛ kɛ̃́",
      about_profile_title: "Triple A Gas Company Limited yɛ Ghana",
      about_profile_desc:
        "COMAC Ghana mli. 2017 lɛ 1,599.1 MT LPG nii ni wo jeɔ.",
      about_location: "He ni yɛ kɛ̃́",
      about_location_desc: "Ga East Municipal Assembly, Greater Accra.",
      about_industry: "Nitsumɔ gbɛ́i krataa",
      about_industry_desc:
        "Triple A LP Gas Limited gbɛ́i yɛ COMAC Ghana member directory mli.",
      about_historical: "Nitsumɔ sanei",
      about_historical_desc:
        "2019 LPG-sector report lɛ kɛ 2017 nii ni wo jeɔ lɛ kpo.",
      about_outlets: "Retail outlets",
      about_regions: "Hei ni wɔ yeɔ nɔ",
      about_mt_sales: "MT LPG nii ni wo jeɔ",
      about_hq: "Head office he",
      about_branches: "Hei ni bɛ miŋ",
      about_branches_title: "Triple A Gas Hei fɛɛ",
      about_branches_desc: "Hei 7 yɛ Greater Accra, Central, Ashanti, Western.",
      about_view_stations: "Kwɛ hei fɛɛ",
      about_journey: "Wɔ Gbɛ",
      about_timeline_title: "Kumpani Timeline",
      about_timeline_desc: "Je nii shishi kɛyashi LPG ni mɛi heɔ amɛhe nɔ.",
      about_founded: "Wɔ ŋmaa kumpani lɛ shishi",
      about_founded_desc:
        "Wɔ ŋmaa Triple A Gas Company Limited shishi yɛ 2005.",
      about_growth: "Shishi nitsumɔ",
      about_growth_desc: "Wɔ bue he ni fɔ lɛ yɛ Agbogba.",
      about_expansion: "Hei wulu mli nitsumɔ",
      about_expansion_desc: "Wɔ tsɛ nitsumɔ lɛ kɛya Central, Ashanti, Western.",
      about_recognition: "Nitsumɔ mli gbɛ́i kɛ nitsumɔ ni yaa nɔ",
      about_recognition_desc: "COMAC member. Wɔ yaa nɔ wɔ yeɔ nɔ yɛ hei 7.",
      about_leadership: "Hai",
      about_team_title: "Na Team lɛ",
      about_team_desc: "Mɛi ni yɛ Triple A Gas Company Limited sɛɛ.",
      about_accreditation: "Krataa",
      about_licensed: "Wɔ nyɛɛ nɔ",
      about_licensed_desc:
        "Wɔ nyɛɛ Triple A Gas Company Limited nɔ yɛ Ghana petroleum shishi.",
      about_npa: "NPA Licensed Marketer",
      about_npa_desc: "Wɔ nyɛɛ nɔ yɛ National Petroleum Authority.",
      about_comac: "COMAC Member",
      about_comac_desc: "Chamber of Oil Marketing Companies.",
      about_registration: "Company Registration",
      about_registration_desc: "Krataa kɛ sane.",
      about_official_name: "Official Name",
      about_status: "Company Status",
      about_status_val: "In Good Standing",
      about_reg_number: "Registration Number",
      about_tax: "Tax ID",
      about_address: "Official Address",
      about_contact: "Primary Contact",
      about_representative: "Company Representative",

      // Contact page (Ga)
      contact_hero_title: "Wɔ Ye Wɔ",
      contact_hero_desc:
        "Phone kɛ WhatsApp ji gbɛ ni he wã fe fɛɛ. Kɛ form lɛ kɛji obaanyɛ akɛ wɔtsɛ bo.",
      contact_reach: "Wɔ ye wɔ",
      contact_answer: "Wɔ heɔ phone lɛ nɔ",
      contact_call: "Tsɛ wɔ",
      contact_whatsapp: "WhatsApp",
      contact_email: "Email",
      contact_find: "Maya Station",
      contact_head_office: "Head office",
      contact_address:
        "Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra",
      contact_reg_details: "Registration details",
      contact_reg_info:
        "CA-18,223 | Tax ID: C5647752015 | Status: In Good Standing",
      contact_chat_whatsapp: "Wɔ ye WhatsApp nɔ",
      contact_find_station: "Maya Station",
      contact_emergency: "Gas hewale sane",
      contact_emergency_desc:
        "Kɛji o nu gas lɛ, fee nɔ ni yɛ Safety krataa lɛ nɔ, nɛ otsɛ 024 507 5496.",
      form_name_label: "Gbɛ́i",
      form_name_placeholder: "Kwame Mensah",
      form_phone_label: "Phone nɔmba",
      form_phone_placeholder: "024 000 0000",
      form_hint_text: "Ghana nɔmba: 0XX XXX XXXX loo +233...",
      form_email_label: "Email (kɛji obaanyɛ)",
      form_email_placeholder: "bo@example.com",
      form_message_label: "Bɔ ni wɔ baanyɛ aye bo?",
      form_message_placeholder: "Mihiaa 14.5kg refill akɛkɛba...",
      form_send: "Ŋmaa sane lɛ",
      form_error_name: "Ŋmaa o gbɛ́i",
      form_error_phone: "Ŋmaa Ghana nɔmba ni sa (e.g. 024 000 0000)",
      form_error_email: "Ŋmaa email ni sa",
      form_error_message: "Ŋmaa bɔ ni wɔ baanyɛ aye bo",

      // Safety page (Ga)
      safety_hero_title: "LPG hewale",
      safety_hero_desc: "Nɔ ni esa akɛ ofee yɛ hewale kɛ kwɛmɔ mli.",
      safety_smell_gas: "O nu gas?",
      safety_smell_desc:
        "To cylinder valve lɛ, bue fɛilɔi, nɛ otsɛ 024 507 5496.",
      safety_storage: "Kora",
      safety_storage_desc: "Ŋmaa cylinder lɛ nɛ ejaa wɔ he ni mframa yɛ.",
      safety_storage_detail: "Kɛ nii ni yeɔ lɛ akɛ cylinder lɛ.",
      safety_inspection: "Kwɛ",
      safety_inspection_desc: "Kwɛ valve, regulator kɛ hose lɛ.",
      safety_inspection_detail: "Kwɛ hose ni kɛyaa cooker lɛ nɔ.",
      safety_connection: "Connection",
      safety_connection_desc: "To hei lɛ, nɛ otsɛ samina kɛ nu lɛ nɛ okwɛ.",
      safety_connection_detail: "Fa samina kɛ nu lɛ fɛŋ nɛ okwɛ.",
      safety_transport: "Transport",
      safety_transport_desc: "Ŋmaa cylinder lɛ nɛ ejaa wɔ car lɛ mli.",
      safety_transport_detail: "Ŋmaa cylinder lɛ nɛ ejaa.",
      safety_more: "Wolo mli",
      safety_checklist: "Nii ni yɛ",
      safety_checklist_title: "Dɛŋ otsɛ stove lɛ",
      safety_checklist_1: "Cylinder lɛ ja wɔ he ni fa",
      safety_checklist_2: "Hose lɛ bɛ gbɔ",
      safety_checklist_3: "Regulator lɛ ja",
      safety_checklist_4: "O nu gas",
      safety_checklist_5: "Nii ni yeɔ lɛ bɛ cooker lɛ ŋa",
      safety_emergency: "Hewale: 024 507 5496",
      safety_find_station: "Maya station",
      safety_emergency_bar: "Gas hewale sane? Tsɛ 024 507 5496 fɛŋ — 24/7",

      // Stations page (Ga)
      stations_hero_title: "Maya Station",
      stations_hero_desc: "Triple A Gas yeɔ hei 7 yɛ Ghana.",
      stations_map_title: "Map ni he wã",
      stations_map_heading: "Wɔ Hei",
      stations_map_desc: "Fa map lɛ nɛ omaya he ni bɛ miŋ nɔ.",
      stations_all: "Hei fɛɛ",
      stations_find: "Maya kɛ Wɔ Ye Wɔ",
      stations_search: "Maya kɛ maŋ...",
      stations_all_locations: "He fɛɛ",
      stations_gallery: "Station mfonirii",
      stations_gallery_title: "Kwɛ wɔ hei",
      stations_gallery_desc: "Mfonirii kɛjɛ wɔ hei.",
      stations_need_gas: "O hia Gas?",
      stations_need_desc: "Tsɛ o he ni bɛ miŋ lɛ nɛ okwɛ.",
      stations_call_now: "Tsɛ fɛŋ",

      // FAQ page (Ga)
      faq_hero_title: "Sanei ni atsɛɔ daa",
      faq_hero_desc: "Nɔ ni esa akɛ ole yɛ LPG wo mli.",
      faq_search: "Maya sanei...",
      faq_expand_all: "Bue fɛɛ",
      faq_collapse_all: "To fɛɛ",
      faq_orders: "Wo kɛ Delivery",
      faq_q1: "Te wɔ baanyɛ awo gas kɛjɛ Triple A Gas?",
      faq_a1: "O baanyɛ otsɛ wɔ, fa WhatsApp, loo ofa delivery form ni yɛ Contact loo Products page lɛ. Ka cylinder gbii kɛ he ni obaanyɛ akɛkɛba nɔ, nɛ wɔ yɛ bo kɛ ni yɛ nɔ.",
      faq_q2: "Kɛkɛba lɛ ba shishi?",
      faq_a2: "Kɛkɛba bere lɛ da o he kɛ station lɛ nitsumɔ ŋa. Bere babao wɔ kɛkɛba yɛ gbeleko mli loo awa 24 mli. Tsɛ o branch ni bɛ miŋ lɛ nɛ okwɛ.",
      faq_q3: "Hei bɛ ni wɔ kɛkɛba?",
      faq_a3: "Wɔ som hei ni bɛ miŋ wɔ wɔ retail outlets 7 lɛ yɛ Greater Accra, Central, Ashanti kɛ Western. Tsɛ branch ni bɛ miŋ lɛ nɛ okwɛ o he pɔtee.",
      faq_q4: "Wɔ faa kɛkɛba nɔyeli?",
      faq_a4: "Kɛkɛba nɔyeli lɛ da ɔkwan lɛ tenten kɛ order lɛ gbii ŋa. Bisa station lɛ bere ni obaanyɛ owo lɛ. Bulk order bi baanyɛ akɛ bɛ fa nɔyeli lɛ.",
      faq_products: "Nii kɛ Nɔyeli",
      faq_q5: "Cylinder gbii bɛ ni wɔ yeɔ?",
      faq_a5: "Wɔ yeɔ 3 kg, 6 kg, 14.5 kg kɛ bulk/tank cylinders ma shĩa kɛ nitsumɔi. Kwɛ Products page lɛ nɛ ohu nɔyeli lɛ.",
      faq_q6: "Mebaanyɛ atse cylinder ni bɛ nɔ ama ni eja nɔ?",
      faq_a6: "Hɛɛ. Sɛ o cylinder lɛ yeɔ hewale kwɛmɔ lɛ mli a, obaanyɛ atse ama cylinder ni eja nɔ ni gbii koro yɛ wɔ outlet biara.",
      faq_q7: "Nɔyeli kwan bɛ ni wɔ gbo?",
      faq_a7: "Wɔ gbo shika kɛ Mobile Money wɔ wɔ stations fɛɛ. Si lɛ akɛ obisa branch lɛ bere ni obaanyɛ owo lɛ.",
      faq_q8: "Esa akɛ mi ye mli cylinder?",
      faq_a8: "Sɛ oyɛ customer fɔɔ a, ebaanyɛ akɛ otɔ cylinder fɔɔ loo ofa deposit. Sɛ oye Triple A Gas loo cylinder ni sa a, wɔ baahyɛ loo atse ama o.",
      faq_safety_cat: "Hewale",
      faq_q9: "Sɛ mi nu gas a, bɔ ni mi baanyɛ?",
      faq_a9: "To cylinder valve lɛ, bue mfɛnsere, gbɛ anyɛi ni yɛ electricity, tswa kɛ he lɛ, nɛ otsɛ 024 507 5496 fɛŋ.",
      faq_q10: "Mebaanyɛ akora me LPG cylinder yɛ shĩa te?",
      faq_a10: "Ŋmaa cylinder lɛ nɛ ejaa wɔ he ni mframa yɛ, na ejɛ ogya, owia loo nii ni baanyɛ asɔ ogya ŋa. Mafa nkora dan ni eto mu mli.",
      faq_q11: "Mebaanyɛ ahu sɛ me cylinder kɛ hose lɛ sa?",
      faq_a11: "Dɛŋ obaahyɛ nɔ, kwɛ hose lɛ sɛ egbɔ, regulator lɛ sɛ eja, valve lɛ sɛ ebue kɛ eto, nɛ ofa samina nu lɛ fɛŋ connection lɛ nɛ okwɛ bubbles.",
      faq_stations_cat: "Stations kɛ Nitsumɔ",
      faq_q12: "Bɔ ni yɛ mo opening hours?",
      faq_a12: "Opening hours lɛ baanyɛ atse wɔ station biara. Tsɛ branch ni bɛ miŋ lɛ dɛŋ otsɛ ɔkwan.",
      faq_q13: "Mo head office lɛ yɛ he bɛ?",
      faq_a13: "Wɔ head office lɛ yɛ Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra, Greater Accra Region.",
      faq_q14: "Wɔ ma bulk gas ma businesses?",
      faq_a14: "Hɛɛ. Wɔ ma hotels, restaurants, factories, sukuu kɛ business foɔ bulk LPG. Tsɛ wɔ loo ofa WhatsApp nɔ.",
      faq_helpful: "Nɔ nɛ fee bo?",
      faq_yes: "Hɛɛ",
      faq_no: "Dabi",
      faq_thanks: "Wɔ naa o nɔ yɛ!",
      faq_empty: "Sanei bɛ. Baa kwɛ ekoŋŋ.",
      faq_cta_title: "Sanei yɛ?",
      faq_cta_desc: "Wɔ suɔ akɛ wɔ ye bo. Tsɛ wɔ.",
      faq_cta_call: "Tsɛ 024 507 5496",
      faq_cta_whatsapp: "WhatsApp",
      faq_cta_message: "Ŋmaa sane lɛ",

      // 404 page (Ga)
      error_404: "404",
      error_title: "Krataa nɛɛ bɛ",
      error_desc: "Link lɛ efee. Ha wɔkɛbo aya shĩa.",
      error_home: "Sɛɛ kɛya Shĩa",
      error_station: "Maya Station",
      error_whatsapp: "Wɔ ye WhatsApp nɔ",
      error_page_not_found: "Wɔ na krataa lɛ",

      call_us: "Tsɛ wɔ",
      send_message: "Ŋmaa sane lɛ",
      search: "Maya...",
      close: "To",
      loading: "Ni yaa nɔ...",
    },
  },

  extraTranslations: {
    en: {
      typewriter_1: "Reliable LPG for Ghanaian homes and businesses.",
      typewriter_2: "Safety-first cooking gas, delivered to your door.",
      typewriter_3: "Trusted LPG supply since 2005.",
      testimonials_kicker: "Testimonials",
      gallery_kicker: "Gallery",
      gallery_delivery: "Delivery",
      gallery_forecourt: "Forecourt",
      gallery_team: "Team",
      trust_badge_registered: "Registered company name",
      trust_badge_location: "Publicly listed location",
      trust_badge_sales: "1,599.1 MT LPG sales",
      trust_badge_safety: "Safety first",
      trust_badge_confirm: "Confirm before use",
      footer_tagline: "Reliable cooking gas",
      head_office_accra: "Head Office, Accra",
      whatsapp: "WhatsApp",
      testimonial_previous: "Previous testimonial",
      testimonial_next: "Next testimonial",
      testimonial_go_to: "Go to testimonial",
      error_subtitle: "Page not found",
      dashboard_title: "My Account",
      dashboard_desc: "Manage your orders, profile, and delivery preferences.",
      login_title: "Welcome back",
      login_desc: "Sign in to your Triple A Gas account to view orders and manage delivery preferences.",
      register_title: "Create your account",
      register_desc: "Register for faster ordering, order history, and delivery preferences.",
      email_address: "Email address",
      password: "Password",
      sign_in: "Sign In",
      create_account: "Create Account",
      no_account: "Don't have an account? Register",
      have_account: "Already have an account? Sign in",
      invalid_login: "Invalid email or password.",
      connection_error: "Connection error. Please try again.",
    },
    tw: {
      typewriter_1: "LPG a wobetumi de wɔn ho ato so ma Ghana fie ne adwuma.",
      typewriter_2: "Adidie gas a banbɔ di kan, wɔde bɛba wo fie.",
      typewriter_3: "LPG a wɔde wɔn ho ato so fi 2005.",
      testimonials_kicker: "Adetɔfoɔ Adanseɛ",
      gallery_kicker: "Mfonini",
      gallery_delivery: "Nneɛma a wɔde ba",
      gallery_forecourt: "Station anim",
      gallery_team: "Yɛn Kuo",
      trust_badge_registered: "Adwumakuw din a wɔakyerɛw",
      trust_badge_location: "Baabi a wɔabɔ ho dawuru",
      trust_badge_sales: "1,599.1 MT LPG tɔn",
      trust_badge_safety: "Banbɔ di kan",
      trust_badge_confirm: "Hwɛ ansa na wode adi dwuma",
      footer_tagline: "Adidie gas a wobetumi de wɔn ho ato so",
      head_office_accra: "Ti adwumayɛbea, Accra",
      whatsapp: "WhatsApp",
      testimonial_previous: "Adanseɛ a atwa mu",
      testimonial_next: "Adanseɛ a ɛdi hɔ",
      testimonial_go_to: "Kɔ adetɔfoɔ adanseɛ so",
      error_subtitle: "Wonnya krataafa no",
      dashboard_title: "Me Akontaabu",
      dashboard_desc: "Hwɛ wo orders, profile ne delivery apɛdeɛ so.",
      login_title: "Akwaaba bio",
      login_desc: "Kɔ wo Triple A Gas account mu na hwɛ wo orders na di delivery apɛdeɛ so.",
      register_title: "Bɔ wo account",
      register_desc: "Kyerɛw wo din na ama ordering ayɛ ntɛm na woahwɛ wo order history ne delivery apɛdeɛ so.",
      email_address: "Email address",
      password: "Ahintasɛm",
      sign_in: "Kɔ mu",
      create_account: "Bɔ Account",
      no_account: "Wonni account? Kyerɛw wo din",
      have_account: "Wowɔ account dedaw? Kɔ mu",
      invalid_login: "Email anaa ahintasɛm no nyɛ nokware.",
      connection_error: "Nkitahodi mu mfomso. Sɔ hwɛ bio.",
    },
    ga: {
      typewriter_1: "LPG ni mɔi heɔ amɔhe ma Ghana shɛai kɛ nitsumɔi.",
      typewriter_2: "Adidie gas ni hewale ji nɔ ni feɔ nɔ, wɔkɔkɔba o shɛa.",
      typewriter_3: "LPG ni mɔi heɔ amɔhe kɛjɛ 2005.",
      testimonials_kicker: "Mɔi Sane",
      gallery_kicker: "Mfonirii",
      gallery_delivery: "Kɔkɔba",
      gallery_forecourt: "Station anim",
      gallery_team: "Wɔn Kuo",
      trust_badge_registered: "Kumpani gbɛi ni wɔtsɛ",
      trust_badge_location: "He ni wɔka amɛŋ",
      trust_badge_sales: "1,599.1 MT LPG shika",
      trust_badge_safety: "Hewale ji nɔ ni feɔ nɔ",
      trust_badge_confirm: "Kwɛ dɛŋ dɛŋ kɛji oyaa shi",
      footer_tagline: "Adidie gas ni mɔi heɔ amɔhe",
      head_office_accra: "Ti nitsumɔ he, Accra",
      whatsapp: "WhatsApp",
      testimonial_previous: "Mɔi sane ni ejie",
      testimonial_next: "Mɔi sane ni eya nɔ",
      testimonial_go_to: "Ya mɔi sane",
      driving_directions: "Gbɛ ni abɔɔ",
      error_subtitle: "Wɔ na krataa lɛ",
      dashboard_title: "Mi Akawnt",
      dashboard_desc: "Kwɛ o orders, profile kɛ delivery ni obaanyɛ nɔ.",
      login_title: "Akwaaba ekome",
      login_desc: "Ya o Triple A Gas account mli nɛ okwɛ o orders kɛ delivery ni obaanyɛ nɔ.",
      register_title: "Bɔ o account",
      register_desc: "Ŋmaa o gbɛi akɛ ordering lɛ abaanyɛ akɛ efee nɛ okwɛ o order history kɛ delivery ni obaanyɛ nɔ.",
      email_address: "Email address",
      password: "Hewale sane",
      sign_in: "Ya mli",
      create_account: "Bɔ Account",
      no_account: "O bɛ account? Ŋmaa o gbɛi",
      have_account: "Oye account? Ya mli",
      invalid_login: "Email loo hewale sane lɛ sa.",
      connection_error: "Nitsumɔ kɛ net lɛ efee. Baa sɔ ekoŋŋ.",
    },
  },

  t(key) {
    const lang = this.currentLang;
    const tr = { ...this.extraTranslations[lang], ...this.translations[lang] };
    if (tr && tr[key]) return tr[key];
    // Keep a selected local language fully local instead of mixing English
    // strings into the page when a key has not been translated yet.
    if (lang !== "en") return "";
    if (this.translations.en && this.translations.en[key])
      return this.translations.en[key];
    if (this.extraTranslations.en[key]) return this.extraTranslations.en[key];
    return key;
  },

  translateStaticText() {
    if (this.currentLang === "en") return;

    const source = { ...this.extraTranslations.en, ...this.translations.en };
    const target = {
      ...this.extraTranslations[this.currentLang],
      ...this.translations[this.currentLang],
    };
    const textToTranslation = new Map();

    Object.entries(source).forEach(([key, value]) => {
      if (!target[key] || typeof value !== "string") return;
      textToTranslation.set(value.replace(/\s+/g, " ").trim(), target[key]);
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      const parent = node.parentElement;
      if (!parent || parent.closest("script, style, noscript, svg")) return;
      if (parent.closest("[data-i18n]")) return;

      const normalized = node.textContent.replace(/\s+/g, " ").trim();
      const translation = textToTranslation.get(normalized);
      if (translation) node.textContent = ` ${translation} `;
    });
  },

  _buildSwitcher() {
    const sw = document.createElement("div");
    sw.id = "lang-switcher";
    sw.className = "lang-switcher";
    sw.innerHTML = `
      <button class="lang-btn ${this.currentLang === "en" ? "active" : ""}" data-lang="en" aria-label="English">EN</button>
      <button class="lang-btn ${this.currentLang === "tw" ? "active" : ""}" data-lang="tw" aria-label="Twi">TW</button>
      <button class="lang-btn ${this.currentLang === "ga" ? "active" : ""}" data-lang="ga" aria-label="Ga">GA</button>
    `;
    sw.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.selectLang(btn.dataset.lang);
      });
    });
    return sw;
  },

  _injectSwitcher() {
    // Remove old switcher if any
    const old = document.getElementById("lang-switcher");
    if (old) old.remove();
    // Find topbar-right and insert at the beginning
    const topbarRight = document.querySelector(".topbar-right");
    if (topbarRight) {
      const sw = this._buildSwitcher();
      topbarRight.insertBefore(sw, topbarRight.firstChild);
    }
  },

  selectLang(lang) {
    if (!this.translations[lang] || lang === this.currentLang) return;
    localStorage.setItem("triplea-lang", lang);
    // Start from the page's source markup on every language change. This
    // prevents a translated text node from becoming the source for the next
    // selection and keeps dynamic pages (blog and account) in sync as well.
    window.location.reload();
  },

  setLang(lang) {
    if (!this.translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem("triplea-lang", lang);
    document.documentElement.setAttribute(
      "lang",
      lang === "tw" ? "tw" : lang === "ga" ? "gaa" : "en",
    );
    // Re-render dynamic header/footer (which use __() for translations)
    if (window.renderHeader) {
      window.renderHeader();
    }
    if (window.renderFooter) window.renderFooter();
    // Re-inject the language switcher (renderHeader destroys it)
    this._injectSwitcher();
    // Update all [data-i18n] elements
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.dataset.i18n;
      // FAQ controls contain a nested plus icon. Replace only their text node
      // so the icon and its open/close animation remain intact.
      if (el.classList.contains("faq-question")) {
        const textNode = Array.from(el.childNodes).find(
          (node) =>
            node.nodeType === Node.TEXT_NODE && node.textContent.trim(),
        );
        if (textNode) textNode.textContent = `${this.t(key)} `;
      } else {
        el.textContent = this.t(key);
      }
    });
    // Update input placeholders
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.dataset.i18nPlaceholder;
      el.placeholder = this.t(key);
    });
    this.translateStaticText();
    // Re-init interactive elements after re-render
    if (window.initThemeToggle) window.initThemeToggle();
    if (window.initMobileDrawer) window.initMobileDrawer();
    if (window.initButtonRipples) window.initButtonRipples();
    // Re-init compare modal if present
    if (typeof openCompareModal !== "undefined") {
      // Re-init the compare modal table with translated text
      const modal = document.getElementById("compare-modal");
      if (modal) {
        modal.querySelectorAll("[data-i18n]").forEach((el) => {
          const key = el.dataset.i18n;
          el.textContent = this.t(key);
        });
      }
    }
  },

  init() {
    // Expose global __() function for main.js to use in header/footer
    window.__ = (key) => this.t(key);
    // Restore saved language
    this.setLang(this.currentLang);

    // Build language switcher UI
    const existing = document.getElementById("lang-switcher");
    if (!existing) {
      const topbarRight = document.querySelector(".topbar-right");
      if (topbarRight) {
        const sw = document.createElement("div");
        sw.id = "lang-switcher";
        sw.className = "lang-switcher";
        sw.innerHTML = `
          <button class="lang-btn active" data-lang="en" aria-label="English">EN</button>
          <button class="lang-btn" data-lang="tw" aria-label="Twi">TW</button>
          <button class="lang-btn" data-lang="ga" aria-label="Ga">GA</button>
        `;
        topbarRight.insertBefore(sw, topbarRight.firstChild);

        sw.querySelectorAll(".lang-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            sw.querySelectorAll(".lang-btn").forEach((b) =>
              b.classList.remove("active"),
            );
            btn.classList.add("active");
            this.selectLang(btn.dataset.lang);
          });
        });

        // Mark active
        sw.querySelectorAll(".lang-btn").forEach((btn) => {
          if (btn.dataset.lang === this.currentLang) {
            btn.classList.add("active");
          } else {
            btn.classList.remove("active");
          }
        });
      }
    }
  },
};
