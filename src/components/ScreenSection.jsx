import ScreenMockupPlaceholder from "./ScreenMockupPlaceholder";
import KeyDesignDecision from "./KeyDesignDecision";
import NumberedCallouts from "./NumberedCallouts";
import "./ScreenSection.css";

function Mockup({ src, alt }) {
  return src ? <img className="screen-mockup-image" src={src} alt={alt} /> : <ScreenMockupPlaceholder />;
}

function ScreenSection({ layout = "centered", decision, callouts, images, title }) {
  return (
    <div className="screen-section">
      {layout === "dual" ? (
        <div className="screen-section__dual">
          <Mockup src={images?.[0]} alt={title} />
          <Mockup src={images?.[1]} alt={title} />
        </div>
      ) : layout === "left" || layout === "right" ? (
        <div className={`screen-section__row${layout === "right" ? " screen-section__row--reverse" : ""}`}>
          <div className="screen-section__mockup">
            <Mockup src={images?.[0]} alt={title} />
          </div>
          <KeyDesignDecision items={decision} />
        </div>
      ) : (
        <div className="screen-section__centered">
          <Mockup src={images?.[0]} alt={title} />
        </div>
      )}

      {callouts && <NumberedCallouts items={callouts} />}
    </div>
  );
}

export default ScreenSection;
