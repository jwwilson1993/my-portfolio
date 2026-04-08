import Card from "../ui/Card/Card";

export default function ProjectCard({ isDark, project }) {
  return (
    <Card
      isDark={isDark}
      className={
        isDark
          ? "p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
          : "p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg"
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
          isDark
            ? "mt-3 text-sm leading-6 text-slate-300"
            : "mt-3 text-sm leading-6 text-slate-700"
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
            ? "mt-5 inline-block text-sm font-medium text-cyan-300 transition hover:text-cyan-200"
            : "mt-5 inline-block text-sm font-medium text-cyan-700 transition hover:text-cyan-900"
        }
      >
        View Details →
      </a>
    </Card>
  );
}