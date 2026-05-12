import React from 'react';
import './App.css';
import './animations.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollIndicator from './components/ScrollIndicator';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollIndicator />
      <main style={{ paddingBottom: '4rem' }}>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="resume">
          <Resume />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
