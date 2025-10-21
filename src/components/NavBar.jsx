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
    <nav className="fixed w-full top-0 z-50 bg-[#111827]/95 backdrop-blur-md border-b border-[#00F0FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="text-2xl font-bold text-[#00F0FF] glow-text">Fyniq</div>
            <div className="text-sm text-white ml-2">Technologies</div>
          </div>

          <div className="hidden md:flex space-x-8">
            {menuItems.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigation(item.toLowerCase())}
                className={`text-sm font-medium transition-all hover:text-[#00F0FF] ${
                  currentPage === item.toLowerCase() ? 'text-[#00F0FF]' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-[#111827] border-t border-[#00F0FF]/20">
          <div className="px-4 py-4 space-y-3">
            {menuItems.map(item => (
              <button
                key={item}
                type="button"
                onClick={() => handleNavigation(item.toLowerCase())}
                className="block w-full text-left text-white hover:text-[#00F0FF] py-2"
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
