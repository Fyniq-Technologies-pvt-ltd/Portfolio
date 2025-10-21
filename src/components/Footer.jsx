import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github, Instagram } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = ['About', 'Services', 'Industries', 'Projects', 'Careers'];

  return (
    <footer className="bg-[#0A3D62]/80 backdrop-blur-md text-white py-12 border-t border-[#00F0FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-[#00F0FF] mb-4">Fyniq Technologies</h3>
            <p className="text-sm text-[#B0B0B0] mb-4">Intelligence. Innovation. Impact.</p>
            <p className="text-xs text-[#B0B0B0]">Empowering businesses through intelligent technology solutions.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map(link => (
                <button
                  key={link}
                  type="button"
                  onClick={() => setCurrentPage(link.toLowerCase())}
                  className="block text-sm text-[#B0B0B0] hover:text-[#00F0FF] transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-[#B0B0B0]">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>fyniqtechnologies@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Linkedin className="w-5 h-5 text-[#B0B0B0] hover:text-[#00F0FF] cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-[#B0B0B0] hover:text-[#00F0FF] cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-[#B0B0B0] hover:text-[#00F0FF] cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-[#B0B0B0] hover:text-[#00F0FF] cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-[#B0B0B0] hover:text-[#00F0FF] cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        
        <div className="border-t border-[#00F0FF]/20 mt-8 pt-8 text-center text-sm text-[#B0B0B0]">
          © 2025 Fyniq Technologies. All rights reserved. | Built with innovation and precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
