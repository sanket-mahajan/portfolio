import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Portfolio</h1>
          <nav>
            <ul>
              <li>
                <button onClick={() => scrollToSection("home")}>Home</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")}>About</button>
              </li>
              <li>
                <button onClick={() => scrollToSection("projects")}>
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")}>
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App;
