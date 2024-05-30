import React from "react";
import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects-container">
      <section className="project-section">
        <h2>Projects</h2>
        <div className="project">
          <h3> AI-based-Creative-Cooking-Web-Application</h3>
          <p>
            This project is a web application that generates creative and unique
            recipes based on user input. Built with React, it provides an
            engaging interface for users to explore new culinary ideas.
          </p>
          <p>
            <strong>Technologies:</strong> React,Gemini API
          </p>
          <a
            href="https://creativerecipe.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
        <div className="project">
          <h3>Expense Tracker App</h3>
          <p>
            This is an Expense Tracker Application built using React. It allows
            users to track their expenses by adding, viewing, and deleting
            expense entries.
          </p>
          <p>
            <strong>Technologies:</strong> HTML, CSS, React
          </p>
          <a
            href="https://github.com/sanket-mahajan/Expense-Tracker"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </section>
    </div>
  );
}

export default Projects;
