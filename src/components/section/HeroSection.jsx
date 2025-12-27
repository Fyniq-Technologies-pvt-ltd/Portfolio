import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ setCurrentPage }) => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      {/* Dynamic background mesh */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
    </div>

    <div className="absolute inset-0 opacity-30">
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-violet-500"
          style={{
            width: Math.random() * 4 + 1 + 'px',
            height: Math.random() * 4 + 1 + 'px',
            top: Math.random() * 100 + '%',
            left: Math.random() * 100 + '%',
            opacity: Math.random() * 0.5 + 0.2,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: Math.random() * 5 + 's'
          }}
        />
      ))}
    </div>

    <div className="relative z-10 text-center px-4 max-w-5xl">
      <h1 className="text-5xl md:text-8xl font-bold text-white mb-8 animate-fade-in tracking-tight">
        Intelligence. <br />
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 glow-text">
          Innovation. Impact.
        </span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        Empowering businesses through intelligent, multi-domain technology solutions that drive real-world results.
      </p>

      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <button
          onClick={() => setCurrentPage('services')}
          className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300 flex items-center gap-2 overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-2">Explore Services <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
        </button>

        <button
          onClick={() => setCurrentPage('contact')}
          className="px-8 py-4 glass-panel text-white font-semibold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-md"
        >
          Get in Touch
        </button>
      </div>
    </div>
  </section>
);

export default HeroSection;
