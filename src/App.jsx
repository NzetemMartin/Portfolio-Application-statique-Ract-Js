import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import About from "./sections/About";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      <Navbar />
      <main>
        <Home />
        <Projects />
        <Skills />
        <Education />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
