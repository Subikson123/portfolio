import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [photo, setPhoto] = useState('/profile.jpg');
  const [showUpload, setShowUpload] = useState(false);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setShowUpload(false);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="profile-container">
          <div className="profile-image-wrapper" onClick={() => setShowUpload(!showUpload)}>
            <img
              src={photo}
              alt="Profile"
              className="profile-image"
              title="Click to upload your photo"
            />
            {showUpload && (
              <div className="upload-overlay">
                <label className="upload-label">
                  Click to upload
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoChange}
                    style={{ display: 'none' }}
                  />
                </label>
              </div>
            )}
          </div>
        </div>

        <div className="hero-copy">
          <span className="hero-subtitle">WELCOME</span>
          <h1>Hiii, I'm Subikson M.</h1>
          <p className="hero-description">
            A Motivated Computer Science Engineering student with a steady base in programming, web development, and
            problem-solving. I enjoy learning new tools and building simple, useful solutions that make a real impact.
          </p>

          <div className="tech-chips">
            <span>React.js</span>
            <span>Python</span>
            <span>Java</span>
            <span>MySQL</span>
            <span>Full Stack</span>
            <span>Chennai, India</span>
          </div>

          <div className="contact-cta">
            <a href="mailto:subiksonsubikson1@gmail.com" className="cta-btn primary-btn">
              <FaEnvelope /> Get in touch
            </a>
            <a href="https://github.com/Subikson123" target="_blank" rel="noopener noreferrer" className="cta-btn outline-btn">
              <FaGithub /> GitHub
            </a>
            <a href="https://linkedin.com/in/subikson-m-4170aa293/" target="_blank" rel="noopener noreferrer" className="cta-btn outline-btn">
              <FaLinkedin /> LinkedIn
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-block">
              <span className="stat-number">3</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">2</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">8.4</span>
              <span className="stat-label">GPA</span>
            </div>
            <div className="stat-block">
              <span className="stat-number">3</span>
              <span className="stat-label">Certifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;