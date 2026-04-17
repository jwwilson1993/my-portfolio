import projectOne from "../assets/project-1.png";
import developerPortfolioShot2 from "../assets/project-1(2).png";
import developerPortfolioShot3 from "../assets/project-1(3).png";
import projectTwo from "../assets/project-2.png";
import jobTrackerShot2 from "../assets/project-2(2).png";
import jobTrackerShot3 from "../assets/project-2(3).png";
import jobTrackerShot4 from "../assets/project-2(4).png";
import projectThree from "../assets/project-3.png";
import devDashShot2 from "../assets/project-3(2).png";
import devDashShot3 from "../assets/project-3(3).png";

export const portfolioData = {
  name: "Jake Wilson",
  role: "Front-End Developer",
  status: "Available for freelance work or full-time employment",
  heroTitle: "I Build Responsive Web Apps With Real Functionality",
  heroDescription:
    "I focus on building web apps that look clean, work smoothly, and solve practical problems using modern front-end tools.",

  socialLinks: [
    { label: "GitHub", url: "https://github.com/jwwilson1993" },
    { label: "LinkedIn", url: "#" },
    { label: "Email", url: "mailto:jwwilson.dev@gmail.com" },
  ],

  heroCard: {
    heading: "Jake Wilson",
    intro:
      "I'm a front-end developer focused on building responsive, modern web applications with React, clean UI, and real functionality.",
    skillsHeading: "Core skills",
    skills: [
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "Responsive Design",
      "Git",
      "GitHub",
      "API Integration",
      "Vite",
    ],
  },

  projectsIntro: {
    eyebrow: "Projects",
    heading: "Selected Work",
    description:
      "These are some of the projects I've worked on. More coming soon...",
  },

  projects: [
    {
      id: "developer-portfolio",
      title: "Developer Portfolio Template",
      description:
        "A polished React portfolio template for developers, designers, and freelancers who want a modern online presence without starting from scratch.",
      link: "#",
      details:
        "Built with React and Tailwind CSS, this project focuses on smooth section flow, strong visual hierarchy, and mobile-first responsiveness. It's a great starting point for anyone looking to create a professional portfolio website.",
      tags: ["React", "Responsive", "Portfolio"],
      image: projectOne,
      screenshots: [
        {
          src: projectOne,
          alt: "Developer portfolio template screenshot 1",
          caption: "Hero section and intro layout",
        },
        {
          src: developerPortfolioShot2,
          alt: "Developer portfolio template screenshot 2",
          caption: "Projects grid and card styles",
        },
        {
          src: developerPortfolioShot3,
          alt: "Developer portfolio template screenshot 3",
        },
      ],
    },
    {
      id: "job-tracker-dashboard",
      title: "HireFlow — Job Application Tracker",
      description:
        "A responsive dashboard to track applications, interviews, and offers with search, filters, stats, and charts.",
      link: "https://github.com/jwwilson1993/hireflow",
      details:
        "Built with React and Vite, HireFlow helps you manage your job search in one place: add and edit applications, search and filter by company, role, or status, and see dashboard stats with Recharts visualizations. Data persists in localStorage, with CSV export, dark/light mode, toasts, and confirmation modals for a polished, production-style UI.",
      tags: ["React", "Vite", "Recharts", "LocalStorage"],
      image: projectTwo,
      screenshots: [
        {
          src: projectTwo,
          alt: "HireFlow job tracker dashboard overview",
          caption: "Dashboard with applications and stats",
        },
        {
          src: jobTrackerShot2,
          alt: "HireFlow applications list and filters",
          caption: "Search, filter, and manage applications",
        },
        {
          src: jobTrackerShot3,
          alt: "HireFlow chart or detail view",
        },
        {
          src: jobTrackerShot4,
          alt: "HireFlow additional view",
        },
      ],
    },
    {
      id: "devdash-ai",
      title: "DevDash AI",
      description:
        "A modern developer dashboard that combines live job data, GitHub profile insights, and AI recommendations.",
      link: "https://github.com/jwwilson1993/devdash-ai",
      details:
        "Built with React and Vite, DevDash AI helps developers search remote jobs, analyze GitHub activity, save listings with localStorage, and generate tailored skill and career suggestions through OpenRouter AI. It demonstrates multi-API integration, async data handling, and responsive UI design.",
      tags: ["React", "Vite", "GitHub API", "Remotive API", "OpenRouter"],
      image: projectThree,
      screenshots: [
        {
          src: projectThree,
          alt: "DevDash AI dashboard overview",
          caption: "Unified dashboard with jobs, GitHub insights, and AI panel",
        },
        {
          src: devDashShot2,
          alt: "DevDash AI job search panel",
          caption: "Search remote developer roles and save opportunities",
        },
        {
          src: devDashShot3,
          alt: "DevDash AI GitHub and recommendations view",
        },
      ],
    },
  ],

  about: {
    eyebrow: "About",
    heading: "A Little Bit About Me",
    description:
      "I'm a self-taught front-end developer building responsive web apps that look clean, work smoothly, and solve practical problems. I'm currently looking for a full-time position as a front-end developer. I'm available for freelance work as well.",
  },

  skills: [
    "React + Vite",
    "Responsive Design",
    "Accessibility",
    "JavaScript",
    "HTML/CSS",
    "Git/GitHub",    
  ],

  contact: {
    eyebrow: "Contact",
    heading: "Let’s build something great",
    description:
      "I'm currently looking for a full-time position as a front-end developer. I'm available for freelance work as well. Please feel free to contact me via email or LinkedIn.",
    email: "jwwilson.dev@gmail.com",
    githubLabel: "GitHub",
    githubUrl: "https://github.com/jwwilson1993",
  },

  footerText: "Built with React, Vite, and Tailwind CSS.",
};