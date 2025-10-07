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
  locked? : true
   mobileImg? : string;
   bggridiant? : string
};

export const caseStudies: CaseStudyType[] = [
  {
    imageUrl: "/images/casestudy1.png",
    quote: "More bookings. Less hassle. The site does its job perfectly and looks great doing it.",
    author: "Samantha R.",
    role: "CEO",
     locked : true,
     bggridiant : 'from-[#FFFEFB] to-[#FFE3A6]',
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
  },
  {
 imageUrl: "/images/casestudy2.png",
    quote: "We saw a 2x increase in conversions after launch. Seriously impressive work.",
    author: "James P.",
    bggridiant : 'from-[#C4F2C6] to-[#F0F0F0]',
    role: "Product Manager",
     locked : true,
    title: "Real Estate System",
    slug: "poppy-store",
    description: "I designed the app, website, and admin portal for Qarya to provide a seamless community management experience.",
    buttonText: "See Project",
    overview: "Qarya is an online fashion retailer that wanted a modern eCommerce experience.",
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
  },
  {
    imageUrl: "/images/casestudy3.png",
    quote: "The brand feels alive now. Everything aligns beautifully from UX to visuals.",
    author: "Maria G.",
       bggridiant: "from-[#F0F6FF] to-[#FAFCFF]",
    role: "Founder",
    title: "Subscription Based Delivery System",
    slug: "vista-landscapes",
    description: "I designed the Uber Sheets app and admin management system, a subscription-based service delivering premium linens and five-star bedding to homes every week.",
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
  },
  {
    imageUrl: "/images/casestudy4.png",
    quote: "Navigation is seamless. It finally feels like a premium digital product.",
    author: "Elijah K.",
    bggridiant : 'from-[#D3D3D3] to-[#ECECEC]',
    role: "CTO",
    title: "Crypto Exchange Web Application",
    slug: "shell-technologies",
    description: "Designed AhomCX web application — a crypto exchange (CEX) platform built for secure and seamless digital trading.",
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
  },
  {
    imageUrl: "/images/brewlab.jpg",
    quote: "The site’s warmth and charm brought our brand story to life like never before.",
    author: "Nina T.",
    role: "Marketing Lead",
    title: "BrewLab Coffee",
    slug: "brewlab-coffee",
    description: "A cozy, inviting platform that brews up great customer engagement.",
    buttonText: "Learn More",
    overview: "BrewLab Coffee needed a warm and engaging online shop for specialty coffee.",
    challenges: [
      "Site didn’t reflect cozy brand story.",
      "Users struggled to find products.",
      "Checkout wasn’t optimized."
    ],
    solutions: [
      "Designed cozy, earthy UI with illustrations.",
      "Simplified product categories.",
      "Integrated one-click checkout."
    ],
    results: [
      "Customer loyalty improved.",
      "Monthly sales up by 25%.",
      "Brand story resonated with new users."
    ],
    technologies: ["Next.js", "TailwindCSS", "Stripe"],
    gallery: ["/images/eagle.jpg", "/images/landscape.jpg"],
  },
  {
    imageUrl: "/images/edusphere.jpg",
    quote: "Our students finally love using the portal. It's simple and engaging.",
    author: "David L.",
    role: "Education Director",
    title: "EduSphere",
    slug: "edusphere",
    description: "An intuitive student portal designed for accessibility and engagement.",
    buttonText: "View Case",
    overview: "EduSphere is a digital education portal that needed an engaging, accessible UX for students of all ages.",
    challenges: [
      "Portal felt outdated and hard to navigate.",
      "Accessibility for visually impaired students was lacking.",
      "Engagement rates were dropping."
    ],
    solutions: [
      "Redesigned UI with modern, clean design.",
      "Added accessibility features like screen reader support.",
      "Introduced gamified progress tracking."
    ],
    results: [
      "Daily logins increased by 65%.",
      "Accessibility compliance improved to WCAG 2.1 AA.",
      "Student engagement doubled."
    ],
    technologies: ["React", "Next.js", "TailwindCSS", "Firebase"],
    gallery: ["/images/students.jpg", "/images/campus.jpg"],
  },
  {
    imageUrl: "/images/dineeasy.jpg",
    quote: "Customers love the new design. Reservations have never been easier.",
    author: "Olivia F.",
    role: "Restaurant Owner",
    title: "DineEasy",
    slug: "dineeasy",
    description: "A modern restaurant booking experience with warm, welcoming design.",
    buttonText: "See Case Study",
    overview: "DineEasy needed a clean and responsive restaurant booking system with a strong focus on mobile UX.",
    challenges: [
      "Old booking system was slow and confusing.",
      "Mobile users had trouble reserving tables.",
      "Brand identity wasn’t reflected online."
    ],
    solutions: [
      "Built streamlined booking process with calendar view.",
      "Mobile-first responsive design.",
      "Introduced elegant food photography and visuals."
    ],
    results: [
      "Bookings increased by 50%.",
      "Mobile conversion rate improved by 80%.",
      "Brand identity felt consistent and premium."
    ],
    technologies: ["React", "TailwindCSS", "Node.js"],
    gallery: ["/images/dining.jpg", "/images/chef.jpg"],
  },
  {
    imageUrl: "/images/mediconnect.jpg",
    quote: "The app feels trustworthy and professional, which is vital in healthcare.",
    author: "Dr. Anwar H.",
    role: "Medical Director",
    title: "MediConnect",
    slug: "mediconnect",
    description: "A secure and user-friendly healthcare platform connecting patients and doctors.",
    buttonText: "Read Full Story",
    overview: "MediConnect wanted a reliable platform for patients to book appointments and manage health records easily.",
    challenges: [
      "Complicated medical jargon confused users.",
      "Appointment booking was unreliable.",
      "User trust was low due to poor UI."
    ],
    solutions: [
      "Simplified language and clear icons.",
      "Built a robust appointment system with reminders.",
      "Used professional, clean healthcare UI design."
    ],
    results: [
      "Patient bookings grew by 70%.",
      "Trust levels improved based on user surveys.",
      "Healthcare professionals found platform easier to use."
    ],
    technologies: ["Next.js", "MongoDB", "TailwindCSS"],
    gallery: ["/images/doctor.jpg", "/images/hospital.jpg"],
  },
  {
    imageUrl: "/images/globetrek.jpg",
    quote: "Travel planning is now stress-free. The design makes it effortless.",
    author: "Kevin S.",
    role: "Founder",
    title: "GlobeTrek",
    slug: "globetrek",
    description: "An inspiring travel booking platform designed with wanderlust in mind.",
    buttonText: "Explore Project",
    overview: "GlobeTrek needed a platform that would inspire users while making travel bookings easy and fun.",
    challenges: [
      "Cluttered UI overwhelmed users.",
      "Booking flow wasn’t intuitive.",
      "Site lacked emotional connection."
    ],
    solutions: [
      "Redesigned with clean layouts and inspiring imagery.",
      "Streamlined booking process with fewer clicks.",
      "Integrated storytelling through visuals."
    ],
    results: [
      "User satisfaction increased by 40%.",
      "Bookings rose by 55% within 6 months.",
      "Engagement with destination guides doubled."
    ],
    technologies: ["React", "Next.js", "Framer Motion"],
    gallery: ["/images/mountain.jpg", "/images/beach.jpg"],
  },
  {
    imageUrl: "/images/finova.jpg",
    quote: "Investors finally feel at ease navigating our product. Confidence is at an all-time high.",
    author: "Sophia W.",
    role: "CFO",
    title: "Finova",
    slug: "finova",
    description: "A modern financial dashboard designed for clarity, security, and trust.",
    buttonText: "Case Study",
    overview: "Finova needed a secure and elegant dashboard for users to track investments with ease.",
    challenges: [
      "Data was overwhelming to non-experts.",
      "Dashboard felt outdated.",
      "Security concerns eroded trust."
    ],
    solutions: [
      "Created simple, interactive data visualizations.",
      "Redesigned UI with modern financial branding.",
      "Implemented clear trust signals and security cues."
    ],
    results: [
      "User retention grew by 45%.",
      "Customer trust improved significantly.",
      "App store ratings improved from 3.2 to 4.6."
    ],
    technologies: ["React", "Next.js", "TypeScript", "TailwindCSS"],
    gallery: ["/images/chart.jpg", "/images/money.jpg"],
  },
];
