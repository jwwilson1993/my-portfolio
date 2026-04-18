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
        <Button href="#projects" isDark={isDark} variant="primary">
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