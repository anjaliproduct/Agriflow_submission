import "./KeyInsights.css";

const ICONS = {
  search: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  barChart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <line x1="6" y1="20" x2="6" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="18" y1="20" x2="18" y2="14" />
    </svg>
  ),
  compass: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5l-2 5-5 2 2-5z" />
    </svg>
  ),
  leaf: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 21c8 0 14-6 14-14V4h-3C8 4 5 10 5 18v3z" />
      <path d="M5 21c3-6 6-9 12-12" />
    </svg>
  ),
  users: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M15.5 14.2c2.4.5 4.5 2.6 4.5 5.8" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <line x1="8" y1="20" x2="16" y2="20" />
      <line x1="12" y1="16" x2="12" y2="20" />
    </svg>
  ),
};

const insights = [
  {
    icon: ICONS.search,
    title: "Traceability as a core capability",
    description:
      "Inventory, procurement, and logistics are consistently linked to traceability and reporting.",
  },
  {
    icon: ICONS.barChart,
    title: "Information-dense dashboards",
    description:
      "Navigation by business function (inventory, procurement, transport, finance) is powerful but overwhelming.",
  },
  {
    icon: ICONS.compass,
    title: "Function-driven, not workflow-driven",
    description:
      "Features are organized by module instead of guiding users through end-to-end workflows.",
  },
  {
    icon: ICONS.leaf,
    title: "Farm management over fulfillment",
    description:
      "Farm operations dominate; collaborative order fulfillment gets comparatively less emphasis.",
  },
  {
    icon: ICONS.users,
    title: "Clear role separation",
    description:
      "Stakeholders access different modules based on responsibilities, reinforcing role-based design.",
  },
  {
    icon: ICONS.monitor,
    title: "Enterprise-first patterns",
    description:
      "Dashboard-heavy layouts prioritize operational efficiency over task guidance.",
  },
];

function KeyInsights() {
  return (
    <div className="key-insights">
      <div className="insight-grid">
        {insights.map((insight, i) => (
          <div key={i} className="insight-grid__cell">
            <span className="insight-grid__icon-holder">{insight.icon}</span>
            <h4 className="insight-grid__title">{insight.title}</h4>
            <p className="insight-grid__description">{insight.description}</p>
          </div>
        ))}
      </div>

      <h3 className="key-insights__heading key-insights__heading--takeaway">Key takeaway</h3>
      <blockquote className="key-takeaway">
        Existing platforms excel at operational depth but often prioritize system
        capabilities over workflow clarity. My solution focuses on simplifying order
        fulfillment through guided experiences, collaborative workflows, and
        transparent decision-making.
      </blockquote>
    </div>
  );
}

export default KeyInsights;
