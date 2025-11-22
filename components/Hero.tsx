import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Mail, MapPin } from 'lucide-react';

const Hero: React.FC = () => {
  const { personal_information } = PORTFOLIO_DATA;

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-6 z-10 animate-fade-in-up">
          <h3 className="text-primary font-semibold tracking-widest uppercase text-lg">Hi, I am</h3>
          <h1 className="font-display font-extrabold text-5xl md:text-7xl leading-tight text-white">
            {personal_information.full_name.split(' ')[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
              {personal_information.full_name.split(' ')[1]}
            </span>
          </h1>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary"></div>
          <h2 className="text-2xl md:text-4xl font-bold text-gray-300">
            A <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{personal_information.title}</span>.
          </h2>
          <p className="text-gray-400 max-w-lg leading-relaxed text-lg">
            {personal_information.bio.split('.')[0]}. Specialized in building scalable applications using Angular and Spring Boot.
          </p>

          <div className="flex items-center gap-6 pt-8 text-gray-400">
             <div className="flex items-center gap-2">
               <MapPin size={18} className="text-primary"/>
               <span>{personal_information.contact.location}</span>
             </div>
             <div className="flex items-center gap-2">
               <Mail size={18} className="text-primary"/>
               <span>{personal_information.contact.email}</span>
             </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center lg:justify-end z-10">
           <div className="relative w-[350px] h-[350px] md:w-[500px] md:h-[500px]">
              {/* Circle Decorations */}
              <div className="absolute inset-0 rounded-full border-2 border-gray-800 animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-dashed border-gray-700 animate-[spin_15s_linear_infinite_reverse]"></div>
              <div className="absolute -inset-4 rounded-full border border-primary/20"></div>
              
              {/* Main Circle with Gradient Border */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-b from-card to-dark flex items-center justify-center overflow-hidden border-4 border-dark shadow-[0_0_50px_rgba(19,155,253,0.2)]">
                 {/* Profile Image */}
                 <img 
                    src="https://i.postimg.cc/MGsFbMgj/Nishanth-profile.png" 
                    alt="Nishanth Kalaimani" 
                    className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform"
                 />
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;