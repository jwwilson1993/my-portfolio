export default function Card({ children, isDark, className = "" }) {
  return (
    <div
      className={
        isDark
          ? `rounded-3xl border border-white/10 bg-white/5 ${className}`
          : `rounded-3xl border border-slate-300 bg-white ${className}`
      }
    >
      {children}
    </div>
  );
}