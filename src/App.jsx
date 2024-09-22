import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Reports from "./components/Reports";

function App() {
  const [isDark, setIsDark] = useState(false);
  function handleThemeChange() {
    setIsDark((prevIsDark) => !prevIsDark);
  }
  return (
    <div
      className={`${isDark ? "dark" : ""} h-full bg-[#f9fefa] dark:bg-zinc-900`}
    >
      <div id="home">
        <Navbar isDark={isDark} handleThemeChange={handleThemeChange} />
        <Hero />
      </div>
      {/* <Projects /> */}
      <div id="projects">
        <Reports />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
