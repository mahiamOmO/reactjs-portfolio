// src/components/AboutMe.jsx
import React from 'react';
import { personalInfo, experiences } from '../data'; 

const AboutMe = () => {
  return (
    <section id="about" className="py-16 bg-base-300">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          ABOUT ME 
        </h2>
        
        <div className="card bg-base-100 shadow-xl p-8">
          <p className="text-lg mb-6 text-justify">
            Hello! I am **{personalInfo.name}**, a passionate {personalInfo.tagline.toLowerCase()} focused on creating clean, efficient, and user-friendly web applications. I thrive on solving complex problems and constantly exploring new technologies in the JavaScript ecosystem. My expertise lies in turning design concepts into pixel-perfect, responsive interfaces.
          </p>
          
          <div className="divider text-lg font-semibold text-secondary">WORK EXPERIENCE</div>

          {/* Experience Timeline/List */}
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {experiences.map((exp, index) => (
              <li key={exp.id}>
                {index > 0 && <hr />}
                <div className="timeline-middle">
                  {/* DaisyUI Timeline Icon */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 text-primary"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v4.25h-4.25a.75.75 0 000 1.5h5.5a.75.75 0 00.75-.75v-5.5z" clipRule="evenodd" /></svg>
                </div>
                {index < experiences.length - 1 && <hr />}
                <div className={`timeline-box p-4 rounded-lg shadow-md mb-8 ${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end'}`}>
                  <time className="font-mono italic text-sm text-gray-500">{exp.duration}</time>
                  <div className="text-xl font-black">{exp.title} at {exp.company}</div>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;