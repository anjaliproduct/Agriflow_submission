import "./KeyDesignDecision.css";

function KeyDesignDecision({ items }) {
  return (
    <div className="key-design-decision">
      <h4 className="key-design-decision__heading">Key Design Decision</h4>
      {items.map((item, i) => (
        <div key={i} className="key-design-decision__item">
          <h5 className="key-design-decision__title">{item.title}</h5>
          <p className="key-design-decision__description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default KeyDesignDecision;
