import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home-container">
      <section className="intro-section">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Hello! I'm Sanket, a passionate developer with a love for creating
          beautiful and functional web applications. Explore my projects and get
          to know more about me.
        </p>
        <div className="buttons">
          <a href="/about" className="btn">
            Learn More About Me
          </a>
          <a href="/projects" className="btn">
            View My Projects
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;
