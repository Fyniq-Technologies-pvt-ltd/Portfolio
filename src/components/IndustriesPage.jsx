import React from 'react';

const IndustriesPage = ({ industries, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="text-center px-4 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Versatility Meets <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Innovation</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">Delivering excellence across multiple sectors with industry-specific expertise</p>
      </div>
    </section>

    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, idx) => (
            <div key={idx} className="group p-10 bg-[#0f172a]/40 backdrop-blur-xl rounded-3xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] cursor-pointer hover:-translate-y-2">
              <div className="text-6xl mb-8 group-hover:scale-110 transition-transform duration-300 text-center filter drop-shadow-[0_0_10px_rgba(167,139,250,0.3)]">{industry.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-4 text-center group-hover:text-purple-400 transition-colors">{industry.name}</h3>
              <p className="text-gray-400 text-center leading-relaxed group-hover:text-gray-300">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default IndustriesPage;
