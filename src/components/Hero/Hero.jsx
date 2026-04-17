import Button from "../ui/Button/Button";

export default function Hero({ isDark, githubUrl }) {
  return (
    <div className="flex w-full max-w-2xl animate-[fadeIn_0.6s_ease-out] justify-center">
      <div className="flex flex-wrap justify-center gap-4">
        <Button href="#projects" isDark={isDark} variant="primary">
          View Projects
        </Button>

        <Button href="#contact" isDark={isDark} variant="secondary">
          Contact Me
        </Button>

        <Button
          href="https://jakes-port.netlify.app"
          isDark={isDark}
          variant="secondary"
        >
          LinkedIn
        </Button>

        <Button href={githubUrl} isDark={isDark} variant="secondary">
          GitHub
        </Button>
      </div>
    </div>
  );
}