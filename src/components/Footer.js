import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://linkedin.com/in/subikson-m-4170aa293/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Subikson123" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://wa.me/6381869419" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
};

export default Footer;