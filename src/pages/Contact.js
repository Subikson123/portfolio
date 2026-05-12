import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const contacts = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'subiksonsubikson1@g.com',
      link: 'mailto:subiksonsubikson1@gmail.com'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Click here',
      link: 'https://www.linkedin.com/in/subikson-m-4170aa293/'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'Click here',
      link: 'https://github.com/Subikson123'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Open chat',
      link: 'https://wa.me/6381869419'
    }
  ];

  return (
    <section id="contact" className="contact-section">
      <h2>Get In Touch</h2>
      <p className="contact-intro">
        I'd love to hear from you! Reach out through any of these channels.
      </p>
      <div className="contact-grid">
        {contacts.map((item, idx) => {
          const Icon = item.icon;
          return (
            <a 
              key={idx} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contact-card"
            >
              <div className="contact-icon">
                <Icon />
              </div>
              <h3>{item.label}</h3>
              <p>{item.value}</p>
              <div className="arrow">→</div>
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Contact;
