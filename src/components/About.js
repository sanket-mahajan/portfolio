import React from "react";
import "../styles/About.css";

function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <div className="bio">
          <h2>About Me</h2>
          <p>
            Hello! I'm Sanket, a passionate web developer with a love for
            creating dynamic and responsive web applications. With a strong
            foundation in both front-end and back-end technologies, I strive to
            build seamless and user-friendly experiences.
          </p>
          <p>
            I have experience working with a variety of programming languages
            and frameworks, and I am always eager to learn and adopt new
            technologies. My goal is to continuously improve my skills and
            contribute to impactful projects.
          </p>
        </div>
        <div className="skills">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Java</li>
            <li>HTML & CSS</li>
            <li>Springboot</li>
            <li>SQL</li>
            <li>Git & GitHub</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default About;
