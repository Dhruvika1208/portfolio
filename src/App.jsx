import React from 'react';
import BackgroundCanvas from './components/BackgroundCanvas';
import CursorGlow from './components/CursorGlow';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Education from './components/Education';
import Certifications from './components/Certifications';
import CodingProfiles from './components/CodingProfiles';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative selection:bg-purple-500/30 selection:text-purple-300">
      {/* Background canvas particle effect */}
      <BackgroundCanvas />

      {/* Ambient cursor glow */}
      <CursorGlow />

      {/* Header navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="relative z-10 space-y-0">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Education />
        <Certifications />
        <CodingProfiles />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
