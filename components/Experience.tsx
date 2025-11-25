import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Visual Composition (Overlapping Images) */}
        <div className="relative h-[600px] hidden lg:block">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Back Image (Code/Dev Focus) */}
            <div className="absolute top-0 left-0 w-4/5 h-4/5 z-10">
                <img 
                   src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop" 
                   alt="Software Development" 
                   className="w-full h-full object-cover rounded-2xl border border-gray-800 shadow-2xl opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                />
            </div>

            {/* Front Image (Overlay - Collaboration/Professional) */}
            <div className="absolute bottom-12 right-0 w-3/5 h-[300px] z-20">
                 <img 
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2340&auto=format&fit=crop" 
                    alt="Team Collaboration" 
                    className="w-full h-full object-cover rounded-2xl border-2 border-gray-800 shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                 />
                 {/* Decorative Accent on Front Image */}
                 <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl -z-10"></div>
            </div>

            {/* Floating Experience Badge (Animation Removed) */}
            <div className="absolute top-1/2 right-12 z-30 bg-card p-4 rounded-xl border-l-4 border-primary shadow-xl">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                        <Briefcase size={18} className="text-primary" />
                    </div>
                    <div>
                        <p className="text-white font-bold text-lg">3+ Years</p>
                        <p className="text-gray-400 text-xs uppercase tracking-wider">Experience</p>
                    </div>
                 </div>
            </div>
        </div>

        {/* Right Side: Timeline Content */}
        <div className="space-y-12">
           <div className="text-left">
              <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Career Path</h4>
              <h2 className="text-4xl font-display font-bold text-white">Work Experience</h2>
              <p className="text-gray-400 mt-4 leading-relaxed max-w-lg">
                 My professional journey in software engineering, delivering impactful solutions and growing technically in challenging environments.
              </p>
           </div>

           <div className="relative border-l-2 border-gray-800 ml-3 space-y-12">
             {experience.map((job, index) => (
                <div key={index} className="relative pl-8 md:pl-12 group">
                   {/* Timeline Dot */}
                   <span className="absolute -left-[9px] top-0 h-5 w-5 rounded-full border-4 border-dark bg-primary group-hover:bg-secondary transition-colors duration-300"></span>
                   
                   <div className="space-y-4">
                      {/* Header Info */}
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary transition-colors">{job.position}</h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                            <span className="text-secondary font-medium">{job.company}</span>
                            <span className="text-gray-600">•</span>
                            <span className="text-gray-400">{job.location}</span>
                            <span className="ml-auto md:ml-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold border border-primary/20">{job.duration}</span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="bg-card p-6 rounded-xl border border-gray-800 shadow-lg hover:border-primary/30 transition-all duration-300 group-hover:translate-x-1">
                          <ul className="space-y-3">
                             {job.responsibilities.map((resp, idx) => (
                               <li key={idx} className="flex items-start gap-3 text-gray-400 text-sm leading-relaxed">
                                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0 opacity-50"></span>
                                  {resp}
                               </li>
                             ))}
                          </ul>
                      </div>
                   </div>
                </div>
             ))}
           </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;