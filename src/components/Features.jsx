import "./Features.css";

const heroFeatures = [
  {
    title: "Guided fulfilment workflow",
    description:
      "Breaks order fulfillment into guided stages, helping managers complete one step at a time.",
  },
  {
    title: "Smart allocation",
    description:
      "Recommends eligible farmers based on quality, availability, and fulfillment constraints, with manual overrides.",
  },
  {
    title: "Order discussion thread",
    description:
      "Keeps buyers, farmers, and managers aligned with contextual discussions attached to each order.",
  },
  {
    title: "Image capture",
    description:
      "Farmers update inventory using images, voice, or manual entry for faster updates.",
  },
];

const personaColumns = [
  {
    icon: "🧑‍💼",
    name: "Co-op Manager",
    categories: [
      {
        heading: "Reduce cognitive load",
        items: [
          {
            text: "Guided fulfillment workflow",
            children: ["Allocation", "Confirmation", "Pickup", "Dispatch", "Settlement"],
          },
        ],
      },
      {
        heading: "Reduce manual operations",
        items: ["Automated reminders", "Contextual reminders"],
      },
      {
        heading: "Improve communication",
        items: ["Order discussion thread", "Buyer & farmer coordination within the order"],
      },
      {
        heading: "Simplify logistics",
        items: ["Pickup scheduling", "Route planning", "Driver assignment", "ETA tracking"],
      },
      {
        heading: "Improve financial visibility",
        items: ["Finance dashboard", "Buyer invoice tracking", "Farmer payout tracking"],
      },
    ],
  },
  {
    icon: "🛒",
    name: "Buyer",
    categories: [
      {
        heading: "Simplify communication",
        items: ["Shared order chat", "Callback request", "Purchase notes"],
      },
      {
        heading: "Improve purchase confidence",
        items: ["Inventory catalogue", "Quality grades", "Available quantity", "Harvest date"],
      },
      {
        heading: "Improve order visibility",
        items: ["Order timeline", "Status updates", "Delivery ETA"],
      },
      {
        heading: "Improve financial transparency",
        items: ["Invoice history", "Payment history", "Order history"],
      },
      {
        heading: "Reduce purchase effort",
        items: [
          {
            text: "Interactive produce cards",
            children: ["Review produce", "Adjust quantity", "Add directly to cart"],
          },
        ],
      },
    ],
  },
  {
    icon: "🧑‍🌾",
    name: "Farmer",
    categories: [
      {
        heading: "Improve order visibility",
        items: ["Allocation notifications", "Automated allocation call"],
      },
      {
        heading: "Improve pickup coordination",
        items: ["Pickup calendar", "Live truck tracking", "Pickup reminders"],
      },
      {
        heading: "Improve payment transparency",
        items: ["Earnings summary", "Deduction breakdown", "Payment status", "Settlement details"],
      },
    ],
  },
];

function HeroFeature({ title, description }) {
  return (
    <div className="hero-feature">
      <h4 className="hero-feature__title">{title}</h4>
      <p className="hero-feature__description">{description}</p>
    </div>
  );
}

function FeatureItems({ items }) {
  return (
    <ul className="feature-list">
      {items.map((item, i) =>
        typeof item === "string" ? (
          <li key={i}>{item}</li>
        ) : (
          <li key={i}>
            {item.text}
            <ul className="feature-list feature-list--nested">
              {item.children.map((child, j) => (
                <li key={j}>{child}</li>
              ))}
            </ul>
          </li>
        )
      )}
    </ul>
  );
}

function PersonaColumn({ icon, name, categories }) {
  return (
    <div className="persona-column">
      <h4 className="persona-column__header">
        <span>{icon}</span> {name}
      </h4>
      {categories.map((category, i) => (
        <div key={i} className="feature-category">
          <h5 className="feature-category__heading">{category.heading}</h5>
          <FeatureItems items={category.items} />
        </div>
      ))}
    </div>
  );
}

function Features() {
  return (
    <div className="features">
      <h3 className="features__heading">Hero Features</h3>
      <div className="hero-features">
        {heroFeatures.map((feature, i) => (
          <HeroFeature key={i} {...feature} />
        ))}
      </div>

      <div className="features-divider" />

      <h3 className="features__heading">Other important features</h3>
      <div className="persona-columns">
        {personaColumns.map((persona) => (
          <PersonaColumn key={persona.name} {...persona} />
        ))}
      </div>
    </div>
  );
}

export default Features;
