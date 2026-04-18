import Button from "../ui/Button/Button";
import {
  GitHubIcon,
  LinkedInIcon,
  socialButtonIconClass,
} from "../ui/SocialBrandIcons";

export default function Hero({ isDark, githubUrl, linkedInUrl }) {
  return (
    <div className="flex w-full max-w-2xl animate-[fadeIn_0.6s_ease-out] justify-center">
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          href="#projects"
          isDark={isDark}
          variant="primary"
          className={
            isDark
              ? "border border-white/10 !bg-slate-950 !bg-gradient-to-br !from-cyan-400/10 !to-indigo-500/10 !text-white"
              : "border border-slate-300 !bg-gradient-to-br !from-cyan-100 !to-indigo-100 !text-slate-900"
          }
        >
          View Projects
        </Button>

        <Button href="#contact" isDark={isDark} variant="secondary">
          Contact Me
        </Button>

        <Button href={linkedInUrl} isDark={isDark} variant="secondary">
          <span className="inline-flex items-center gap-2">
            <LinkedInIcon className={socialButtonIconClass} />
            LinkedIn
          </span>
        </Button>

        <Button href={githubUrl} isDark={isDark} variant="secondary">
          <span className="inline-flex items-center gap-2">
            <GitHubIcon className={socialButtonIconClass} />
            GitHub
          </span>
        </Button>
      </div>
    </div>
  );
}