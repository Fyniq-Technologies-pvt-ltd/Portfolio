import React from 'react';
import { ChevronRight } from 'lucide-react';

const CoreServicesSection = ({ services, setCurrentPage }) => (
  <section className="py-20 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent pointer-events-none"></div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 mb-4 inline-block">Core Services</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Comprehensive, intelligence-driven solutions designed for the modern digital landscape.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentPage('services')}
            className="group relative p-8 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(124,58,237,0.1)] cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>

            <div className="relative z-10">
              <div className="text-purple-400 mb-6 group-hover:scale-110 group-hover:text-purple-300 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">{service.title}</h3>
              <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300">{service.desc}</p>
              <div className="flex items-center text-purple-400 text-sm font-semibold tracking-wide">
                Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServicesSection;
