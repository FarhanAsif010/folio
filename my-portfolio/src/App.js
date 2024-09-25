import React, { useRef } from 'react';
import Header from './components/Header.js';
import Portfolio from './portfolio.js';
import AboutMe from './components/AboutMe.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'Home':
        homeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'About Me':
        aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Projects':
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'Contact':
        contactRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Header scrollToSection={scrollToSection} />
      <div ref={homeRef}>
        <Portfolio />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
    </div>
  );
}

export default App;
