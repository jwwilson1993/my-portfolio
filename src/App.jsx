import { useEffect, useState } from "react";
import { portfolioData } from "./data/portfolioData";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCard from "./components/HeroCard/HeroCard";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

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

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <Hero isDark={isDark} data={portfolioData} />
          <HeroCard isDark={isDark} data={portfolioData} />
        </section>

        <Projects isDark={isDark} data={portfolioData} />
        <About isDark={isDark} data={portfolioData} />
        <Contact isDark={isDark} data={portfolioData} />
      </main>

      <Footer isDark={isDark} data={portfolioData} />
    </div>
  );
}