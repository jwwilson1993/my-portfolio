import projectOne from "../assets/project-1.png";
import projectTwo from "../assets/project-2.png";
import projectThree from "../assets/project-3.png";

export const portfolioData = {
  name: "Your Name",
  role: "Front-End Developer",
  status: "Available for freelance work",
  heroTitle: "I build clean, responsive websites that help brands look sharp.",
  heroDescription:
    "A polished React portfolio template for developers, designers, and freelancers who want a modern online presence without starting from scratch.",

  socialLinks: [
    { label: "GitHub", url: "#" },
    { label: "LinkedIn", url: "#" },
    { label: "Email", url: "mailto:hello@example.com" },
  ],

  featuredProject: {
    label: "Featured project",
    title: "Creative Studio Landing Page",
    description:
      "Responsive marketing site with clean sections, strong typography, and clear calls to action.",
  },

  stats: [
    { value: "3+", label: "Highlighted projects" },
    { value: "100%", label: "Mobile responsive" },
  ],

  projectsIntro: {
    eyebrow: "Projects",
    heading: "Selected work",
    description:
      "Swap these cards with your own projects and links. The layout is built to look good fast.",
  },

  projects: [
    {
      id: "developer-portfolio",
      title: "Developer Portfolio",
      description:
        "A personal site template with polished sections and a strong hero.",
      link: "#",
      details:
        "Built with React and Tailwind CSS, this project focuses on smooth section flow, strong visual hierarchy, and mobile-first responsiveness.",
      tags: ["React", "Responsive", "Portfolio"],
      image: projectOne,
    },
    {
      id: "coming-soon",
      title: "coming soon...",
      description:
        "A conversion-focused page for agencies, startups, or freelancers.",
      link: "#",
      details:
        "Designed to drive inquiries with prominent calls to action, concise messaging blocks, and layout patterns optimized for quick scanning.",
      tags: ["Marketing", "UI Design", "Landing Page"],
      image: projectTwo,
    },
    {
      id: "product-showcase",
      title: "Product Showcase",
      description:
        "A stylish presentation page for apps, tools, or digital products.",
      link: "#",
      details:
        "Highlights product features with visual storytelling, reusable card components, and a clear path from overview to feature-level detail.",
      tags: ["Product", "Modern UI", "Showcase"],
      image: projectThree,
    },
  ],

  about: {
    eyebrow: "About",
    heading: "Built to be easy to customize",
    description:
      "This starter template is structured so users can quickly update text, project cards, links, and branding without digging through a messy codebase.",
  },

  skills: [
    "React + Vite",
    "Responsive Layout",
    "Modern UI",
    "Simple Editing",
    "Portfolio Ready",
    "Fast Setup",
  ],

  contact: {
    eyebrow: "Contact",
    heading: "Let’s build something great",
    description:
      "Add your email, LinkedIn, GitHub, and a simple contact form or call-to-action here.",
    email: "hello@example.com",
    githubLabel: "GitHub",
    githubUrl: "#",
  },

  footerText: "Built with React, Vite, and Tailwind CSS.",
};