import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetails from './components/ProjectDetails';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GeminiChat from './components/GeminiChat';
import { Project } from './types';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavReset = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-dark min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar onNavClick={handleNavReset} />
      
      <main>
        {selectedProject ? (
          <ProjectDetails 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        ) : (
          <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects onProjectSelect={setSelectedProject} />
            <Certifications />
            <Contact />
          </>
        )}
      </main>

      <Footer />
      <GeminiChat />
    </div>
  );
};

export default App;