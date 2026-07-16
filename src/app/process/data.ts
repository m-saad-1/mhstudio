import { type LucideIcon } from "lucide-react";

export const corePhases = [
  {
    step: "01",
    title: "Discovery & Strategy",
    tagline: "Understand before building.",
    description: "We begin by learning about your business, users, challenges, and goals. This stage ensures every technical decision aligns with your objectives.",
    activities: ["Business consultation", "Requirement gathering", "Competitor research", "Technical feasibility", "Project roadmap", "Timeline estimation"],
    icon: "search"
  },
  {
    step: "02",
    title: "Planning & Architecture",
    tagline: "Building the blueprint.",
    description: "Before writing code, we define the system architecture, user flows, database design, API structure, and project milestones.",
    activities: ["User flows", "Wireframes", "Technical architecture", "Database schema", "Feature roadmap", "Project planning"],
    icon: "layers"
  },
  {
    step: "03",
    title: "Design",
    tagline: "Design with purpose.",
    description: "We create intuitive interfaces focused on usability, accessibility, and conversion while ensuring consistency across every screen.",
    activities: ["UI/UX Design", "Responsive layouts", "Design system", "Prototypes", "Client feedback"],
    icon: "palette"
  },
  {
    step: "04",
    title: "Development",
    tagline: "Where ideas become products.",
    description: "Using modern technologies, we develop scalable, maintainable applications with clean architecture and production-ready standards.",
    activities: ["Frontend development", "Backend APIs", "Database integration", "Authentication", "AI integration", "Third-party APIs"],
    icon: "code-xml"
  },
  {
    step: "05",
    title: "Testing & Optimization",
    tagline: "Quality comes first.",
    description: "Every project is thoroughly tested across devices and browsers to ensure reliability, performance, and security before launch.",
    activities: ["Functional testing", "Performance optimization", "Bug fixing", "Accessibility review", "Security checks"],
    icon: "shield-check"
  },
  {
    step: "06",
    title: "Launch & Growth",
    tagline: "Launch is only the beginning.",
    description: "After deployment, we continue monitoring, improving, and supporting your product as your business evolves.",
    activities: ["Deployment", "Domain configuration", "Analytics", "Monitoring", "Training", "Ongoing support"],
    icon: "rocket"
  }
];

export const developmentPaths = [
  {
    title: "Web Development",
    description: "Ideal for Local businesses, Restaurants, Clinics, Salons, Agencies, and Professional services.",
    timeline: "2–6 weeks",
    steps: ["Discovery", "Design", "Development", "Testing", "Launch"],
  },
  {
    title: "MVP Development",
    description: "Perfect for startups validating an idea. We focus on launching quickly, gathering feedback, and improving based on real users.",
    steps: ["Idea Validation", "Feature Prioritization", "Rapid MVP Design", "Development", "User Testing", "Iteration", "Production Scaling"],
  },
  {
    title: "SaaS Development",
    description: "A more structured process focusing on scalability, security, and maintainability for software products.",
    steps: ["Discovery", "Architecture", "Authentication", "Core Features", "Billing", "Admin Dashboard", "Testing", "Production Deployment", "Continuous Improvements"],
  },
  {
    title: "AI Solutions & Automation",
    description: "Custom workflows for AI Chatbots, Assistants, Agents, and Business Automation.",
    steps: ["Business Analysis", "Workflow Discovery", "AI Strategy", "Prompt Engineering", "LLM Integration", "Automation Design", "Testing", "Deployment", "Optimization"],
  },
  {
    title: "Custom Software Development",
    description: "Every business has unique requirements. We build bespoke solutions tailored to your operational needs.",
    steps: ["Requirements", "Architecture", "Design", "Development", "Integration", "Testing", "Deployment", "Long-Term Support"],
  }
];

export const clientInvolvement = [
  {
    title: "Weekly Progress Updates",
    description: "Regular updates keep you informed throughout development.",
    icon: "calendar",
  },
  {
    title: "Client Feedback",
    description: "Key milestones are reviewed together before moving forward.",
    icon: "message-square-quote",
  },
  {
    title: "Transparent Communication",
    description: "No hidden progress or unexpected surprises.",
    icon: "refresh-cw",
  },
  {
    title: "Flexible Iteration",
    description: "Small adjustments are welcomed during development.",
    icon: "git-merge",
  }
];

export const qualityAssurance = [
  { title: "Performance Optimization", icon: "zap" },
  { title: "Responsive Testing", icon: "monitor-smartphone" },
  { title: "Security Review", icon: "shield-check" },
  { title: "Accessibility", icon: "search-check" },
  { title: "SEO Validation", icon: "search" },
  { title: "Cross-Browser Testing", icon: "app-window" },
  { title: "Code Quality", icon: "code-xml" },
  { title: "Production Readiness", icon: "server-cog" }
];

export const processFaqs = [
  {
    question: "How long does a project usually take?",
    answer: "Timelines vary depending on scope. Marketing websites typically take 2-6 weeks, while MVPs and SaaS platforms can take 4-12 weeks."
  },
  {
    question: "Can requirements change during development?",
    answer: "Yes, we use an agile approach. While major architecture changes might affect timeline and budget, we welcome small adjustments and flexible iterations."
  },
  {
    question: "Will I receive progress updates?",
    answer: "Absolutely. We provide weekly progress updates and review key milestones with you to ensure alignment throughout the project."
  },
  {
    question: "Who owns the source code?",
    answer: "Upon full payment, you own 100% of the source code and intellectual property for your custom project."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer ongoing maintenance, monitoring, and support to keep your product secure and scalable after launch."
  },
  {
    question: "Can you improve an existing product instead of rebuilding it?",
    answer: "Yes, we often help clients modernize legacy applications, improve performance, or integrate new AI features into existing codebases."
  },
  {
    question: "How do AI projects differ from traditional web development?",
    answer: "AI projects involve heavy discovery around data, workflows, and prompt engineering before development, often requiring more iterative testing to ensure the AI responds accurately."
  }
];

export const techTimeline = [
  { stage: "Planning", tech: "Figma, Notion", icon: "palette" },
  { stage: "Frontend", tech: "React, Next.js, Tailwind", icon: "monitor" },
  { stage: "Backend", tech: "Node.js, Supabase", icon: "server-cog" },
  { stage: "Database", tech: "PostgreSQL, MongoDB", icon: "database" },
  { stage: "AI", tech: "OpenAI, Claude, Python", icon: "brain" },
  { stage: "Deployment", tech: "Vercel, Cloudflare, AWS", icon: "cloud" }
];
