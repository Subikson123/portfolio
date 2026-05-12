import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectList = [
    {
      title: 'AI-Powered SQL Database Chatbot',
      description: 'An AI-powered SQL database chatbot with voice input and output, allowing users to interact with databases using natural language. Features include AI-generated SQL queries, and seamless voice communication for an enhanced user experience.',
      tech: ['Python', 'Streamlit', 'MySQL', 'AI/NLP'],
      github: 'https://github.com/Subikson123',
      demo: '#'
    },
    {
      title: 'E-Commerce Website',
      description: 'E-Commerce website developed using HTML, CSS, and React.js featuring responsive design, interactive UI, and basic shopping functionalities like product listing and cart management.',
      tech: ['HTML', 'CSS', 'React.js'],
      github: 'https://github.com/Subikson123',
      demo: '#'
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with HTML, CSS, and React.js showcasing projects, skills, and contact information with a clean and responsive design.',
      tech: ['HTML', 'CSS', 'React.js'],
      github: 'https://github.com/Subikson123',
      demo: '#'
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, idx) => (
          <div key={idx} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <div className="tech-stack">
              {proj.tech.map((tech, i) => (
                <span key={i} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} target="_blank" rel="noopener noreferrer" className="link-btn github-btn">
                <FaGithub /> Code
              </a>
              <a href={proj.demo} target="_blank" rel="noopener noreferrer" className="link-btn demo-btn">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
