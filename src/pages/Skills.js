import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Java', 'C', 'Python']
    },
    {
      category: 'Web Technologies',
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'MySQL']
    },
    {
      category: 'Tools & Concepts',
      skills: ['VS Code', 'GitHub', 'Streamlit', 'Data Structures', 'OOP', 'DBMS']
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, idx) => (
          <div key={idx} className="skill-category">
            <h3>{category.category}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, i) => (
                <li key={i} className="skill-item">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
