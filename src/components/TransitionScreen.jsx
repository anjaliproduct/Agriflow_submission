import "./TransitionScreen.css";

function TransitionScreen({ id, part, label }) {
  return (
    <section id={id} className="transition-screen" style={{ minHeight: "100vh" }}>
      <p className="transition-screen__text">
        {part}
        <br />
        {label}
      </p>
    </section>
  );
}

export default TransitionScreen;
