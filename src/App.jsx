import { useEffect, useState } from "react";
import { portfolioData } from "./data/portfolioData";

export default function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const isDark = theme === "dark";

  const {
    name,
    role,
    status,
    heroTitle,
    heroDescription,
    socialLinks,
    featuredProject,
    stats,
    projectsIntro,
    projects,
    about,
    skills,
    contact,
    footerText,
  } = portfolioData;

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
      <header
        className={
          isDark
            ? "border-b border-white/10 bg-slate-950/90 backdrop-blur"
            : "border-b border-slate-300 bg-white/90 backdrop-blur"
        }
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-lg font-semibold tracking-wide">{name}</p>
            <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>
              {role}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <nav
              className={
                isDark
                  ? "hidden gap-6 text-sm text-slate-300 md:flex"
                  : "hidden gap-6 text-sm text-slate-700 md:flex"
              }
            >
              <a href="#projects" className="transition hover:text-cyan-500">
                Projects
              </a>
              <a href="#about" className="transition hover:text-cyan-500">
                About
              </a>
              <a href="#contact" className="transition hover:text-cyan-500">
                Contact
              </a>
            </nav>

            <button
              onClick={toggleTheme}
              className={
                isDark
                  ? "rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 transition hover:bg-white/10"
                  : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm text-slate-800 transition hover:bg-slate-100"
              }
            >
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div className="space-y-6">
            <span
              className={
                isDark
                  ? "inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-300"
                  : "inline-flex rounded-full border border-cyan-500/20 bg-cyan-100 px-4 py-1 text-sm text-cyan-700"
              }
            >
              {status}
            </span>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                {heroTitle}
              </h1>
              <p
                className={
                  isDark ? "max-w-xl text-lg text-slate-300" : "max-w-xl text-lg text-slate-700"
                }
              >
                {heroDescription}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className={
                  isDark
                    ? "rounded-2xl bg-white px-5 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
                    : "rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white transition hover:scale-[1.02]"
                }
              >
                View Projects
              </a>
              <a
                href="#contact"
                className={
                  isDark
                    ? "rounded-2xl border border-white/15 px-5 py-3 font-medium text-white transition hover:bg-white/5"
                    : "rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-white"
                }
              >
                Contact Me
              </a>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className={
                    isDark
                      ? "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                      : "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-500/40 hover:text-slate-950"
                  }
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div
            className={
              isDark
                ? "rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-950/20"
                : "rounded-3xl border border-slate-300 bg-white p-6 shadow-xl"
            }
          >
            <div className="grid gap-4">
              <div
                className={
                  isDark
                    ? "rounded-2xl border border-white/10 bg-slate-900 p-5"
                    : "rounded-2xl border border-slate-200 bg-slate-50 p-5"
                }
              >
                <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                  {featuredProject.label}
                </p>
                <h2 className="mt-2 text-xl font-semibold">{featuredProject.title}</h2>
                <p className={isDark ? "mt-2 text-sm text-slate-300" : "mt-2 text-sm text-slate-700"}>
                  {featuredProject.description}
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className={
                      isDark
                        ? "rounded-2xl border border-white/10 bg-slate-900 p-5"
                        : "rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    }
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-500"}>
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p
                className={
                  isDark
                    ? "text-sm uppercase tracking-[0.2em] text-cyan-300"
                    : "text-sm uppercase tracking-[0.2em] text-cyan-700"
                }
              >
                {projectsIntro.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-bold">{projectsIntro.heading}</h2>
            </div>
            <p
              className={
                isDark ? "max-w-md text-sm text-slate-400" : "max-w-md text-sm text-slate-600"
              }
            >
              {projectsIntro.description}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className={
                  isDark
                    ? "rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/[0.07]"
                    : "rounded-3xl border border-slate-300 bg-white p-6 transition hover:-translate-y-1 hover:shadow-lg"
                }
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="mb-4 h-40 w-full rounded-2xl object-cover"
                />

                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p
                  className={
                    isDark ? "mt-3 text-sm leading-6 text-slate-300" : "mt-3 text-sm leading-6 text-slate-700"
                  }
                >
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
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

                <a
                  href={project.link}
                  className={
                    isDark
                      ? "mt-5 inline-block text-sm font-medium text-cyan-300"
                      : "mt-5 inline-block text-sm font-medium text-cyan-700"
                  }
                >
                  View Details →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-12">
          <div
            className={
              isDark
                ? "grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 md:grid-cols-[1.1fr_0.9fr]"
                : "grid gap-8 rounded-3xl border border-slate-300 bg-white p-8 md:grid-cols-[1.1fr_0.9fr]"
            }
          >
            <div>
              <p
                className={
                  isDark
                    ? "text-sm uppercase tracking-[0.2em] text-cyan-300"
                    : "text-sm uppercase tracking-[0.2em] text-cyan-700"
                }
              >
                {about.eyebrow}
              </p>
              <h2 className="mt-2 text-3xl font-bold">{about.heading}</h2>
              <p
                className={
                  isDark ? "mt-4 max-w-2xl text-slate-300" : "mt-4 max-w-2xl text-slate-700"
                }
              >
                {about.description}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className={
                    isDark
                      ? "rounded-2xl border border-white/10 bg-slate-900 p-4 text-sm text-slate-200"
                      : "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800"
                  }
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
          <div
            className={
              isDark
                ? "rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400/10 to-indigo-500/10 p-8 md:p-10"
                : "rounded-3xl border border-slate-300 bg-gradient-to-br from-cyan-100 to-indigo-100 p-8 md:p-10"
            }
          >
            <p
              className={
                isDark
                  ? "text-sm uppercase tracking-[0.2em] text-cyan-300"
                  : "text-sm uppercase tracking-[0.2em] text-cyan-700"
              }
            >
              {contact.eyebrow}
            </p>
            <h2 className="mt-2 text-3xl font-bold">{contact.heading}</h2>
            <p
              className={
                isDark ? "mt-4 max-w-2xl text-slate-300" : "mt-4 max-w-2xl text-slate-700"
              }
            >
              {contact.description}
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={`mailto:${contact.email}`}
                className={
                  isDark
                    ? "rounded-2xl bg-white px-5 py-3 font-medium text-slate-950"
                    : "rounded-2xl bg-slate-900 px-5 py-3 font-medium text-white"
                }
              >
                {contact.email}
              </a>
              <a
                href={contact.githubUrl}
                className={
                  isDark
                    ? "rounded-2xl border border-white/15 px-5 py-3 font-medium text-white"
                    : "rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900"
                }
              >
                {contact.githubLabel}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={
          isDark ? "border-t border-white/10 px-6 py-6" : "border-t border-slate-300 px-6 py-6"
        }
      >
        <div
          className={
            isDark
              ? "mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
              : "mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"
          }
        >
          <p>© 2026 {name}. All rights reserved.</p>
          <p>{footerText}</p>
        </div>
      </footer>
    </div>
  );
}