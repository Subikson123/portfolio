import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">Subikson M</div>
      <ul className="nav-links">
        <li><a href="#home" onClick={() => scrollToSection('home')}>Home</a></li>
        <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
        <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
        <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
        <li><a href="#contact" onClick={() => scrollToSection('contact')}>Contact</a></li>
        <li><a href="#resume" onClick={() => scrollToSection('resume')}>Resume</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;