export default function Footer({ isDark, data }) {
  const { name, footerText } = data;

  return (
    <footer
      className={
        isDark ? "border-t border-white/10 px-6 py-6" : "border-t border-slate-300 px-6 py-6"
      }
    >
      <div
        className={
          isDark
            ? "mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between"
            : "mx-auto flex max-w-6xl flex-col gap-2 text-sm text-slate-600 md:flex-row md:items-center md:justify-between"
        }
      >
        <p>© 2026 {name}. All rights reserved.</p>
        <p>{footerText}</p>
      </div>
    </footer>
  );
}