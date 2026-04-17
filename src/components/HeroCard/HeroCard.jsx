import Card from "../ui/Card/Card";
import profileImage from "../../assets/profile-image.png";

export default function HeroCard({ isDark, data }) {
  const { heroCard, name } = data;
  const { heading, intro, skillsHeading, skills } = heroCard;

  const pillClass = isDark
    ? "rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 text-xs text-cyan-300"
    : "rounded-full border border-cyan-500/20 bg-cyan-100 px-2.5 py-1 text-xs text-cyan-700";

  return (
    <Card
      isDark={isDark}
      className={
        isDark
          ? "w-full max-w-2xl p-6 shadow-2xl shadow-cyan-950/20 animate-[fadeIn_0.8s_ease-out]"
          : "w-full max-w-2xl p-6 shadow-xl animate-[fadeIn_0.8s_ease-out]"
      }
    >
      <section
        className={
          isDark
            ? "rounded-2xl border border-white/10 bg-slate-900 p-5"
            : "rounded-2xl border border-slate-200 bg-slate-50 p-5"
        }
        aria-labelledby="hero-card-about-heading"
      >
        <div className="flex flex-col items-center gap-4 text-center">
          <img
            src={profileImage}
            alt={`Portrait of ${name}`}
            width={120}
            height={120}
            className={
              isDark
                ? "h-24 w-24 shrink-0 rounded-full border-2 border-white/15 object-cover shadow-lg shadow-black/30 sm:h-[7rem] sm:w-[7rem] sm:max-h-[120px] sm:max-w-[120px]"
                : "h-24 w-24 shrink-0 rounded-full border-2 border-slate-200 object-cover shadow-md shadow-slate-900/10 sm:h-[7rem] sm:w-[7rem] sm:max-h-[120px] sm:max-w-[120px]"
            }
          />

          <h2 id="hero-card-about-heading" className="text-xl font-semibold">
            {heading}
          </h2>

          <div className="w-full">
            <p
              className={
                isDark
                  ? "text-sm leading-relaxed text-slate-300"
                  : "text-sm leading-relaxed text-slate-700"
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
              className="mt-2.5 flex flex-wrap justify-center gap-1.5"
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
    </Card>
  );
}
