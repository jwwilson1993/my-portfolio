import { Moon, Sun } from "lucide-react";

const iconStroke = 1.5;

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={onToggle}
      className={
        isDark
          ? "relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-white/15 bg-slate-800/90 p-0.5 leading-none shadow-inner transition-colors hover:border-white/25"
          : "relative inline-flex h-9 w-16 shrink-0 items-center rounded-full border border-slate-300/80 bg-slate-200/90 p-0.5 leading-none shadow-inner transition-colors hover:border-slate-400"
      }
    >
      {!isDark ? (
        <Moon
          aria-hidden
          className="pointer-events-none absolute top-1/2 right-1 z-[15] h-3 w-3 -translate-y-1/2 text-slate-400"
          strokeWidth={iconStroke}
        />
      ) : (
        <Sun
          aria-hidden
          className="pointer-events-none absolute top-1/2 left-1 z-[15] h-3 w-3 -translate-y-1/2 text-slate-500"
          strokeWidth={iconStroke}
        />
      )}

      <span
        className={
          "pointer-events-none absolute top-1/2 left-0 z-10 size-8 -translate-y-1/2 rounded-full border-2 bg-transparent transition-transform duration-300 ease-out " +
          (isDark
            ? "translate-x-7 border-white/55"
            : "translate-x-0 border-sky-400")
        }
      />

      <span
        className={
          "pointer-events-none absolute top-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transition-[left] duration-300 ease-out " +
          (isDark ? "left-[2.75rem]" : "left-[1rem]")
        }
      >
        {isDark ? (
          <Moon
            aria-hidden
            className="h-[15px] w-[15px] text-cyan-300"
            strokeWidth={iconStroke}
          />
        ) : (
          <Sun
            aria-hidden
            className="h-[15px] w-[15px] text-amber-500"
            strokeWidth={iconStroke}
          />
        )}
      </span>
    </button>
  );
}
