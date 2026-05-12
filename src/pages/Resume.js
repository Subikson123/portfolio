import React from 'react';
import './Resume.css';

const Resume = () => {
  return (
    <section className="resume-section">
      <h2>Experience & Education</h2>
      
      <div className="resume-content">
        <div className="resume-block">
          <h3>Internships</h3>
          <div className="resume-item">
            <h4>Full Stack and Data Privacy — Evalbench</h4>
            <p>Gained hands-on experience in full-stack development and data privacy, working on real world web applications at Evalbench Technologies.</p>
          </div>
          <div className="resume-item">
            <h4>Front End Web Development — Infosmite</h4>
            <p>Worked on front-end development tasks using HTML, CSS, and JavaScript. Assisted in creating responsive user interfaces and improving website UI/UX.</p>
          </div>
        </div>

        <div className="resume-block">
          <h3>Education</h3>
          <div className="resume-item">
            <h4>BE Computer Science — Francis Xavier Engineering College</h4>
            <p><strong>Duration:</strong> 2023 – 2027 | <strong>GPA:</strong> 8.4/10.0</p>
          </div>
          <div className="resume-item">
            <h4>HSC — Muhyiddeen Matric Hr Sec School</h4>
            <p>2021 – 2023</p>
          </div>
          <div className="resume-item">
            <h4>SSLC — Annammal Matric Sec School</h4>
          </div>
        </div>

        <div className="resume-block">
          <h3>Certifications</h3>
          <div className="resume-item">
            <p>• NPTEL: Introduction to Industry 4.0 and Industrial Internet of Things – Elite Silver</p>
            <p>• ORACLE: Java Programming</p>
            <p>• CISCO: Networking Essentials, CCNA: Introduction to Network</p>
          </div>
        </div>
      </div>

      <div className="resume-download">
        <p>Download my complete resume to view detailed information about my work experience and skills.</p>
        <a href="/resume.pdf" download="Subikson_M_Resume.pdf" className="resume-link">
          📥 Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;