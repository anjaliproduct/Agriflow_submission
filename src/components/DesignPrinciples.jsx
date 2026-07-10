import "./DesignPrinciples.css";

const ICONS = {
  guidedWorkflows: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
    </svg>
  ),
  trustTransparency: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  aiHuman: (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M12 2c.9 3.6 2.4 5.1 6 6-3.6.9-5.1 2.4-6 6-.9-3.6-2.4-5.1-6-6 3.6-.9 5.1-2.4 6-6z" />
    </svg>
  ),
  workflowFirst: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19c4-6 6 2 10-4s2-8 6-8" />
      <circle cx="4" cy="19" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="20" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  attention: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 01-3.46 0" />
    </svg>
  ),
};

const principles = [
  {
    icon: ICONS.guidedWorkflows,
    title: "Guided Workflows",
    description: "Break complex operations into clear, manageable steps.",
  },
  {
    icon: ICONS.trustTransparency,
    title: "Trust Through Transparency",
    description: "Make allocations, payments, and order status visible at every stage.",
  },
  {
    icon: ICONS.aiHuman,
    title: "AI-assisted, Human-controlled",
    description: "Automate repetitive decisions while keeping operators in control.",
  },
  {
    icon: ICONS.workflowFirst,
    title: "Workflow-first Design",
    description: "Structure the product around real operational processes rather than isolated screens.",
  },
  {
    icon: ICONS.attention,
    title: "Attention Where It Matters",
    description: "Surface exceptions, pending actions, and critical updates so teams can act quickly.",
  },
];

function DesignPrinciples() {
  return (
    <div className="design-principles">
      {principles.map((principle, i) => (
        <div key={i} className="design-principles__item">
          <span className="design-principles__icon">{principle.icon}</span>
          <h4 className="design-principles__title">{principle.title}</h4>
          <p className="design-principles__description">{principle.description}</p>
        </div>
      ))}
    </div>
  );
}

export default DesignPrinciples;
