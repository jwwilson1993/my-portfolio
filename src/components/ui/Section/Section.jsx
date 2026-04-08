export default function Section({
  id,
  children,
  className = "",
  containerClassName = "",
}) {
  return (
    <section id={id} className={`px-6 ${className}`}>
      <div className={`mx-auto max-w-6xl ${containerClassName}`}>{children}</div>
    </section>
  );
}