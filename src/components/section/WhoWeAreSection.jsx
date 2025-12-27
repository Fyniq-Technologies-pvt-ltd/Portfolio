import React from 'react';

const WhoWeAreSection = () => (
  <section className="py-24 relative overflow-hidden">
    {/* Background accent */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-indigo-900/20 blur-[100px] rounded-full pointer-events-none"></div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-16 border border-white/5 bg-[#0f172a]/30">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Who We Are</h2>
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
          <p>
            <span className="text-purple-400 font-semibold">Fyniq Technologies</span> combines intelligence and cutting-edge technology to redefine what's possible in the digital realm. We are a multi-domain service company specializing in software development, AI, design, and digital innovation.
          </p>
          <p>
            Our mission is simple: to empower businesses with intelligent solutions that create lasting impact and drive sustainable growth in an ever-evolving technological landscape.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAreSection;
