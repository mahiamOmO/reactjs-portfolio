// src/components/Projects.jsx
import React from 'react';
import { projects } from '../data'; // Use '../data'

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          FEATURED PROJECTS 💡
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
              {/* Image Placeholder: Uncomment and replace with actual image path later */}
              {/* <figure>
                  <img src={`/assets/images/${project.image}`} alt={project.title} />
              </figure>
              */}
              
              <div className="card-body">
                <h3 className="card-title text-2xl text-primary">{project.title}</h3>
                <p className="text-sm text-gray-500">{project.description}</p>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 my-3">
                  {project.techs.map((tech, index) => (
                    <div key={index} className="badge badge-outline">{tech}</div>
                  ))}
                </div>

                {/* Links */}
                <div className="card-actions justify-end mt-4">
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                    LIVE DEMO
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline">
                    GITHUB
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;