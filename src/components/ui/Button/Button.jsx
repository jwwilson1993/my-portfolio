export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  isDark,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium transition";

  const variants = {
    primary: isDark
      ? "bg-white text-slate-950 hover:scale-[1.02]"
      : "bg-slate-900 text-white hover:scale-[1.02]",

    secondary: isDark
      ? "border border-white/15 text-white hover:bg-white/5"
      : "border border-slate-300 text-slate-900 hover:bg-white",

    ghost: isDark
      ? "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
      : "border border-slate-300 bg-white text-slate-800 hover:bg-slate-100",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}