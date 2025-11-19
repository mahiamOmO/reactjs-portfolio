// src/components/Footer.jsx
import React from 'react';
import { personalInfo } from '../data';

// SVG Icons for Social Links
const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const GitHubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 3 5.47 5.47 0 0 0 18 1.5c-1.2 0-2.35.25-3.35.87A7.26 7.26 0 0 0 12 2a7.26 7.26 0 0 0-2.65.75C8.35 1.75 7.2 1.5 6 1.5a5.47 5.47 0 0 0-1.91 1.77 5.07 5.07 0 0 0-.09 1.77A5.44 5.44 0 0 0 2 9c0 5.46 3.3 6.65 6.44 7A3.37 3.37 0 0 0 9 19v3"></path></svg>
);


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    // DaisyUI Footer component
    <footer className="footer footer-center p-10 bg-base-300 text-base-content rounded mt-auto">
      
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover text-lg">ABOUT ME</a>
        <a href="#skills" className="link link-hover text-lg">SKILLS</a>
        <a href="#projects" className="link link-hover text-lg">PROJECTS</a>
        <a href={`mailto:${personalInfo.email}`} className="link link-hover text-lg">CONTACT</a>
      </nav>
      
      {/* Social Icons */}
      <nav>
        <div className="grid grid-flow-col gap-4">
          
          {/* LinkedIn */}
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
             className="text-4xl hover:text-primary transition-colors">
            <LinkedInIcon />
          </a>
          
          {/* GitHub */}
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" 
             className="text-4xl hover:text-primary transition-colors">
            <GitHubIcon />
          </a>
          
        </div>
      </nav>
      
      {/* Copyright Info */}
      <aside>
        <p>
          COPYRIGHT © {currentYear} - ALL RIGHTS RESERVED BY **{personalInfo.name}**
        </p>
      </aside>
    </footer>
  );
};

export default Footer;