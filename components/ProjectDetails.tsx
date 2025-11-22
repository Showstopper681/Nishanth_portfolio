import React, { useEffect } from 'react';
import { Project } from '../types';
import { ArrowLeft, CheckCircle, Server, Layout, Database } from 'lucide-react';

interface ProjectDetailsProps {
  project: Project;
  onBack: () => void;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ project, onBack }) => {
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isFoodProject = project.name.toLowerCase().includes('food');
  
  // Match images with Projects component
  const imageUrl = isFoodProject 
    ? "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop"
    : "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // 1. Close the project view logic (provided by parent)
    onBack();
    
    // 2. Wait for the main page to render, then scroll to contact section
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-dark pt-24 pb-12 animate-fade-in-up">
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </button>

        {/* Hero Image */}
        <div className="w-full h-[400px] rounded-3xl overflow-hidden mb-12 border border-gray-800 relative group">
          <img 
            src={imageUrl} 
            alt={project.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8">
            <span className="px-4 py-1 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider shadow-lg mb-4 inline-block">
               {project.role}
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white shadow-black drop-shadow-lg">
              {project.name}
            </h1>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Details */}
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Key Responsibilities</h3>
              <div className="bg-card rounded-2xl p-8 border border-gray-800">
                <ul className="space-y-4">
                  {project.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                        <CheckCircle size={14} className="text-primary" />
                      </div>
                      <span className="text-gray-300">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Tech Stack & Role Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-2xl p-6 border border-gray-800">
               <h4 className="text-white font-bold mb-4 border-b border-gray-700 pb-2">Tech Stack Used</h4>
               
               <div className="space-y-4">
                  <div className="flex items-center gap-3">
                     <Layout size={20} className="text-secondary" />
                     <div>
                       <span className="text-sm text-gray-500 block">Frontend</span>
                       <span className="text-white font-medium">Angular, PrimeNG</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Server size={20} className="text-primary" />
                     <div>
                       <span className="text-sm text-gray-500 block">Backend</span>
                       <span className="text-white font-medium">Java Spring Boot</span>
                     </div>
                  </div>
                  <div className="flex items-center gap-3">
                     <Database size={20} className="text-white" />
                     <div>
                       <span className="text-sm text-gray-500 block">Database</span>
                       <span className="text-white font-medium">SQL (MySQL/PostgreSQL)</span>
                     </div>
                  </div>
               </div>
            </div>

            <div className="bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-2xl p-6 border border-primary/30">
              <h4 className="text-white font-bold mb-2">Need a similar project?</h4>
              <p className="text-gray-400 text-sm mb-4">I can help build scalable full-stack applications tailored to your needs.</p>
              <a 
                href="#contact" 
                onClick={handleContactClick}
                className="block w-full py-3 text-center bg-primary text-white rounded-lg font-bold hover:bg-blue-600 transition-colors cursor-pointer"
              >
                Contact Me
              </a>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;