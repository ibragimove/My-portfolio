import React from 'react';
import { Navbar, Footer } from './components';
import {
  Hero,
  About,
  Skills,
  Projects,
  Experience,
  Achievements,
  Contact,
} from './sections';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-bg text-content font-sans transition-colors duration-normal selection:bg-accent selection:text-accent-contrast">
      {/* Sticky Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 01. Homepage Hero Section */}
        <Hero />

        {/* 02. About Section */}
        <About />

        {/* 03. Technical Skills Section */}
        <Skills />

        {/* 04. Featured Projects Section */}
        <Projects />

        {/* 05. Professional Experience Section */}
        <Experience />

        {/* 06. Achievements & Academic Profile Section */}
        <Achievements />

        {/* 07. Contact Section */}
        <Contact />
      </main>

      {/* Global Footer with Back-To-Top */}
      <Footer />
    </div>
  );
}

export default App;
