import React, { useState } from "react";
import Header from "./components/Header";
import MenuBar from "./components/MenuBar";
import ImageCarousel from "./components/ImageCarousel";
import BoringFacts from "./components/BoringFacts";
import FunFacts from "./components/FunFacts";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("coolImages");

  const showSection = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Header />
      <MenuBar showSection={showSection} />
      {activeSection === "coolImages" && <ImageCarousel />}
      {activeSection === "boringFacts" && <BoringFacts />}
      {activeSection === "funFacts" && <FunFacts />}
      <Footer />
    </div>
  );
}

export default App;
