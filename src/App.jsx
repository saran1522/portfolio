import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useState } from "react";
// import Reports from "./components/Projects";

function App() {
  const [isDark, setIsDark] = useState(true);
  function handleThemeChange() {
    setIsDark((prevIsDark) => !prevIsDark);
  }
  return (
    <div
      className={`${isDark ? "dark" : ""} h-full bg-[#f9fefa] font-IN font-light text-gray-600 dark:bg-black dark:text-slate-600`}
    >
      <div id="home">
        <Navbar isDark={isDark} handleThemeChange={handleThemeChange} />
        <Hero />
      </div>
      <div id="projects">
        <Projects />
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
