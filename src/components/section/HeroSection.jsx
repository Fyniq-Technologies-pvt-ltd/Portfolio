import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 opacity-20">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#00F0FF]"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl">
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
        Intelligence. Innovation. <span className="text-[#00F0FF] glow-text">Impact.</span>
      </h1>
      <p className="text-xl md:text-2xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto">
        Empowering businesses through intelligent, multi-domain technology solutions that drive real-world results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          onClick={() => setCurrentPage('services')}
          className="px-8 py-4 bg-[#00F0FF] text-[#0A3D62] font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300 flex items-center justify-center gap-2"
        >
          Explore Services <ArrowRight className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 border-2 border-[#00F0FF] text-[#00F0FF] font-semibold rounded-xl hover:bg-[#00F0FF]/10 transition-all duration-300"
        >
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
