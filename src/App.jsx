import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes, useParams } from "react-router";
import { portfolioData } from "./data/portfolioData";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import HeroCard from "./components/HeroCard/HeroCard";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function HomePage({ isDark, data }) {
  return (
    <main>
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
        <Hero isDark={isDark} data={data} />
        <HeroCard isDark={isDark} data={data} />
      </section>

      <Projects isDark={isDark} data={data} />
      <About isDark={isDark} data={data} />
      <Contact isDark={isDark} data={data} />
    </main>
  );
}

function ProjectDetailsPage({ isDark, data }) {
  const { projectId } = useParams();
  const project = data.projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="px-6 py-16">
      <section className="mx-auto max-w-4xl">
        <Link
          to="/#projects"
          className={
            isDark
              ? "inline-block text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
              : "inline-block text-sm font-medium text-cyan-700 transition hover:text-cyan-900"
          }
        >
          ← Back to projects
        </Link>

        <article
          className={
            isDark
              ? "mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
              : "mt-6 overflow-hidden rounded-3xl border border-slate-300 bg-white p-6 md:p-8"
          }
        >
          <img
            src={project.image}
            alt={project.title}
            className="h-56 w-full rounded-2xl object-cover md:h-72"
          />

          <h1 className="mt-6 text-3xl font-bold">{project.title}</h1>
          <p className={isDark ? "mt-4 text-slate-300" : "mt-4 text-slate-700"}>
            {project.description}
          </p>
          <p className={isDark ? "mt-3 leading-7 text-slate-300" : "mt-3 leading-7 text-slate-700"}>
            {project.details}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className={
                  isDark
                    ? "rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300"
                    : "rounded-full border border-cyan-500/20 bg-cyan-100 px-3 py-1 text-xs text-cyan-700"
                }
              >
                {tag}
              </span>
            ))}
          </div>
        </article>
      </section>
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
          element={<ProjectDetailsPage isDark={isDark} data={portfolioData} />}
        />
      </Routes>

      <Footer isDark={isDark} data={portfolioData} />
    </div>
  );
}