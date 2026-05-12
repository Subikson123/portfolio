import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section">
      <h2>About Me</h2>
      <div className="about-cards">
        <div className="about-card about-card--wide">
          <h3>Who I am</h3>
          <p>
            I'm a 3rd-year Computer Science Engineering student at Francis Xavier Engineering College (2023–2027),
            passionate about building simple, useful solutions that make a real impact. With a strong foundation in
            programming and web development, I enjoy learning new tools and turning ideas into working products —
            whether that's a voice-powered AI chatbot or a fully responsive e-commerce site.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;