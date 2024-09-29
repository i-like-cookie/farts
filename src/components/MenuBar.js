import React from "react";

function MenuBar({ showSection }) {
  return (
    <nav className="menu-bar">
      <ul>
        <li>
          <button onClick={() => showSection("coolImages")}>Cool Images</button>
        </li>
        <li>
          <button onClick={() => showSection("boringFacts")}>
            Boring Scientific Facts
          </button>
        </li>
        <li>
          <button onClick={() => showSection("funFacts")}>Fun Facts</button>
        </li>
      </ul>
    </nav>
  );
}

export default MenuBar;
