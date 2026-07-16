import SideNav from "./components/SideNav";
import Section from "./components/Section";
import TransitionScreen from "./components/TransitionScreen";
import WorkflowAnalysis from "./components/WorkflowAnalysis";
import StakeholderEcosystem from "./components/StakeholderEcosystem";
import CompetitorAnalysis from "./components/CompetitorAnalysis";
import Personas from "./components/Personas";
import Features from "./components/Features";
import VideoPlaceholder from "./components/VideoPlaceholder";
import DesignPrinciples from "./components/DesignPrinciples";
import ScreenSection from "./components/ScreenSection";
import { partI, partII, partIII } from "./data/sections";
import { screenContent } from "./data/screenContent";
import "./App.css";

const sectionContent = {
  "part1-problem-statement": {
    centered: true,
    hideTitle: true,
    verticalCenter: true,
    height: "100vh",
    body: (
      <>
        <p className="problem-statement__eyebrow">Problem statement</p>
        <p className="problem-statement__text">
          Agricultural co-operatives coordinate buyers, farmers, inventory,
          logistics, and payments across multiple stakeholders. As operations
          scale, manual coordination, fragmented communication, and
          disconnected workflows make order fulfillment difficult to manage.
        </p>
        <p className="problem-statement__eyebrow problem-statement__eyebrow--spaced">Goal</p>
        <p className="problem-statement__text">
          To design a digital platform that streamlines end-to-end
          fulfillment while improving visibility, coordination, and
          operational efficiency for co-op managers, farmers, and buyers.
        </p>
      </>
    ),
  },
  "part1-current-workflow-analysis": {
    body: <WorkflowAnalysis />,
  },
  "part1-stakeholder-ecosystem": {
    body: <StakeholderEcosystem />,
  },
  "part1-competitor-analysis": {
    body: <CompetitorAnalysis />,
  },
  "part2-target-users": {
    body: <Personas />,
  },
  "part2-key-feature-functionalities": {
    body: <Features />,
  },
  "part2-critical-user-flows": {
    body: (
      <div className="flow-stack">
        <div className="flow-block">
          <h3>Flow 1: Order Fulfillment (primary)</h3>
          <p>
            <strong>User Goal:</strong> I want to manage a buyer's order from
            allocation to settlement so that every stage is completed
            efficiently and all stakeholders remain aligned.
          </p>
          <img className="flow-image" src="/Images/Flow%201.png" alt="Flow 1: Order fulfillment diagram" />
        </div>

        <div className="flow-block">
          <h3>Flow 2: Finance settlement</h3>
          <p>
            <strong>User Goal:</strong> I want to monitor settlements and
            payments so that financial records remain accurate and transparent.
          </p>
          <img className="flow-image" src="/Images/Flow%202.png" alt="Flow 2: Finance settlement diagram" />
        </div>

        <div className="flow-block">
          <h3>Flow 3: Update Inventory</h3>
          <p>
            <strong>User Goal:</strong> I want to update my available produce
            quickly so that buyers and the co-op always see accurate inventory.
          </p>
          <img className="flow-image" src="/Images/Flow%203.png" alt="Flow 3: Update inventory diagram" />
        </div>

        <div className="flow-block">
          <h3>Flow 4: Place bulk order</h3>
          <p>
            <strong>User Goal:</strong> I want to place a bulk produce order
            with confidence so that I know it can be fulfilled.
          </p>
          <img className="flow-image" src="/Images/Flow%204.png" alt="Flow 4: Place bulk order diagram" />
        </div>
      </div>
    ),
  },
  "part3-design-principles": {
    verticalCenter: true,
    body: <DesignPrinciples />,
  },
  ...Object.fromEntries(
    Object.entries(screenContent).map(([id, { layout, decision, callouts, height, images }]) => [
      id,
      { height, body: <ScreenSection layout={layout} decision={decision} callouts={callouts} images={images} /> },
    ])
  ),
};

function App() {
  return (
    <div className="app">
      <SideNav />
      <main className="app__main">
        <Section id="agriflow" title="Agriflow" titleCentered>
          <VideoPlaceholder />
        </Section>

        <TransitionScreen id="transition-part-1" part="Part I" label="Research and insights" />

        <div id="part-1" className="part">
          {partI.map((section) => {
            const extra = sectionContent[section.id];
            return (
              <Section
                key={section.id}
                id={section.id}
                title={extra?.hideTitle ? "" : section.title}
                centered={extra?.centered}
                verticalCenter={extra?.verticalCenter}
                height={extra?.height}
              >
                {extra?.body}
              </Section>
            );
          })}
        </div>

        <TransitionScreen id="transition-part-2" part="Part II" label="Product Requirement Document" />

        <div id="part-2" className="part">
          {partII.map((section) => {
            const extra = sectionContent[section.id];
            return (
              <Section
                key={section.id}
                id={section.id}
                title={section.title}
                variant={extra?.variant}
              >
                {extra?.body}
              </Section>
            );
          })}
        </div>

        <TransitionScreen id="transition-part-3" part="Part III" label="UI/UX" />

        <div id="part-3" className="part">
          {partIII.map((section) => {
            const extra = sectionContent[section.id];
            return (
              <Section
                key={section.id}
                id={section.id}
                title={section.title}
                variant={extra?.variant}
                height={extra?.height}
                verticalCenter={extra?.verticalCenter}
              >
                {extra?.body}
              </Section>
            );
          })}
        </div>

        <Section id="closing-note" variant="divider">
          <p className="closing-note__label">Closing note</p>
          <p className="closing-note__text">
            Designing for agricultural operations wasn't simply about
            digitizing existing processes. It was about simplifying complex
            operational workflows, increasing transparency across
            stakeholders, and helping teams make confident decisions.
          </p>
          <p className="closing-note__text">
            Working on this assignment gave me a deeper appreciation for the
            complexity behind agricultural supply chains. It was an engaging
            problem space that challenged me to think beyond individual
            screens and design for people, processes, and collaboration.
          </p>
          <p className="closing-note__signoff">— Anjali Singh</p>
        </Section>
      </main>
    </div>
  );
}

export default App;
