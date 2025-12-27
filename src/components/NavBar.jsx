import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavigation = (page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const menuItems = ['Home', 'About', 'Services', 'Industries', 'Projects', 'Careers', 'Contact'];

  return (
    <nav className="fixed w-full top-0 z-50 glass-panel border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center cursor-pointer group" onClick={() => handleNavigation('home')}>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400 group-hover:to-purple-300 transition-all duration-300">Fyniq</div>
            <div className="text-sm text-gray-400 ml-2 tracking-widest uppercase group-hover:text-white transition-colors">Technologies</div>
          </div>

          <div className="hidden md:flex space-x-1">
            {menuItems.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigation(item.toLowerCase())}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${currentPage === item.toLowerCase()
                    ? 'text-white bg-white/10 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item}
                {currentPage === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-1/2 w-1/2 h-[2px] bg-[#a78bfa] -translate-x-1/2 rounded-full shadow-[0_0_10px_#a78bfa]"></span>
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden text-gray-300 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#050B14]/95 backdrop-blur-xl border-t border-white/10 absolute w-full left-0 top-full">
          <div className="px-4 py-4 space-y-2">
            {menuItems.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigation(item.toLowerCase())}
                className={`block w-full text-left py-3 px-4 rounded-xl transition-all ${currentPage === item.toLowerCase()
                    ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
