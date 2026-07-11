import "./StakeholderEcosystem.css";

const CANVAS_W = 1200;
const CANVAS_H = 860;

const px = (v) => `${(v / CANVAS_W) * 100}%`;
const py = (v) => `${(v / CANVAS_H) * 100}%`;

const nodes = [
  { id: "manager", cx: 520, cy: 195, r: 78, icon: "👨‍💼", label: "Manager", variant: "primary" },
  { id: "farmer", cx: 130, cy: 440, r: 64, icon: "🧑‍🌾", label: "Farmer" },
  { id: "buyer", cx: 952, cy: 420, r: 64, icon: "👩", label: "Buyer" },
  { id: "logistics", cx: 500, cy: 700, r: 52, icon: "🚚", label: "Logistics" },
];

const relationships = [
  {
    id: "farmer-manager",
    path: "M211,428 Q346,300 483,235",
    card: { x: 115, y: 30, w: 300, minH: 300 },
    title: "Farmer ↔ Manager",
    exchanges: [
      "Manager asks for availability",
      "Farmer confirms availability",
      "Manager shares pickup date & time",
      "Farmer follows up for payment",
      "Manager pays, deducting fees & quantity variance",
    ],
    frictions: [
      "Trust drops when declared inventory doesn't match the order",
      "Farmer unsure of final amount due to unclear variance",
      "Variance deducted without upfront communication",
    ],
  },
  {
    id: "manager-buyer",
    path: "M603,227 Q779,290 942,405",
    card: { x: 705, y: 10, w: 300, minH: 300 },
    title: "Manager ↔ Buyer",
    exchanges: [
      "Manager checks availability",
      "Buyer confirms order & est. delivery date",
      "Manager flags variance in produce",
      "Manager sends invoice with final amount",
      "Buyer pays amount due",
    ],
    frictions: [
      "Order confirmation delayed without real time inventory",
      "Buyer unsatisfied when quality or grade misses spec",
      "Manager reluctant to keep chasing buyer for payment",
    ],
  },
  {
    id: "manager-logistics",
    path: "M540,265 L540,656",
    card: { x: 400, y: 405, w: 260 },
    title: "Manager ↔ Logistics",
    exchanges: ["Manager coordinates the pickup schedule", "Manager follows up on delivery status"],
    frictions: ["Delivery status followed up manually"],
  },
  {
    id: "farmer-logistics",
    path: "M212,490 Q345,600 503,676",
    card: { x: 180, y: 585, w: 250 },
    title: "Farmer ↔ Logistics",
    exchanges: ["Logistics partner arrives for pickup"],
    frictions: ["Farmer unsure of exact pickup time"],
  },
  {
    id: "buyer-logistics",
    path: "M944,458 Q780,585 578,678",
    card: { x: 700, y: 562, w: 250 },
    title: "Buyer ↔ Logistics",
    exchanges: ["Logistics delivers the produce", "Buyer calls in for status updates"],
    frictions: ["Buyer anxious with no real time delivery visibility"],
  },
];

function StakeholderEcosystem() {
  return (
    <div className="stakeholder-map-wrap">
      <div className="stakeholder-map">
        <svg
          className="stakeholder-map__lines"
          viewBox={`0 0 ${CANVAS_W} ${CANVAS_H}`}
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <marker
              id="sh-arrow"
              viewBox="0 0 10 10"
              refX="7.5"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 Z" className="stakeholder-map__arrowhead" />
            </marker>
          </defs>
          {relationships.map((r) => (
            <path
              key={r.id}
              d={r.path}
              className="stakeholder-map__line"
              markerStart="url(#sh-arrow)"
              markerEnd="url(#sh-arrow)"
            />
          ))}
        </svg>

        <div className="stakeholder-map__overlay">
          {nodes.map((n) => (
            <div
              key={n.id}
              className={`sh-node${n.variant ? ` sh-node--${n.variant}` : ""}`}
              style={{ left: px(n.cx - n.r), top: py(n.cy - n.r), width: px(n.r * 2), height: py(n.r * 2) }}
            >
              <span className="sh-node__icon">{n.icon}</span>
              <span className="sh-node__label">{n.label}</span>
            </div>
          ))}

          {relationships.map((r) => (
            <div
              key={r.id}
              className="sh-card"
              style={{
                left: px(r.card.x),
                top: py(r.card.y),
                width: px(r.card.w),
                minHeight: r.card.minH ? py(r.card.minH) : undefined,
              }}
            >
              <h4 className="sh-card__title">{r.title}</h4>
              <ol className="sh-card__exchanges">
                {r.exchanges.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ol>
              <ul className="sh-card__frictions">
                {r.frictions.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StakeholderEcosystem;
