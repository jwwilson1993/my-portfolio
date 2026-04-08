import Card from "../ui/Card/Card";

export default function HeroCard({ isDark, data }) {
  const { featuredProject, stats } = data;

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
    </Card>
  );
}