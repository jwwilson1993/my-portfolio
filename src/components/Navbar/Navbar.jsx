import ThemeToggle from "../ui/ThemeToggle/ThemeToggle";

export default function Navbar({ isDark, toggleTheme, name, role }) {
  return (
    <header
      className={
        isDark
          ? "sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur"
          : "sticky top-0 z-50 border-b border-slate-300 bg-white/80 backdrop-blur"
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div>
          <p className="text-lg font-semibold tracking-wide">{name}</p>
          <p className={isDark ? "text-sm text-slate-400" : "text-sm text-slate-600"}>
            {role}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <nav
            className={
              isDark
                ? "hidden gap-6 text-sm text-slate-300 md:flex"
                : "hidden gap-6 text-sm text-slate-700 md:flex"
            }
          >
            <a className="transition hover:text-cyan-500" href="#projects">
              Projects
            </a>
            <a className="transition hover:text-cyan-500" href="#about">
              About
            </a>
            <a className="transition hover:text-cyan-500" href="#contact">
              Contact
            </a>
          </nav>

          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
        </div>
      </div>
    </header>
  );
}