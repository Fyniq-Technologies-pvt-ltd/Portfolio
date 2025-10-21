import React from 'react';

const IndustriesPage = ({ industries, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Versatility Meets <span className="text-[#00F0FF] glow-text">Innovation</span>
        </h1>
        <p className="text-xl text-[#B0B0B0]">Delivering excellence across multiple sectors with industry-specific expertise</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="group p-8 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] cursor-pointer">
              <div className="text-6xl mb-6 group-hover:scale-125 transition-transform duration-300 text-center">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center">{industry.name}</h3>
              <p className="text-[#B0B0B0] text-center leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
