export const profile = {
  name: "M Hashir Hameed",
  shortName: "Hashir",
  monogram: "MHH",
  title: "Junior MERN Stack Developer",
  tagline:
    "Building clean, responsive web applications with the MERN stack, Next.js, and PHP.",
  location: "Islamabad, Pakistan",
  email: "hashir.ch296@gmail.com",
  phone: "+92 303 3644692",
  phoneHref: "+923033644692",
  github: "https://github.com/Hashir296",
  githubHandle: "Hashir296",
  portfolio: "https://portfoliohashir.vercel.app/",
  socials: {
    github: "https://github.com/Hashir296",
    linkedin: "https://www.linkedin.com/in/m-hashir-hameed-0ab349325/",
    instagram: "https://www.instagram.com/hashir.ch296/",
    facebook: "https://www.facebook.com/hashir.ch.399",
  },
  summary:
    "Junior MERN Stack Developer with 1+ year of professional experience building and shipping full-stack production applications for international clients. Delivered 10+ projects spanning telehealth, enterprise resource planning, and social platforms using React, Next.js, Node.js, Express, and MongoDB. Comfortable owning a feature end-to-end: designing REST APIs, implementing JWT authentication, and building responsive, production-ready UIs. Currently expanding into AI-integrated features (content moderation, personalization, sentiment analysis) across recent projects.",
  about: [
    "Junior MERN Stack Developer with 1+ year of professional experience building and shipping full-stack production applications for international clients. Delivered 10+ projects spanning telehealth, enterprise resource planning, and social platforms using React, Next.js, Node.js, Express, and MongoDB. Comfortable owning a feature end-to-end: designing REST APIs, implementing JWT authentication, and building responsive, production-ready UIs. Currently expanding into AI-integrated features (content moderation, personalization, sentiment analysis) across recent projects.",
    "Based in Islamabad, I’m completing a BS in Computer Science at Air University while working as a MERN Stack Developer at AlphaNUIX Technologies and as a MERN Stack Developer Intern at Softelio.",
    "I’m open to developer roles and freelance projects.",
  ],
  highlights: [
    { label: "Experience", value: "1+ year" },
    { label: "Projects", value: "10+ shipped" },
    { label: "Focus", value: "MERN + Next.js" },
    { label: "Based in", value: "Islamabad" },
  ],
  skills: {
    Frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
      "Redux Toolkit",
    ],
    Backend: ["Node.js", "Express.js", "PHP", "REST APIs", "JWT Authentication"],
    Database: ["MongoDB", "MySQL", "Mongoose"],
    "Tools & Platforms": [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "MongoDB Compass",
      "Vercel",
      "Render",
      "Figma",
    ],
    "Programming Languages": ["JavaScript", "PHP", "Java", "C++"],
  },
  experience: [
    {
      role: "MERN Stack Developer",
      company: "AlphaNUIX Technologies",
      period: "Jul 2025 – Present",
      type: "On-site → Remote",
      points: [
        "Delivered 5+ live production features for international clients across full-stack MERN and Next.js applications, from requirements to deployment.",
        "Built responsive, reusable UI components with React.js, Next.js, and Tailwind CSS, improving development speed on new pages.",
        "Designed and integrated secure REST APIs with Node.js and Express, handling authentication, business logic, and data validation.",
        "Fixed production bugs, optimized performance, and implemented new features in collaboration with cross-functional teams using Git-based code review.",
      ],
    },
    {
      role: "MERN Stack Developer Intern",
      company: "Softelio",
      period: "Jul 2026 – Present",
      type: "Remote",
      points: [
        "Building and maintaining web applications using the MERN stack alongside senior developers, following Agile practices.",
        "Developing reusable React components and integrating REST APIs with MongoDB-backed services.",
      ],
    },
  ],
  projects: [
    {
      title: "Every Ion",
      url: "https://everyion.com",
      description:
        "Production telehealth platform for international clients. I built and shipped clinical-service UI and an admin dashboard so teams can manage appointments, service catalogs, and daily operations from one place — with a clean, responsive experience for staff and patients.",
      highlights: [
        "Live production telehealth product",
        "Clinical frontend + admin operations dashboard",
        "Next.js UI with PHP/MySQL backend services",
      ],
      seoDescription:
        "Every Ion telehealth web application by M Hashir Hameed — Next.js, PHP, MySQL, Tailwind CSS. Production clinical services and admin dashboard for international healthcare clients.",
      stack: ["PHP", "MySQL", "Next.js", "Tailwind"],
      image: "/projects/Everyion.webp",
    },
    {
      title: "Nexora ERP",
      url: "#",
      description:
        "AI-assisted enterprise resource planning system on the MERN stack. Modules span HR, CRM, payroll, inventory, finance, sales, and project management, with role-based access control and realtime notifications so teams stay aligned across departments.",
      highlights: [
        "Multi-module ERP (HR, CRM, payroll, finance, inventory)",
        "Role-based access control for secure team workflows",
        "Realtime alerts and AI-assisted operations",
      ],
      seoDescription:
        "Nexora ERP by M Hashir Hameed — AI-powered MERN enterprise platform with RBAC, realtime notifications, HR, CRM, payroll, inventory, and finance modules.",
      stack: ["MongoDB", "Express", "React", "Node.js", "AI"],
      image: "/projects/NexoraErp.webp",
    },
    {
      title: "SocialSphere AI",
      url: "https://social-sphere-frontend-peach.vercel.app/login",
      description:
        "Full-stack social networking product with live chat, stories, personalized feeds, AI caption helpers, and moderation tools. Built with MERN, Socket.IO for realtime messaging, JWT authentication, and Cloudinary for media uploads.",
      highlights: [
        "Realtime chat and stories with Socket.IO",
        "AI-assisted captions and feed personalization",
        "JWT auth and Cloudinary media pipeline",
      ],
      seoDescription:
        "SocialSphere AI by M Hashir Hameed — MERN social platform with Socket.IO live chat, stories, AI feed tools, JWT auth, and Cloudinary media.",
      stack: ["MongoDB", "Express", "React", "Node.js", "Socket.IO"],
      image: "/projects/SocialsphereAI.webp",
    },
    {
      title: "Ashford Travel House",
      url: "#",
      description:
        "Luxury travel booking experience with secure JWT login, MongoDB data models, and REST APIs for destinations, packages, and reservations. Focused on a premium booking flow that feels calm, clear, and conversion-ready.",
      highlights: [
        "JWT-secured traveler accounts",
        "REST APIs for packages and reservations",
        "Premium booking UX for luxury travel",
      ],
      seoDescription:
        "Ashford Travel House by M Hashir Hameed — luxury travel booking app with MERN stack, JWT authentication, MongoDB models, and reservation REST APIs.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "/projects/Ashford.webp",
    },
    {
      title: "Personal Finance Analyzer",
      url: "#",
      description:
        "Desktop finance analyzer that studies market volatility and suggests investment directions. Java Swing powers the interface; a C++ backend emphasizes solid object-oriented design and data structures for analysis workflows.",
      highlights: [
        "Java Swing desktop interface",
        "C++ analysis backend with OOP + DSA",
        "Market volatility and investment suggestions",
      ],
      seoDescription:
        "Personal Finance Analyzer by M Hashir Hameed — desktop investment analysis tool using Java Swing and C++ with OOP and data structures.",
      stack: ["Java", "C++", "OOP", "DSA"],
      image: "/projects/OAPFA.webp",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Science",
      school: "Air University Islamabad",
      period: "2023 – Present",
    },
    {
      degree: "FSc Computer Science",
      school: "Govt. College For Boys Layyah",
      period: "2021 – 2023",
    },
  ],
  languages: [{ name: "English", level: "Fluent" }],
  portrait: "/portrait.png",
  cv: "/cv/M-Hashir-Hameed-CV.png",
  cvFileName: "M-Hashir-Hameed-CV.png",
  /** Replace with your footage: public/videos/hero-ambient.mp4 */
  ambientVideo: "/videos/hero-ambient.mp4",
  ambientPoster: "/portrait.png",
  useParticles: true,
  seo: {
    title: "M Hashir Hameed | Junior MERN Stack Developer in Islamabad",
    description:
      "Junior MERN Stack Developer with 1+ year experience shipping 10+ full-stack projects for international clients — telehealth, ERP, and social platforms with React, Next.js, Node.js, Express, and MongoDB. Hire M Hashir Hameed in Islamabad, Pakistan.",
    keywords: [
      "M Hashir Hameed",
      "Hashir Hameed portfolio",
      "Junior MERN Stack Developer",
      "MERN developer Islamabad",
      "React Next.js developer Pakistan",
      "Node.js Express MongoDB developer",
      "full-stack developer for international clients",
      "telehealth web developer",
      "ERP MERN stack developer",
      "JWT authentication REST API developer",
      "AI content moderation personalization",
      "Every Ion telehealth",
      "AlphaNUIX Technologies",
      "Softelio intern",
      "Air University Islamabad CS",
      "hire junior MERN developer Pakistan",
    ],
  },
};

export type Profile = typeof profile;
