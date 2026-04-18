import Section from "../ui/Section/Section";
import Card from "../ui/Card/Card";

export default function About({ isDark, data }) {
  const { about, skills } = data;

  return (
    <Section id="about" className="py-12">
      <Card isDark={isDark} className="grid gap-8 p-8 md:grid-cols-[1.1fr_0.9fr]">
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
                  ? "rounded-2xl border border-white/10 bg-slate-900 p-4 text-sm text-slate-200 transition hover:-translate-y-1"
                  : "rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-800 transition hover:-translate-y-1"
              }
            >
              {skill}
            </div>
          ))}
        </div>
      </Card>
    </Section>
  );
}