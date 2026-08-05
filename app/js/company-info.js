// Centralized Triple A Gas Company Information
window.COMPANY_INFO = {
  name: "Triple A Gas Company Limited",
  established: 2005,
  colors: {
    primary: "#5D1020", // wine red
    secondary: "#FFFFFF", // white
  },

  // Official Registration Details
  registration: {
    number: "CA-18,223",
    taxId: "C5647752015",
    status: "IN GOOD STANDING",
  },

  // Official Address (Registered)
  officialAddress: "Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra",
  hq: "Accra, Ghana",
  description:
    "Oil Marketing Company specialising in Liquified Petroleum Gas (LPG) for homes, businesses, and taxis across Ghana since 2005.",

  // Contact Information
  contacts: {
    primaryPhone: "+233 24 507 5496",
    alternatePhone: "+233 24 401 1050",
    email: "tripleagascompany@yahoo.com",
  },

  // Official Contact Person
  contactPerson: {
    name: "Francis Adu Mensah",
    title: "Representative",
  },

  // Locations (7 retail outlets)
  locations: [
    {
      id: 1,
      city: "Agbogba",
      district: "Agbogba",
      region: "Greater Accra",
      type: "Headquarters",
      address: "Flowers Haatso, Agbogba Road, P.O. Box WJ 486, Weija-Accra",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Taxi Service", "Retail"],
      coordinates: { lat: 5.6037, lng: -0.187 },
      directions:
        "From the Accra Mall junction on the Tetteh Quarshie Interchange, drive north along the N4 towards Aburi. Take the right turn at the Peduase junction onto the Agbogba road. Continue straight for about 3 km, passing the Valley View University campus on your left. The station is on the left, just after the Flowers Haatso signage — look for the Triple A Gas canopy.",
      images: [
        "images/accra/image1.png",
        "images/accra/image2.png",
        "images/accra/image3.png",
        "images/accra/image4.png",
        "images/accra/image5.png",
        "images/accra/image6.png",
      ],
    },
    {
      id: 2,
      city: "Klagon",
      district: "Klagon",
      region: "Greater Accra",
      type: "Branch",
      address: "Klagon, Greater Accra Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.65, lng: -0.05 },
      directions:
        "From the Tema Motorway (George Bush Highway), exit at the Ashaiman junction and head east towards Klagon. Follow the main Klagon road for about 2.5 km. The station is situated on the right-hand side just after the Klagon market area, directly opposite the Shell filling station.",
      directionsI18n: {
        tw: "Fi Tema Motorway (George Bush Highway) so, fa Ashaiman junction no so na kɔ apuee fam kɔ Klagon. Di Klagon kwan kɛse no akyi bɛyɛ km 2.5. Station no wɔ wo nifa so, wɔ Klagon gua no akyi pɛɛ, Shell filling station no anim pɛɛ.",
        ga: "Fi Tema Motorway (George Bush Highway) lɛ ŋa, tswa wɔ Ashaiman junction nɛ oyaa apuee kɛya Klagon. Di Klagon gbɛ kɛse lɛ akɛya km 2.5. Station lɛ yɛ o nifa ni, Klagon gua lɛ akyi kɛji, Shell filling station lɛ enyɔŋ pɛɛ.",
      },
    },
    {
      id: 3,
      city: "Apam",
      district: "Apam",
      region: "Central",
      type: "Branch",
      address: "Apam, Central Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.2833, lng: -0.7333 },
      directions:
        "Travelling from Accra on the N1 (Cape Coast road), pass through Kasoa and continue for about 40 km to the Apam junction. Turn right into Apam town and follow the main street past the Apam Anglican Church. The station is about 800 m ahead on the left, near the Apam lorry station.",
    },
    {
      id: 4,
      city: "Antoa",
      district: "Kwabre East",
      region: "Ashanti",
      type: "Branch",
      address: "Antoa, Kwabre East District, Ashanti Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 6.0167, lng: -1.0333 },
      directions:
        "From the Kumasi central market area, take the Mampong road (Route R112) heading north. After about 18 km, you will reach the Antoa junction at Kwabre. Turn left at the Antoa signpost and continue for 1.5 km. The gas station is on your right, just after the Antoa Nkwanta community centre.",
    },
    {
      id: 5,
      city: "Bonwire",
      district: "Ejisu",
      region: "Ashanti",
      type: "Branch",
      address: "Bonwire, Ejisu Municipality, Ashanti Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 6.9167, lng: -1.0333 },
      directions:
        "From Kumasi, drive east on the N6 towards Ejisu. At the Ejisu roundabout, take the first exit onto the Bonwire road. Continue for approximately 12 km through the Ejisu municipality. The station is located at the Bonwire town entrance on the left, adjacent to the Bonwire Kente weaving centre. Look for the Triple A Gas blue sign.",
      images: [
        "images/bonwire/IMG-20260722-WA0006.jpg",
        "images/bonwire/IMG-20260722-WA0007.jpg",
        "images/bonwire/IMG-20260722-WA0008.jpg",
        "images/bonwire/IMG-20260722-WA0009.jpg",
      ],
    },
    {
      id: 6,
      city: "Bogoso",
      district: "Prestea-Huni Valley",
      region: "Western",
      type: "Branch",
      address:
        "Bogoso Kokoase, Prestea-Huni Valley Municipality, Western Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.6667, lng: -2.5833 },
      directions:
        "From Takoradi, take the N1 west towards Côte d'Ivoire and pass through Tarkwa. After about 50 km, look for the Bogoso turnoff on your right. Enter Bogoso town and drive towards the Kokoase neighbourhood. The station is about 2 km from the main Bogoso roundabout on the Kokoase road, on the left beside the Bogoso Community Health Centre.",
      images: [
        "images/bogoso/IMG-20260722-WA0000.jpg",
        "images/bogoso/IMG-20260722-WA0001.jpg",
        "images/bogoso/IMG-20260722-WA0002.jpg",
        "images/bogoso/IMG-20260722-WA0003.jpg",
        "images/bogoso/IMG-20260722-WA0004.jpg",
        "images/bogoso/IMG-20260722-WA0005.jpg",
      ],
    },
    {
      id: 7,
      city: "Prestea",
      district: "Prestea-Huni Valley",
      region: "Western",
      type: "Branch",
      address:
        "Prestea Asoampa, Prestea-Huni Valley Municipality, Western Region",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.45, lng: -2.0833 },
      directions:
        "From the Prestea main intersection on the Tarkwa-Asankrangwa road, turn towards the Asoampa neighbourhood. Follow the Asoampa road for about 1.8 km past the Prestea Government Hospital. The Triple A Gas station is on the right just after the Asoampa Evangelical Church, identifiable by the cylinder display at the front.",
    },
  ],

  // Leadership Team
  team: [
    {
      name: "Akua Adu Mensah",
      title: "Owner",
      role: "Co-founder",
    },
    {
      name: "Frank Adu Mensah",
      title: "Owner",
      role: "Co-founder",
    },
    {
      name: "Nana Kwame Owusu Boateng",
      title: "Chief Operating Officer (COO)",
      role: "Operations",
    },
    {
      name: "Ama Boakye Waa Boating",
      title: "Secretary",
      role: "Administration",
    },
    {
      name: "Francis Adu Mensah",
      title: "Representative",
      role: "Business Development",
    },
  ],
};
