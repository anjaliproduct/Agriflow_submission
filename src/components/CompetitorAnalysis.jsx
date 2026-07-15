import "./CompetitorAnalysis.css";

const competitors = [
  {
    name: "SourceTrace",
    domain: "Agri Supply Chain & Procurement",
    logo: "/Images/Logos/sourcetrace.png",
  },
  {
    name: "ProducePay",
    domain: "Fresh Produce Supply Chain Platform",
    logo: "/Images/Logos/Produce%20pay.png",
  },
  {
    name: "Farmbrite",
    domain: "Farm Management System",
    logo: "/Images/Logos/farmbrite.png",
  },
  {
    name: "ERPNext",
    domain: "Enterprise Resource Planning (ERP)",
    logo: "/Images/Logos/erpnext.png",
  },
  {
    name: "Local Line",
    domain: "B2B Farm Commerce Marketplace",
    logo: "/Images/Logos/localline.png",
  },
];

const goals = [
  {
    title: "Goal 1 · Fulfill Order",
    question: "How and when should inventory be verified before fulfilling buyer orders?",
    table: {
      columns: ["Competitor", "Approach", "Benefits & Trade-off"],
      rows: [
        [
          "ProducePay",
          "On-ground inspection",
          "Verified inventory before allocation, but requires a dedicated inspection workforce.",
        ],
        [
          "AgriWeb",
          "Warehouse",
          "Inventory is verified and ready for dispatch, but assumes warehousing infrastructure and inventory storage.",
        ],
      ],
    },
    takeaway: (
      <>
        A <strong>collection center</strong> strikes the right balance between the two extremes:
        it delivers the operational simplicity of centralized verification without demanding
        warehouse infrastructure, making it a better fit for a regional co-op.
      </>
    ),
  },
  {
    title: "Goal 2 · Settle Payments",
    question: "How should invoices, deductions and payouts be managed?",
    table: {
      columns: ["Competitor", "Observation", "Why this matters"],
      rows: [
        [
          "ProducePay",
          "Quality deductions are shown before payouts are released.",
          "Makes payout adjustments transparent and reduces farmer disputes.",
        ],
        [
          "ERPNext",
          "Invoice lifecycle clearly communicates payment status.",
          "Helps buyers and managers understand pending actions at every stage.",
        ],
      ],
    },
    takeaway:
      "Separating buyer invoices from farmer payouts, and surfacing quality deductions before releasing payments, improves financial transparency for both stakeholders.",
  },
  {
    title: "Goal 3 · Update Inventory",
    question: "How can farmers easily update and track available inventory?",
    table: {
      columns: ["Competitor", "Observation", "Why this matters"],
      rows: [
        [
          "Farmbrite",
          "Inventory is organised around harvest records with quantity tracking.",
          "Makes current produce easy to review and update.",
        ],
        [
          "SourceTrace",
          "Calendar-based harvest planning provides visibility into upcoming availability.",
          "Helps farmers anticipate future inventory without managing the full crop lifecycle.",
        ],
      ],
    },
    takeaway:
      "Combining current inventory with upcoming harvest visibility in a single workflow covers what farmers actually need, without expanding into a full crop management experience the product isn't meant to be.",
  },
  {
    title: "Goal 4 · Place a Bulk Order",
    question: "What information helps buyers confidently place a bulk order?",
    table: {
      columns: ["Competitor", "Stage - Observation", "Why this matters"],
      rows: [
        [
          "Local Line",
          "Product Listing - Quality, availability, harvest date and price",
          "Buyers first need confidence that the produce meets their requirements.",
        ],
        [
          "Local Line",
          "Checkout - Total amount, delivery estimate and fees",
          "Cost transparency reduces uncertainty before confirming an order.",
        ],
      ],
    },
    takeaway:
      "Buyer confidence builds in two stages: quality and availability matter most during product discovery, while total cost and delivery estimates matter most at checkout, right before committing to an order.",
  },
];

function InsightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <circle cx="12" cy="10" r="6" />
      <line x1="12" y1="16" x2="12" y2="18" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </svg>
  );
}

function PointerTable({ columns, rows }) {
  return (
    <table className="research-table">
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) =>
              typeof cell === "boolean" ? (
                <td key={j}>
                  <span
                    className={`research-table__decision research-table__decision--${cell ? "yes" : "no"}`}
                  >
                    {cell ? "✓" : "✕"}
                  </span>
                </td>
              ) : (
                <td key={j}>{cell}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function GoalSection({ goal }) {
  return (
    <div className="research-goal">
      <h4 className="research-goal__title">{goal.title}</h4>

      <div className="research-goal__grid">
        <div className="research-goal__main">
          <p className="research-goal__question">{goal.question}</p>
          <PointerTable columns={goal.table.columns} rows={goal.table.rows} />
        </div>

        <div className="research-goal__divider" />

        <div className="research-goal__aside">
          <p className="research-goal__label">
            <InsightIcon />
            Key insight
          </p>
          <blockquote className="research-goal__takeaway">{goal.takeaway}</blockquote>
        </div>
      </div>
    </div>
  );
}

function CompetitorAnalysis() {
  return (
    <div className="competitor-analysis">
      <h3 className="competitor-analysis__heading">Domain research</h3>
      <p className="competitor-analysis__description">
        Most farm management tools focus on a single slice of the problem
        (traceability, inventory, or commerce), but none fully address the
        operational coordination between farmers, co-op managers, and buyers.
        These five products were the closest reference points, each solving
        one piece of that puzzle well.
      </p>

      <div className="competitor-cards">
        {competitors.map(({ name, domain, logo }) => (
          <div className="competitor-card" key={name}>
            <img className="competitor-card__logo" src={logo} alt={`${name} logo`} />
            <p className="competitor-card__name">{name}</p>
            <p className="competitor-card__domain">{domain}</p>
          </div>
        ))}
      </div>

      <h3 className="competitor-analysis__heading">Research by user goal</h3>
      <p className="competitor-analysis__description">
        After understanding the current workflow, I identified the users' main
        goals. I then studied products solving each of these goals to
        understand their approach and use those insights to shape my
        solution, rather than comparing feature lists.
      </p>

      <div className="research-goals">
        {goals.map((goal) => (
          <GoalSection key={goal.title} goal={goal} />
        ))}
      </div>
    </div>
  );
}

export default CompetitorAnalysis;
