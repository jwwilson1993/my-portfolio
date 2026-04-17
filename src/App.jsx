import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { portfolioData } from "./data/portfolioData";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCard from "./components/HeroCard/HeroCard";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";

function HomePage({ isDark, data }) {
  return (
    <main>
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-6 py-20">
        <HeroCard isDark={isDark} data={data} />
        <Hero isDark={isDark} githubUrl={data.contact.githubUrl} />
      </section>

      <Projects isDark={isDark} data={data} />
      <About isDark={isDark} data={data} />
      <Contact isDark={isDark} data={data} />
    </main>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div
      className={
        isDark
          ? "min-h-screen bg-slate-950 text-slate-100 transition-colors duration-300"
          : "min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300"
      }
    >
      <Navbar
        isDark={isDark}
        toggleTheme={toggleTheme}
        name={portfolioData.name}
        role={portfolioData.role}
      />

      <Routes>
        <Route path="/" element={<HomePage isDark={isDark} data={portfolioData} />} />
        <Route
          path="/projects/:projectId"
          element={<ProjectDetails isDark={isDark} data={portfolioData} />}
        />
      </Routes>

      <Footer isDark={isDark} data={portfolioData} />
    </div>
  );
}