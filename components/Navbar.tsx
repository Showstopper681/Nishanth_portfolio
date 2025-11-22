import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PORTFOLIO_DATA } from '../constants';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onNavClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // 1. Reset the view to the main page (close project details if open)
    onNavClick();
    
    // 2. Close mobile menu
    setIsOpen(false);

    // 3. Wait a tiny bit for the main view to render, then scroll
    setTimeout(() => {
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    // Added pointer-events-none to wrapper so it doesn't block clicks on Hero section
    <nav className={`fixed w-full z-50 transition-all duration-300 pointer-events-none ${scrolled ? 'bg-dark/95 backdrop-blur-md py-4 shadow-lg border-b border-gray-800' : 'bg-transparent py-6'}`}>
      {/* Added pointer-events-auto to inner container so nav links are clickable */}
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center pointer-events-auto">
        <a 
          href="#home" 
          onClick={(e) => handleLinkClick(e, '#home')}
          className="flex flex-col leading-none group cursor-pointer"
        >
          <span className="font-display font-bold text-2xl text-white tracking-wide">
            {PORTFOLIO_DATA.personal_information.full_name.split(' ')[0]}
            <span className="text-primary">.</span>
          </span>
          <span className="text-[10px] text-gray-400 group-hover:text-secondary transition-colors tracking-[0.2em]">PORTFOLIO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-secondary transition-colors uppercase tracking-wider relative group cursor-pointer"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary text-black font-bold rounded-full text-sm hover:shadow-[0_0_15px_rgba(19,155,253,0.5)] transition-all transform hover:-translate-y-0.5 cursor-pointer"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-card border-b border-gray-800 shadow-2xl pointer-events-auto">
          <div className="flex flex-col p-6 space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-primary font-medium text-lg cursor-pointer block"
                onClick={(e) => handleLinkClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;