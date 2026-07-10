import { useEffect, useRef, useState } from "react";
import { navItems } from "../data/sections";
import "./SideNav.css";

const ICONS = {
  "part-1": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="20" y1="20" x2="16.65" y2="16.65" />
    </svg>
  ),
  "part-2": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2.5h8l4 4v15H6z" />
      <path d="M14 2.5v4h4" />
      <line x1="9" y1="12" x2="15" y2="12" />
      <line x1="9" y1="16" x2="15" y2="16" />
    </svg>
  ),
  "part-3": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="4" width="8" height="8" rx="1.5" />
      <rect x="13" y="4" width="8" height="5" rx="1.5" />
      <rect x="13" y="11" width="8" height="9" rx="1.5" />
      <rect x="3" y="14" width="8" height="6" rx="1.5" />
    </svg>
  ),
};

function SideNav() {
  const [activeId, setActiveId] = useState(navItems[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    const targets = navItems
      .map((item) => document.getElementById(item.targetId))
      .filter(Boolean);

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    targets.forEach((target) => observerRef.current.observe(target));

    return () => observerRef.current?.disconnect();
  }, []);

  const handleClick = (targetId) => (event) => {
    event.preventDefault();
    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="side-nav" aria-label="Case study sections">
      <ul className="side-nav__list">
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.targetId}`}
              className={`side-nav__link${activeId === item.id ? " is-active" : ""}`}
              onClick={handleClick(item.targetId)}
            >
              <span className="side-nav__icon-holder">
                <span className="side-nav__icon">{ICONS[item.id]}</span>
              </span>
              <span className="side-nav__label">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav;
