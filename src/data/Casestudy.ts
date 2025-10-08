type CaseStudyType = {
  imageUrl: string;
  quote: string;
  author: string;
  role: string;
  title: string;
  slug: string;   
  description: string;
  buttonText: string;
  overview: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  technologies: string[];
  gallery: string[];
  locked? : boolean
   mobileImg? : string;
   services? : string[]
   bggridiant? : string
  
};

export const caseStudies: CaseStudyType[] = [
{
  imageUrl: "/images/casestudy1.png",
  quote: "More bookings. Less hassle. The site does its job perfectly and looks great doing it.",
  author: "Samantha R.",
  role: "CEO",
  locked: false,
  bggridiant: "from-[#FFFEFB] to-[#FFE3A6]",
  title: "Truck Booking App",
  slug: "lustra",
  description: "I designed BookMyTruck, a mobile app that makes truck booking and delivery tracking simple and hassle-free.",
  buttonText: "Read More",
  overview: "Lustra is a premium booking platform that needed a sleek UX to increase conversions.",
  challenges: [
    "Complicated booking process frustrated users.",
    "Mobile responsiveness was poor.",
    "Outdated brand visuals didn’t reflect quality."
  ],
  solutions: [
    "Redesigned booking flow with fewer steps.",
    "Implemented mobile-first responsive layouts.",
    "Introduced a modern, clean visual identity."
  ],
  results: [
    "Booking completion rate improved by 55%.",
    "Mobile traffic increased by 70%.",
    "Brand trust strengthened significantly."
  ],
  technologies: ["React", "Next.js", "TailwindCSS"],
  gallery: ["/images/lake.jpg", "/images/forest.jpg"],

  // 🆕 Added Section
  services: [
    "UX Research",
    "App Design",
    "Web Design",
    "Mockups",
    "Admin Portal",
    "Prototyping",
    "Testing",
    "Wireframe",
    "Visual Design"
  ],
},
{
  imageUrl: "/images/casestudy2.png",
  quote: "We saw a 2x increase in conversions after launch. Seriously impressive work.",
  author: "James P.",
  role: "Product Manager",
  locked: true,
  bggridiant: "from-[#C4F2C6] to-[#F0F0F0]",
  title: "Real Estate System",
  slug: "poppy-store",
  description:
    "I designed the app, website, and admin portal for Qarya to provide a seamless community management experience.",
  buttonText: "See Project",
  overview:
    "Qarya is an online fashion retailer that wanted a modern eCommerce experience.",
  challenges: [
    "Checkout process had high abandonment rate.",
    "Slow product page loading.",
    "Cluttered product navigation."
  ],
  solutions: [
    "Streamlined checkout with fewer clicks.",
    "Implemented image optimization for fast load.",
    "Designed a clean mega-menu for navigation."
  ],
  results: [
    "Conversions doubled within 3 months.",
    "Page load speed improved by 45%.",
    "User satisfaction increased with intuitive flow."
  ],
  technologies: ["React", "Redux", "Node.js", "Stripe"],
  gallery: ["/images/mountain.jpg", "/images/sunset.jpg"],

  // 🆕 Added Services Section
  services: [
    "UX Research",
    "App Design",
    "Collaboration",
    "Admin Portal",
    "Prototyping",
    "Testing",
    "Wireframe",
    "Visual Design"
  ],
},
{
  imageUrl: "/images/casestudy3.png",
  quote: "The brand feels alive now. Everything aligns beautifully from UX to visuals.",
  author: "Maria G.",
  role: "Founder",
  locked: true,
  bggridiant: "from-[#F0F6FF] to-[#FAFCFF]",
  title: "Subscription Based Delivery System",
  slug: "vista-landscapes",
  description:
    "I designed the Uber Sheets app and admin management system, a subscription-based service delivering premium linens and five-star bedding to homes every week.",
  buttonText: "Explore",
  overview: "Vista Landscapes wanted a brand refresh with a strong digital presence.",
  challenges: [
    "Website felt outdated.",
    "Difficult to showcase portfolio projects.",
    "Users struggled to contact company."
  ],
  solutions: [
    "Created immersive visuals with large imagery.",
    "Introduced portfolio showcase with filters.",
    "Added simplified contact forms."
  ],
  results: [
    "Brand recognition improved online.",
    "Leads grew by 30% in first quarter.",
    "Customer engagement doubled."
  ],
  technologies: ["Next.js", "Tailwind", "Framer Motion"],
  gallery: ["/images/coffee.jpg", "/images/cityscape.jpg"],

  // 🆕 Added Services Section
  services: [
    "UX Research",
    "Web App",
    "Design System",
    "User Flow",
    "Responsive Design",
    "Testing",
    "Journey Mapping",
    "Visual Design"
  ],
},
{
  imageUrl: "/images/casestudy4.png",
  quote: "Navigation is seamless. It finally feels like a premium digital product.",
  author: "Elijah K.",
  role: "CTO",
  locked: true,
  bggridiant: "from-[#D3D3D3] to-[#ECECEC]",
  title: "Crypto Exchange Web Application",
  slug: "shell-technologies",
  description:
    "Designed AhomCX web application — a crypto exchange (CEX) platform built for secure and seamless digital trading.",
  buttonText: "Discover More",
  overview: "Shell Technologies builds enterprise SaaS tools and needed a premium web experience.",
  challenges: [
    "Complex navigation overwhelmed users.",
    "Product explanations were unclear.",
    "Poor scalability for content growth."
  ],
  solutions: [
    "Redesigned navigation for clarity.",
    "Added interactive product explainers.",
    "Created modular layout for scale."
  ],
  results: [
    "User retention increased by 35%.",
    "Bounce rate decreased significantly.",
    "Sales demos requests rose by 40%."
  ],
  technologies: ["React", "TypeScript", "Next.js"],
  gallery: ["/images/lake.jpg", "/images/forest.jpg"],

  services: [
    "UX Research",
    "App Design",
    "Prototyping",
    "Testing",
    "Wireframe",
    "Visual Design"
  ],
},
];
