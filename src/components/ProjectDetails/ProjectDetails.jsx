import { Link, Navigate, useParams } from "react-router";
import ProjectCarousel from "../ProjectCarousel/ProjectCarousel";

export default function ProjectDetails({ isDark, data }) {
  const { projectId } = useParams();
  const project = data.projects.find((item) => item.id === projectId);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const screenshots = project.screenshots ?? [];

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
          <h1 className="text-3xl font-bold">{project.title}</h1>
          <p className={isDark ? "mt-4 text-slate-300" : "mt-4 text-slate-700"}>
            {project.description}
          </p>
          <p className={isDark ? "mt-3 leading-7 text-slate-300" : "mt-3 leading-7 text-slate-700"}>
            {project.details}
          </p>

          {screenshots.length > 0 ? (
            <div className="mt-8">
              <h2 className="mb-3 text-lg font-semibold">Screenshots</h2>
              <ProjectCarousel images={screenshots} isDark={isDark} />
            </div>
          ) : null}

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
