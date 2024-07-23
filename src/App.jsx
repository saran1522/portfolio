import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(false);
  function handleThemeChange() {
    setIsDark((prevIsDark) => !prevIsDark);
  }
  return (
    // <div className={`${isDark ? "dark" : ""} bg-[#f2f9f9] dark:bg-primary-600`}>
    <div
      className={`${isDark ? "dark" : ""} bg-white font-CF dark:bg-primary-600`}
    >
      <Header isDark={isDark} handleThemeChange={handleThemeChange} />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
