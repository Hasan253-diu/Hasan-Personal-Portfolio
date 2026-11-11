/**
 * Projects Data Configuration
 * Add, remove, or modify portfolio projects here.
 * You can categorize projects, specify live links, github repositories, and tags.
 */

export const projectCategories = [
  "All",
  "Web App",
  "Full Stack",
  "Frontend",
  "Software"
];

export const projectsData = [
  {
    id: "hospital-queue-system",
    title: "Hospital Queue System",
    shortDescription: "A queue management system for hospitals.",
    description: "An automated real-time patient queue and token management web application designed to streamline hospital outpatient registration, reduce waiting room congestion, and provide real-time status dashboards for doctors and patients.",
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "Socket.io", "Tailwind CSS", "MongoDB"],
    liveUrl: "https://example.com/hospital-queue",
    githubUrl: "https://github.com/hasanahmed/hospital-queue-system",
    metrics: "Reduced patient waiting times by 40%",
    features: [
      "Real-time token generation and queue tracking via WebSockets",
      "Doctor dashboard for calling and finishing appointments",
      "SMS & on-screen audio notification alerts",
      "Exportable analytics on patient wait times"
    ]
  },
  {
    id: "weather-app",
    title: "Weather App",
    shortDescription: "Real-time weather information using API.",
    description: "A clean, responsive weather forecast dashboard that consumes OpenWeatherMap API to display hyper-local conditions, hourly projections, 7-day extended forecasts, UV index, and interactive humidity radars.",
    category: "Frontend",
    featured: true,
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Tailwind CSS", "OpenWeather API", "Framer Motion", "Chart.js"],
    liveUrl: "https://example.com/weather-app",
    githubUrl: "https://github.com/hasanahmed/weather-app",
    metrics: "Sub-100ms API response caching",
    features: [
      "Automatic geolocation detection & worldwide city search",
      "Dynamic neumorphic weather icons reflecting time & weather conditions",
      "7-day detailed weather cards and temperature graphs",
      "PWA support for offline access"
    ]
  },
  {
    id: "ecommerce-website",
    title: "E-Commerce Website",
    shortDescription: "Modern online shopping platform.",
    description: "A full-featured modern e-commerce storefront with intuitive catalog browsing, instant product search, dynamic filtering, persistent shopping cart, and secure Stripe checkout integration.",
    category: "Full Stack",
    featured: true,
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Express.js", "Stripe API", "Redux Toolkit", "PostgreSQL"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/hasanahmed/ecommerce-platform",
    metrics: "Full payment lifecycle integration",
    features: [
      "Instant fuzzy search and multi-attribute filters",
      "Persistent cart state with Redux Toolkit and LocalStorage",
      "Secure payment checkout with Stripe Webhooks",
      "Admin panel for inventory and sales tracking"
    ]
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    shortDescription: "Modern agile sprint and task management board.",
    description: "An intuitive collaborative project management web app featuring drag-and-drop Kanban boards, team assignment, timeline estimations, and progress burndown metrics.",
    category: "Web App",
    featured: false,
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "Tailwind CSS", "Firebase", "DnD Kit"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/hasanahmed/taskflow-pro",
    metrics: "Drag & drop Kanban board with real-time sync",
    features: [
      "Smooth drag and drop cards with status column transitions",
      "Role-based permissions for members and team leads",
      "Dark and light soft neumorphic theme support",
      "Tag-based searching and filter by assignee"
    ]
  },
  {
    id: "ai-code-reviewer",
    title: "AI Code Reviewer",
    shortDescription: "Intelligent code analysis and refactoring tool.",
    description: "A developer tool designed to analyze JavaScript and Python snippets, detect syntax antipatterns, offer time-complexity estimates, and generate clean refactored suggestions.",
    category: "Software",
    featured: false,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Python", "FastAPI", "OpenAI API", "Monaco Editor"],
    liveUrl: "https://example.com/ai-code-reviewer",
    githubUrl: "https://github.com/hasanahmed/ai-code-reviewer",
    metrics: "Instant syntax tree parsing & recommendations",
    features: [
      "Monaco code editor with syntax highlighting for 10+ languages",
      "One-click time complexity & space complexity breakdown",
      "Automatic suggestions for performance optimization",
      "Code diff viewer comparing original vs suggested code"
    ]
  },
  {
    id: "personal-portfolio-site",
    title: "Soft Neumorphic Portfolio",
    shortDescription: "Personal portfolio with soft UI and bento grid layout.",
    description: "The official personal portfolio website for Hasan Ahmed, engineered using React, Tailwind CSS, Framer Motion, and soft neumorphic elevation principles.",
    category: "Frontend",
    featured: false,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Tailwind CSS", "Framer Motion", "Neumorphism"],
    liveUrl: "#",
    githubUrl: "https://github.com/hasanahmed/personal-portfolio",
    metrics: "100/100 Lighthouse Performance & Accessibility",
    features: [
      "Soft neumorphic dual-shadow aesthetic with fluid dark mode",
      "Data-driven modular architecture for easy maintenance",
      "Interactive CV viewer, certificate modals, and animated skill cards",
      "Fully responsive desktop sidebar and mobile drawer navigation"
    ]
  }
];
