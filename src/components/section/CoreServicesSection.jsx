import React from 'react';
import { ChevronRight } from 'lucide-react';

const CoreServicesSection = ({ services, setCurrentPage }) => (
  <section className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Core Services</h2>
        <p className="text-[#B0B0B0] text-lg">Comprehensive solutions for the digital age</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <div
            key={idx}
            onClick={() => setCurrentPage('services')}
            className="group p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] cursor-pointer"
          >
            <div className="text-[#00F0FF] mb-4 group-hover:scale-110 transition-transform duration-300">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
            <p className="text-[#B0B0B0] mb-4">{service.desc}</p>
            <div className="flex items-center text-[#00F0FF] text-sm font-medium">
              Learn More <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoreServicesSection;
