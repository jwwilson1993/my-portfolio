import Section from "../ui/Section/Section";
import ProjectCard from "./ProjectCard";

export default function Projects({ isDark, data }) {
  const { projectsIntro, projects } = data;

  return (
    <Section id="projects" className="py-12">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
          <ProjectCard key={project.title} isDark={isDark} project={project} />
        ))}
      </div>
    </Section>
  );
}