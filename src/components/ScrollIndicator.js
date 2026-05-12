import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';

const sections = ['home', 'about', 'skills', 'projects', 'contact', 'resume'];

const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="scroll-indicator">
      {sections.map((section) => (
        <div
          key={section}
          className={`scroll-dot ${activeSection === section ? 'active' : ''}`}
          onClick={() => scrollToSection(section)}
          title={section.charAt(0).toUpperCase() + section.slice(1)}
        ></div>
      ))}
    </div>
  );
};

export default ScrollIndicator;
