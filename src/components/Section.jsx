import "./Section.css";

function Section({ id, title, height = 740, centered = false, variant, verticalCenter = false, titleCentered = false, children }) {
  const minHeight = variant === "divider" ? "100vh" : typeof height === "number" ? `${height}px` : height;
  return (
    <section
      id={id}
      className={`cs-section${variant ? ` cs-section--${variant}` : ""}${verticalCenter ? " cs-section--v-center" : ""}`}
      style={{ minHeight }}
    >
      <div className="cs-section__inner">
        {title && (
          <h2 className={`cs-section__title${titleCentered ? " cs-section__title--center" : ""}`}>{title}</h2>
        )}
        {children && (
          <div className={`cs-section__content${centered ? " cs-section__content--center" : ""}`}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}

export default Section;
