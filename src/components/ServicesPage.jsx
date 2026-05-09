import React from 'react';
import { Check } from 'lucide-react';

const ServicesPage = ({ services, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="text-center px-4 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Empowering Businesses <br /> Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Smart Technology</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">We deliver high-quality, scalable, and future-ready technology solutions tailored for modern businesses.</p>
      </div>
    </section>

    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-16">
          {services.map((service, idx) => (
            <div key={idx} className="grid md:grid-cols-2 gap-12 items-center group">
              <div className={`${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="p-12 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 flex items-center justify-center relative overflow-hidden group-hover:border-purple-500/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(124,58,237,0.15)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>
                  <div className="text-purple-400 relative z-10 group-hover:scale-110 transition-transform duration-500 group-hover:text-purple-300">
                    {React.cloneElement(service.icon, { className: 'w-32 h-32' })}
                  </div>
                </div>
              </div>
              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold text-white mb-6 group-hover:text-purple-400 transition-colors">{service.title}</h3>
                <p className="text-lg text-gray-400 leading-relaxed mb-8">{service.desc}</p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-gray-300">Custom solutions tailored to your specific business requirements and goals</span>
                  </div>
                  <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-purple-500/20 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center shrink-0">
                      <Check className="w-5 h-5 text-indigo-400" />
                    </div>
                    <span className="text-gray-300">Integration with latest technologies for maximum efficiency</span>
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
