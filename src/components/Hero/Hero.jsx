import Button from "../ui/Button/Button";

export default function Hero({ isDark, data }) {
  const { status, heroTitle, heroDescription, socialLinks } = data;

  return (
    <div className="space-y-6 animate-[fadeIn_0.6s_ease-out]">
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
            isDark
              ? "max-w-xl text-lg text-slate-300"
              : "max-w-xl text-lg text-slate-700"
          }
        >
          {heroDescription}
        </p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button href="#projects" isDark={isDark} variant="primary">
          View Projects
        </Button>

        <Button href="#contact" isDark={isDark} variant="secondary">
          Contact Me
        </Button>
      </div>

      <div className="flex flex-wrap gap-3 pt-2">
        {socialLinks.map((link) => {
          const isGitHubLink = link.url.includes("github.com");

          return (
            <a
              key={link.label}
              href={link.url}
              target={isGitHubLink ? "_blank" : undefined}
              rel={isGitHubLink ? "noopener noreferrer" : undefined}
              className={
                isDark
                  ? "rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
                  : "rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-700 transition hover:border-cyan-500/40 hover:text-slate-950"
              }
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </div>
  );
}