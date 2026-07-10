import "./CompetitorAnalysis.css";

const strengths = [
  { item: "End-to-end operational coverage", note: "Supports procurement through settlement" },
  { item: "Robust traceability", note: "Maintains visibility across the supply chain" },
  { item: "Mature role-based access", note: "Serves different operational stakeholders" },
  { item: "Rich operational tooling", note: "Handles complex agricultural workflows" },
];

const opportunities = [
  { item: "Information-dense interfaces", note: "Guided, step-by-step workflows" },
  { item: "Workflow spread across multiple modules", note: "Unified fulfillment journey" },
  { item: "Manual coordination between stakeholders", note: "Shared order discussion thread" },
  { item: "Heavy operational complexity", note: "AI-assisted recommendations with human oversight" },
];

const competitors = ["SourceTrace", "Farmforce", "Agridigital", "eProd Solutions", "AgriERP"];

function InsightTable({ columns, rows }) {
  return (
    <table className="insight-table">
      <thead>
        <tr>
          <th>{columns[0]}</th>
          <th>{columns[1]}</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            <td>{row.item}</td>
            <td>{row.note}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function CompetitorAnalysis() {
  return (
    <div className="competitor-analysis">
      <div className="competitor-logos">
        {competitors.map((name) => (
          <div key={name} className="competitor-logos__item">
            <span className="competitor-logos__label">{name}</span>
          </div>
        ))}
      </div>

      <h3 className="competitor-analysis__heading">What existing platforms do well</h3>
      <InsightTable columns={["Strength", "Why it matters"]} rows={strengths} />

      <h3 className="competitor-analysis__heading">Opportunities identified</h3>
      <InsightTable columns={["Observation", "Design response"]} rows={opportunities} />
    </div>
  );
}

export default CompetitorAnalysis;
