import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 bg-dark relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
           <h4 className="text-secondary font-bold tracking-widest uppercase mb-2">Achievements</h4>
           <h2 className="text-4xl font-display font-bold text-white">
             Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Certifications</span>
           </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Oracle Certification Card */}
          <div className="group relative bg-card p-8 rounded-2xl border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,155,253,0.1)]">
            <div className="absolute top-0 right-0 bg-gradient-to-l from-primary/10 to-transparent w-32 h-full rounded-r-2xl"></div>
            
            <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center shrink-0 shadow-lg">
                <Award className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  Oracle Certified Associate
                </h3>
                <p className="text-secondary font-medium mb-3">Java SE 8 Programmer</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Validated expertise in Java programming language fundamentals, object-oriented programming, and API utilization.
                </p>
              </div>
            </div>
          </div>

          {/* Cybersecurity Internship Card */}
          <div className="group relative bg-card p-8 rounded-2xl border border-gray-800 hover:border-secondary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(19,253,253,0.1)]">
             <div className="absolute top-0 right-0 bg-gradient-to-l from-secondary/10 to-transparent w-32 h-full rounded-r-2xl"></div>

             <div className="relative z-10 flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center shrink-0 shadow-lg">
                <ShieldCheck className="text-white" size={32} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                  Cybersecurity Internship
                </h3>
                <p className="text-primary font-medium mb-3">Indian Servers</p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Gained practical experience in security protocols, vulnerability assessment, and defending against potential cyber threats.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;