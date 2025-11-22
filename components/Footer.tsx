import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="font-display font-bold text-2xl text-white tracking-wide mb-2">
                {PORTFOLIO_DATA.personal_information.full_name}
            </h2>
            <p className="text-gray-500 text-sm">Creating digital experiences that matter.</p>
          </div>
          
          <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/nishanthkalaimani/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;