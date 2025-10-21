import React from 'react';
import { Check } from 'lucide-react';

const ServicesPage = ({ services, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Empowering Businesses Through <span className="text-[#00F0FF] glow-text">Smart Technology</span>
        </h1>
        <p className="text-xl text-[#B0B0B0]">We deliver high-quality, scalable, and future-ready technology solutions tailored for modern businesses.</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="p-12 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 flex items-center justify-center">
                  <div className="text-[#00F0FF]">
                    {React.cloneElement(service.icon, { className: 'w-32 h-32' })}
                  </div>
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-lg text-[#B0B0B0] leading-relaxed mb-6">{service.desc}</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00F0FF] mt-1 flex-shrink-0" />
                    <span className="text-[#B0B0B0]">Custom solutions tailored to your business needs</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default ServicesPage;
