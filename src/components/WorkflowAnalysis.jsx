import "./WorkflowAnalysis.css";

const personas = [
  {
    id: "manager",
    icon: "👨‍💼",
    name: "Manager",
    steps: [
      "1. Receive Inventory Updates",
      "2. Consolidate Excel Sheets",
      "3. Receive Buyer Order",
      "4. Check Inventory",
      "5. Call Farmers",
      "6. Allocate Produce",
      "7. Schedule Truck",
      "8. Generate Invoice",
      "9. Track Payment",
    ],
    painPoints: [
      "Information scattered across multiple channels & sheets",
      "Time-consuming consolidation and manual allocation",
      "No real-time visibility into inventory or order status",
      "Difficulty coordinating logistics and timelines",
      "Manual invoicing and payment tracking",
    ],
    opportunities: [
      "Centralized dashboard for inventory, orders & allocations",
      "Automated allocation suggestions based on key factors",
      "Real-time communication with all stakeholders",
      "Integrated logistics scheduling",
      "Automated invoicing & payment tracking",
    ],
    flowSide: "left",
  },
  {
    id: "farmer",
    icon: "🧑‍🌾",
    name: "Farmer",
    steps: [
      "1. Harvest Produce",
      "2. Update Available Produce",
      "3. Receive Order Allocation",
      "4. Prepare Produce",
      "5. Hand-over Produce",
      "6. Receive Payment",
    ],
    painPoints: [
      "Manually tracking inventory in spreadsheets or notebooks",
      "Unclear order allocations and pickup schedules",
      "No visibility into buyer demand or delivery timelines",
      "Delayed payments and unclear deductions",
    ],
    opportunities: [
      "Real-time inventory update and visibility",
      "Clear order allocation and pickup schedule",
      "Transparent payments and deductions",
      "Access to earnings, settlement and performance summary",
    ],
    flowSide: "right",
  },
  {
    id: "buyer",
    icon: "👩",
    name: "Buyer",
    steps: [
      "1. Contact Co-op",
      "2. Ask Availability",
      "3. Place Bulk Order",
      "4. Wait for Confirmation",
      "5. Receive Delivery",
      "6. Make Payment",
    ],
    painPoints: [
      "Cannot instantly see availability or accurate delivery timeline",
      "Order confirmation delayed due to manual coordination",
      "Limited visibility into order progress and delivery status",
      "Payment records maintained manually",
    ],
    opportunities: [
      "Instant visibility into availability and delivery timelines",
      "Faster order confirmation and updates",
      "Real-time tracking of order and delivery status",
      "Centralized payment history and invoices",
    ],
    flowSide: "left",
  },
];

function PersonaFlow({ icon, name, steps }) {
  return (
    <div className="persona-flow">
      <div className="persona-flow__header">
        <span className="persona-flow__icon">{icon}</span>
        <h4 className="persona-flow__name">{name}</h4>
      </div>
      <ol className="persona-flow__steps">
        {steps.map((step, i) => (
          <li key={i} className="persona-flow__step">
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}

function CardGroup({ label, items, variant }) {
  return (
    <div className="card-group">
      <h4 className="card-group__label">{label}</h4>
      <div className="card-group__cards">
        {items.map((text, i) => (
          <div key={i} className={`card-group__card card-group__card--${variant}`}>
            {text.split("\n").map((line, j) => (
              <p key={j}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaRow({ persona }) {
  return (
    <div className={`persona-row${persona.flowSide === "right" ? " persona-row--reverse" : ""}`}>
      <PersonaFlow icon={persona.icon} name={persona.name} steps={persona.steps} />
      <div className="persona-row__cards">
        <CardGroup label="Pain points" items={persona.painPoints} variant="pain" />
        <CardGroup label="Opportunities" items={persona.opportunities} variant="opportunity" />
      </div>
    </div>
  );
}

function WorkflowAnalysis() {
  return (
    <div className="workflow-analysis">
      {personas.map((persona) => (
        <PersonaRow key={persona.id} persona={persona} />
      ))}
    </div>
  );
}

export default WorkflowAnalysis;
