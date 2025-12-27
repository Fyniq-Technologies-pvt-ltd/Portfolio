import React from 'react';
import { ArrowRight } from 'lucide-react';

const ProjectsPage = ({ projects, setCurrentPage }) => (
  <div className="pt-16">
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="text-center px-4 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">Transforming ideas into reality with innovative technology solutions</p>
      </div>
    </section>

    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group relative overflow-hidden bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(124,58,237,0.15)]">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 via-purple-500/0 to-purple-500/5 group-hover:via-purple-500/5 group-hover:to-purple-500/10 transition-all duration-500"></div>

              <div className="p-10 relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs text-purple-300 font-bold tracking-wider uppercase px-4 py-1.5 bg-purple-500/10 rounded-full border border-purple-500/20 shadow-[0_0_10px_rgba(167,139,250,0.2)]">{project.industry}</span>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-600 transition-colors duration-300">
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">{project.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300">{project.desc}</p>
                <div className="mb-2">
                  <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-widest">Technologies Used</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-lg text-xs font-medium border border-white/10 hover:border-purple-500/30 hover:bg-purple-500/10 transition-colors">{tech}</span>
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
