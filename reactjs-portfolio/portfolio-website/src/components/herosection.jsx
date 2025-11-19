// src/components/HeroSection.jsx
import React from 'react';
import { personalInfo } from '../data';

import profilePhoto from '../assets/images/profile_momo.jpg'; 

const HeroSection = () => {
  return (
    <div id="home" className="hero min-h-[85vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        
       
        <div className="avatar mb-6 lg:mb-0">
          <div className="w-52 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={profilePhoto} alt={personalInfo.name} /> 
          </div>
        </div>

        <div>
          <p className="text-xl text-primary font-semibold mb-3">Hi, I'm</p>
          <h1 className="text-5xl font-bold">{personalInfo.name}</h1>
          <p className="py-6 text-2xl text-secondary">
            {personalInfo.tagline}
          </p>
          <a href="#projects" className="btn btn-primary mr-4">VIEW MY WORK</a>
          <a href={personalInfo.cvLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline">DOWNLOAD CV</a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;