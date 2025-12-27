import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
  const quickLinks = ['About', 'Services', 'Industries', 'Projects', 'Careers'];

  return (
    <footer className="relative bg-[#020617] text-white pt-20 pb-10 overflow-hidden">
      {/* Footer background glow */}
      <div className="absolute top-0 left-1/4 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-400">Fyniq Technologies</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Intelligence. Innovation. Impact.
              <br />
              Empowering businesses through intelligent technology solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map(link => (
                <button
                  key={link}
                  type="button"
                  onClick={() => setCurrentPage(link.toLowerCase())}
                  className="block text-sm text-gray-400 hover:text-purple-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500/50 group-hover:bg-purple-400 transition-colors"></span>
                  {link}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Contact</h4>
            <div className="space-y-4 text-sm text-gray-400">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                  <Mail className="w-4 h-4" />
                </div>
                <span>fyniqtechnologies@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+91 93521 11646</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-purple-400 mt-1">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Pilani<br />Rajasthan, RJ 333031<br />India</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6 text-white">Follow Us</h4>
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: "https://www.linkedin.com/in/fyniq-technologies-2180763a3/" },
                { Icon: Twitter, href: "https://x.com/fyniqtech" },
                { Icon: Github, href: "https://github.com/fyniqtechnologies-byte" },
                { Icon: Instagram, href: "https://www.instagram.com/fyniqtech/" }
              ].map(({ Icon, href }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© 2025 Fyniq Technologies. All rights reserved.</p>
          <p className="flex items-center gap-2">Built with innovation <span className="text-purple-500">⚡</span> and precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
