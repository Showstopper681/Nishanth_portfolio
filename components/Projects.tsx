import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { ArrowUpRight, ChevronDown, ChevronUp } from 'lucide-react';
import { Project } from '../types';

interface ProjectsProps {
  onProjectSelect: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onProjectSelect }) => {
  const { projects } = PORTFOLIO_DATA;
  const [showAll, setShowAll] = useState(false);

  // Map relevant images to projects based on index or name logic
  const getProjectImage = (index: number) => {
    switch (index) {
      case 0: // Food / Kitchen
        return "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop";
      case 1: // Risk/Finance
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
      case 2: // Corporate / AI Website
        return "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop";
      case 3: // Worklog Dashboard
        return "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop";
      default:
        return "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop";
    }
  };

  const visibleProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <section id="projects" className="pt-24 pb-8 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
           <div>
             <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Latest Works</h4>
             <h2 className="text-4xl font-display font-bold text-white">Transforming Ideas Into <br/> Exceptional <span className="text-secondary">Reality</span></h2>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           {visibleProjects.map((project, index) => (
             <div key={index} className="group flex flex-col h-full relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 animate-fade-in-up">
                
                {/* Image Placeholder Area */}
                <div className="h-64 bg-gray-800 relative overflow-hidden shrink-0">
                   <img 
                      src={getProjectImage(index)} 
                      alt={project.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent pointer-events-none"></div>
                   
                   <div className="absolute top-4 right-4">
                      <span className="px-4 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {project.role}
                      </span>
                   </div>
                </div>

                <div className="p-8 relative flex flex-col flex-grow">
                   <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                     {project.name}
                   </h3>
                   <p className="text-gray-400 text-sm leading-relaxed mb-6 h-20 overflow-hidden">
                     {project.description}
                   </p>

                   <div className="space-y-2 mb-6">
                     <p className="text-gray-500 text-xs uppercase tracking-wider font-bold">Key Contributions</p>
                     <ul className="text-gray-400 text-sm space-y-1">
                       {project.responsibilities.slice(0, 2).map((r, i) => (
                         <li key={i} className="flex items-start gap-2">
                           <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-1.5 shrink-0"></span>
                           <span className="line-clamp-2">{r}</span>
                         </li>
                       ))}
                     </ul>
                   </div>

                   <button 
                    onClick={(e) => {
                      e.preventDefault();
                      onProjectSelect(project);
                    }} 
                    className="mt-auto w-full py-3 bg-gray-800 hover:bg-gray-700 text-white hover:text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer border border-transparent hover:border-gray-600 group-hover:shadow-[0_0_15px_rgba(19,155,253,0.1)]"
                   >
                      See Details <ArrowUpRight size={16} />
                   </button>
                </div>
             </div>
           ))}
        </div>

        {projects.length > 2 && (
          <div className="mt-12 text-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-8 py-3 bg-transparent border border-primary text-primary hover:bg-primary hover:text-white rounded-full font-bold transition-all duration-300 hover:shadow-[0_0_20px_rgba(19,155,253,0.3)] cursor-pointer"
            >
              {showAll ? 'Show Less' : 'View More Projects'}
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;