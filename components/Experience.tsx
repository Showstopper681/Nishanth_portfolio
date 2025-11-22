import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const { experience } = PORTFOLIO_DATA;

  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h4 className="text-primary font-bold tracking-widest uppercase mb-2">Career Path</h4>
          <h2 className="text-4xl font-display font-bold text-white">Work Experience</h2>
        </div>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent">
          
          {experience.map((job, index) => (
            <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              
              {/* Icon */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-700 bg-card shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                 <Briefcase size={18} className="text-primary" />
              </div>
              
              {/* Card */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-card p-6 rounded-xl border border-gray-800 shadow-xl hover:border-primary/50 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display font-bold text-xl text-white">{job.position}</h3>
                  <span className="text-xs font-medium px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20">{job.duration}</span>
                </div>
                <div className="text-secondary font-medium mb-4 flex items-center gap-2 text-sm">
                   {job.company} <span className="text-gray-600">•</span> {job.location}
                </div>
                <ul className="space-y-2 text-gray-400 text-sm list-disc list-inside">
                   {job.responsibilities.map((resp, idx) => (
                     <li key={idx}>{resp}</li>
                   ))}
                </ul>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Experience;
