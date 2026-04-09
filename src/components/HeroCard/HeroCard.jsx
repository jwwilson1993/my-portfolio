import Card from "../ui/Card/Card";
import profileImage from "../../assets/profile-image.png";

export default function HeroCard({ isDark, data }) {
  const { heroCard, stats, name } = data;
  const { heading, intro, skillsHeading, skills } = heroCard;

  const pillClass = isDark
    ? "rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300"
    : "rounded-full border border-cyan-500/20 bg-cyan-100 px-2.5 py-1 text-xs text-cyan-700";

  return (
    <Card
      isDark={isDark}
      className={
        isDark
          ? "p-6 shadow-2xl shadow-cyan-950/20 animate-[fadeIn_0.8s_ease-out]"
          : "p-6 shadow-xl animate-[fadeIn_0.8s_ease-out]"
      }
    >
      <div className="grid gap-4">
        <section
          className={
            isDark
              ? "rounded-2xl border border-white/10 bg-slate-900 p-5"
              : "rounded-2xl border border-slate-200 bg-slate-50 p-5"
          }
          aria-labelledby="hero-card-about-heading"
        >
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:items-start md:gap-5 md:text-left">
            <img
              src={profileImage}
              alt={`Portrait of ${name}`}
              width={120}
              height={120}
              className={
                isDark
                  ? "h-20 w-20 shrink-0 rounded-full border-2 border-white/15 object-cover shadow-lg shadow-black/30 sm:h-24 sm:w-24 md:h-[7rem] md:w-[7rem] md:max-h-[120px] md:max-w-[120px]"
                  : "h-20 w-20 shrink-0 rounded-full border-2 border-slate-200 object-cover shadow-md shadow-slate-900/10 sm:h-24 sm:w-24 md:h-[7rem] md:w-[7rem] md:max-h-[120px] md:max-w-[120px]"
              }
            />

            <div className="min-w-0 flex-1">
              <h2 id="hero-card-about-heading" className="text-xl font-semibold">
                {heading}
              </h2>
              <p
                className={
                  isDark
                    ? "mt-3 text-sm leading-relaxed text-slate-300"
                    : "mt-3 text-sm leading-relaxed text-slate-700"
                }
              >
                {intro}
              </p>

              <h3
                className={
                  isDark
                    ? "mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-400"
                    : "mt-5 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500"
                }
              >
                {skillsHeading}
              </h3>
              <ul
                className="mt-2.5 flex flex-wrap justify-center gap-1.5 md:justify-start"
                aria-label="Core skills"
              >
                {skills.map((skill) => (
                  <li key={skill}>
                    <span className={pillClass}>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

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
    </Card>
  );
}
