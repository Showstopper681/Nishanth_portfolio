import React from 'react';
import { PORTFOLIO_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-900 pt-16 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-center md:justify-start items-center">
          <div className="mb-0 text-center md:text-left">
            <div className="mb-2">
                <h2 className="font-display font-bold text-2xl text-white tracking-wide">
                    {PORTFOLIO_DATA.personal_information.full_name}
                </h2>
            </div>
            <p className="text-gray-500 text-sm">Creating digital experiences that matter.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;