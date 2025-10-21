import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = ({ projects, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Our <span className="text-[#00F0FF] glow-text">Portfolio</span>
        </h1>
        <p className="text-xl text-[#B0B0B0]">Transforming ideas into reality with innovative technology solutions</p>
      </div>
    </section>

    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]">
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs text-[#00F0FF] font-semibold px-3 py-1 bg-[#00F0FF]/20 rounded-full border border-[#00F0FF]/30">{project.industry}</span>
                  <ArrowRight className="w-5 h-5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-[#B0B0B0] mb-6 leading-relaxed">{project.desc}</p>
                <div className="mb-4">
                  <p className="text-sm text-[#B0B0B0] mb-2">Technologies Used:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[#00F0FF]/10 text-[#00F0FF] rounded-lg text-sm border border-[#00F0FF]/20">{tech}</span>
                    ))}
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

export default ProjectsPage;
