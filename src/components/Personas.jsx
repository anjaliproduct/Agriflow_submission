import "./Personas.css";

const personas = [
  {
    icon: "👨‍💼",
    name: "Manager",
    goals: [
      "Fulfill buyer orders successfully",
      "Coordinate farmers efficiently",
      "Optimize inventory utilization",
      "Ensure timely pickups and deliveries",
      "Manage settlements and payments",
    ],
    needs: [
      "Centralized inventory visibility",
      "Assisted allocation with manual control",
      "Real-time farmer confirmations",
      "Logistics planning and tracking",
      "Automated settlements and payment records",
    ],
  },
  {
    icon: "🧑‍🌾",
    name: "Farmer",
    goals: [
      "Keep inventory up to date",
      "Fulfill assigned orders accurately",
      "Prepare produce for pickup",
      "Receive timely and transparent payments",
    ],
    needs: [
      "Simple inventory management",
      "Clear order and pickup notifications",
      "Visibility into order status",
      "Transparent earnings and payment tracking",
    ],
  },
  {
    icon: "👩",
    name: "Buyer",
    goals: [
      "Purchase quality produce in bulk",
      "Place orders quickly",
      "Track order fulfillment",
      "Receive deliveries on time",
    ],
    needs: [
      "Easy product discovery",
      "Transparent inventory availability",
      "Real-time order tracking",
      "Delivery updates",
      "Invoice and payment history",
    ],
  },
];

function Personas() {
  return (
    <div className="personas">
      {personas.map((persona) => (
        <div key={persona.name} className="persona-card">
          <span className="persona-card__icon">{persona.icon}</span>
          <h3 className="persona-card__name">{persona.name}</h3>

          <h4 className="persona-card__label">Goals</h4>
          <ul className="persona-card__list">
            {persona.goals.map((goal, i) => (
              <li key={i}>{goal}</li>
            ))}
          </ul>

          <h4 className="persona-card__label">Needs</h4>
          <ul className="persona-card__list">
            {persona.needs.map((need, i) => (
              <li key={i}>{need}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Personas;
