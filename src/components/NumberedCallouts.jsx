import "./NumberedCallouts.css";

function NumberedCallouts({ items }) {
  return (
    <div className="numbered-callouts">
      {items.map((item, i) => (
        <div key={i} className="numbered-callout">
          <span className="numbered-callout__badge">{i + 1}</span>
          <h4 className="numbered-callout__title">{item.title}</h4>
          <p className="numbered-callout__description">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NumberedCallouts;
