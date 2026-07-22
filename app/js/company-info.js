// Centralized Triple A Gas Company Information
window.COMPANY_INFO = {
  name: "Triple A Gas",
  established: 2005,
  colors: {
    primary: "#722F37", // wine red
    secondary: "#FFFFFF" // white
  },
  hq: "Accra, Ghana",
  description: "Leading gas supplier serving homes, businesses, and taxis across Ghana since 2005.",
  
  // Locations (5 branches)
  locations: [
    {
      id: 1,
      city: "Accra",
      type: "Headquarters",
      address: "Accra, Ghana",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Taxi Service", "Retail"],
      coordinates: { lat: 5.6037, lng: -0.1870 } // Central Accra
    },
    {
      id: 2,
      city: "Antoa",
      type: "Branch",
      address: "Antoa, Ghana",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 6.0167, lng: -1.0333 } // Approximate
    },
    {
      id: 3,
      city: "Bonwire",
      type: "Branch",
      address: "Bonwire, Ghana",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 6.9167, lng: -1.0333 } // Approximate
    },
    {
      id: 4,
      city: "Bogoso",
      type: "Branch",
      address: "Bogoso, Ghana",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.6667, lng: -2.5833 } // Approximate
    },
    {
      id: 5,
      city: "Prestea",
      type: "Branch",
      address: "Prestea, Ghana",
      phone: "+233 24 507 5496",
      services: ["Cylinder Filling", "Retail"],
      coordinates: { lat: 5.45, lng: -2.0833 } // Approximate
    }
  ],
  
  // Leadership Team
  team: [
    {
      name: "Akua Adu Mensah",
      title: "Owner",
      role: "Co-founder"
    },
    {
      name: "Frank Adu Mensah",
      title: "Owner",
      role: "Co-founder"
    },
    {
      name: "Nana Kwame Owusu Boateng",
      title: "Chief Operating Officer (COO)",
      role: "Operations"
    },
    {
      name: "Ama Boakye Waa Boating",
      title: "Secretary",
      role: "Administration"
    }
  ]
};
