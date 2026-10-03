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
    facebook: "https://www.facebook.com/hashir.ch.399",
    instagram: "https://www.instagram.com/hashir.ch296/",
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
      period: "Jul 2026 – Sep 2026",
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
      group: "client",
      ctaLabel: "Visit client site",
      description:
        "Live client website for an international telehealth company — everyion.com is in production and indexed on Google. I built and shipped clinical-service UI and an admin dashboard so teams can manage appointments, service catalogs, and daily operations from one place — with a clean, responsive experience for staff and patients.",
      highlights: [
        "Client’s live site (everyion.com) — indexed on Google",
        "Clinical frontend + admin operations dashboard",
        "Next.js UI with PHP/MySQL backend services",
      ],
      seoDescription:
        "Every Ion telehealth web application by M Hashir Hameed — live client site at everyion.com. Next.js, PHP, MySQL, Tailwind CSS. Production clinical services and admin dashboard for international healthcare clients.",
      stack: ["PHP", "MySQL", "Next.js", "Tailwind"],
      image: "/projects/Everyion.webp",
    },
    {
      title: "FinGuard",
      url: "https://fmafd.vercel.app",
      group: "built",
      description:
        "Corporate finance desk with a fraud-risk engine beside the books. Role-based staff (owners, accountants, fraud analysts) share one MongoDB ledger covering invoices, budgets, AP/AR, vendors, claims, and investigations — plus a dedicated fraud-detection and AI-insights workspace. Built as a live MERN product (FinGuard).",
      highlights: [
        "Live finance + fraud detection platform (fmafd.vercel.app)",
        "Invoices, budgets, AP/AR, vendors, claims, and investigations",
        "Role-based JWT access for owners, accountants, and fraud analysts",
      ],
      seoDescription:
        "FinGuard by M Hashir Hameed — MERN finance management and fraud detection desk with role-based access, invoices, budgets, AP/AR, and AI insights.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "/projects/FMAFD.png",
    },
    {
      title: "Nexora ERP",
      url: "https://nexora-erp-blush.vercel.app/login",
      group: "built",
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
      title: "VoiceForge",
      url: "https://voiceover-drab.vercel.app/",
      description:
        "Studio-grade AI voice-over web app on the MERN stack. Write a script, pick from 40+ neural voices, generate audio, mix music on a timeline, and sync voice-over to video — then export. AI also drafts ads, YouTube narration, and podcast intros before sending them to TTS.",
      highlights: [
        "40+ neural voices across English, Urdu, Hindi, Arabic, and more",
        "In-browser timeline editor: trim, fade, mix music, remove silence",
        "Video voice-over plus AI script generation with credit-based usage",
      ],
      seoDescription:
        "VoiceForge by M Hashir Hameed — AI voice-over studio on the MERN stack with neural TTS, timeline editing, video sync, and AI script generation.",
      stack: ["MongoDB", "Express", "React", "Node.js", "AI"],
      image: "/projects/VoiceForge.png",
    },
    {
      title: "Lumen",
      url: "https://lumen-sandy-kappa.vercel.app/login",
      description:
        "ChatGPT-style AI assistant built on the MERN stack. Unlimited conversations with your preferred model, long-term memory that follows the account across devices, plus vision and voice — image understanding, generation, and spoken interaction kept private to the user.",
      highlights: [
        "Multi-model chat with account-scoped privacy",
        "Long-term memory that stays with you on every device",
        "Image understanding & generation, plus voice",
      ],
      seoDescription:
        "Lumen by M Hashir Hameed — ChatGPT-like MERN AI assistant with long-term memory, vision, voice, and private multi-model conversations.",
      stack: ["MongoDB", "Express", "React", "Node.js", "AI"],
      image: "/projects/Lumen.png",
    },
    {
      title: "Dribbble",
      url: "https://dribbble-swart.vercel.app",
      description:
        "Full-stack Dribbble-style design community on the MERN stack. Designers can register, upload shots, like and follow, search work, and manage a dashboard — with JWT auth, MongoDB models, and a React/Vite frontend that covers shots, profiles, messages, and hiring pages.",
      highlights: [
        "Shot feed, upload, likes, follows, and designer profiles",
        "JWT authentication with Express + MongoDB APIs",
        "Live on Vercel — dribbble-swart.vercel.app",
      ],
      seoDescription:
        "Dribbble clone by M Hashir Hameed — MERN design community with shot uploads, likes, follows, JWT auth, and a React/Vite frontend.",
      stack: ["MongoDB", "Express", "React", "Node.js", "JWT"],
      image: "/projects/Dribbble.png",
    },
    {
      title: "Onyx",
      url: "https://github.com/Hashir296/onyx",
      group: "oss",
      ctaLabel: "View open-source work",
      description:
        "Open-source contribution to Onyx (onyx-dot-app/onyx) — a self-hosted AI chat platform with RAG, connectors, and multi-LLM support. I worked in the Python codebase on the GitHub connector, adding indexing for pull-request and issue discussion comments so those threads are searchable in chat.",
      highlights: [
        "Open-source contribution to Onyx (Python + Next.js AI platform)",
        "GitHub connector: index PR and issue discussion comments",
        "RAG / AI chat with team knowledge from connected apps",
      ],
      seoDescription:
        "Onyx open-source contribution by M Hashir Hameed — GitHub connector work indexing PR and issue discussion comments on the Onyx AI chat and RAG platform.",
      stack: ["Python", "Next.js", "RAG", "Open Source"],
      image: "/projects/Onyx.png",
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
      "FinGuard finance fraud detection",
      "VoiceForge AI voice over",
      "Lumen AI assistant",
      "Dribbble MERN clone",
      "Onyx open source contribution",
      "AlphaNUIX Technologies",
      "Softelio intern",
      "Air University Islamabad CS",
      "hire junior MERN developer Pakistan",
    ],
  },
};

export type Profile = typeof profile;
