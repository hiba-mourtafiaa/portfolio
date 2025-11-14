import React from "react";
import "./Project.css";

const projects = [
  {
    stack: "Restaurant.html",
    title: "Bot boilerplate",
    description:
      "Start creating scalable discord.js bots with TypeScript in seconds.",
    link: "https://github.com/hiba-mourtafiaa/Restaurant", 
  },
];

const Project = () => {
  return (
    <section className="projects-section" id="project">
      <div className="three">
        <h1>Projects</h1>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-stack">{project.stack}</div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <a
              href={project.link}
              className="github-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github ↔
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
