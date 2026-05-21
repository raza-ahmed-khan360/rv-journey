import "./SectionWrapper.css";

export default function SectionWrapper({
  children,
  className = "",
  id,
  containerType = "default", // 'default', 'narrow', 'fluid'
}) {
  const containerClass =
    containerType === "narrow"
      ? "container-narrow"
      : containerType === "default"
      ? "container"
      : "";

  return (
    <section className={`section-wrapper ${className}`} id={id}>
      <div className={containerClass}>{children}</div>
    </section>
  );
}
