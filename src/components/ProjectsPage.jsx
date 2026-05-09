import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const ProjectsPage = ({ setCurrentPage }) => {
  const [projects, setProjects] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const parseTech = (t) => {
      if (!t) return [];
      try {
        const parsed = JSON.parse(t);
        if (Array.isArray(parsed)) return parsed;
      } catch {
        // Not a JSON string, fallback to comma-separated
      }
      return typeof t === 'string' ? t.split(',').map(s => s.trim()) : [];
    };

    const fetchData = async () => {
      try {
        const [projectsRes, productsRes] = await Promise.all([
          supabase.from('projects').select('*').order('id', { ascending: true }),
          supabase.from('products').select('*').order('id', { ascending: true })
        ]);

        if (projectsRes.data) {
          setProjects(projectsRes.data.map(p => ({ ...p, tech: parseTech(p.tech) })));
        }
        if (productsRes.data) {
          setProducts(productsRes.data.map(p => ({ ...p, tech: parseTech(p.tech) })));
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
  <div className="pt-16">
    <section className="min-h-[40vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="text-center px-4 max-w-4xl relative z-10 mt-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Portfolio</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">Discover our innovative products and successful projects</p>
      </div>
    </section>

    {/* Products Section */}
    <section className="py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-purple-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products && products.map((product, idx) => (
            <div key={idx} className="relative w-full bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-3 flex flex-col gap-4 hover:border-purple-500/30 transition-all duration-500 group shadow-lg">
              
              {/* Top Image Card */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#050b14] shadow-xl border border-white/5">
                {product.image && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-transparent z-10"></div>
                    <img src={product.image} alt={product.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                  </>
                )}
                <div className="absolute top-3 right-3 z-20">
                  <span className="text-[10px] uppercase tracking-wider text-white font-bold bg-purple-500/80 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm">
                    {product.industry}
                  </span>
                </div>
              </div>

              {/* Bottom Text Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-purple-400 transition-colors line-clamp-2">
                  {product.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {product.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {product.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-300 font-medium whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {product.tech.length > 3 && (
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-300 font-medium">
                      +{product.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5">
                  <button className="flex items-center gap-2 text-white text-xs font-semibold hover:text-purple-400 transition-colors w-full group/btn">
                     <div className="w-1.5 h-1.5 rounded-full bg-purple-400 group-hover/btn:animate-pulse"></div>
                     View Product
                     <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-500 group-hover/btn:text-purple-400 transition-colors group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Projects Section */}
    <section className="py-16 relative bg-gradient-to-b from-transparent to-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Projects</h2>
          <div className="w-24 h-1 bg-indigo-500 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects && projects.map((project, idx) => (
            <div key={idx} className="relative w-full bg-[#0f172a]/40 backdrop-blur-xl border border-white/10 rounded-[1.5rem] p-3 flex flex-col gap-4 hover:border-indigo-500/30 transition-all duration-500 group shadow-lg">
              
              {/* Top Image Card */}
              <div className="relative w-full h-48 rounded-xl overflow-hidden bg-[#050b14] shadow-xl border border-white/5">
                {project.image && (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050b14]/80 via-transparent to-transparent z-10"></div>
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90" />
                  </>
                )}
                <div className="absolute top-3 right-3 z-20">
                  <span className="text-[10px] uppercase tracking-wider text-white font-bold bg-indigo-500/80 backdrop-blur-md px-2.5 py-1 rounded-md shadow-sm">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Bottom Text Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="text-xl font-bold text-white mb-2 leading-tight group-hover:text-indigo-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4 mt-auto">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span key={i} className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-300 font-medium whitespace-nowrap">
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-md text-[10px] text-gray-300 font-medium">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="pt-3 border-t border-white/5">
                  <button className="flex items-center gap-2 text-white text-xs font-semibold hover:text-indigo-400 transition-colors w-full group/btn">
                     <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 group-hover/btn:animate-pulse"></div>
                     View Project
                     <ArrowRight className="w-3.5 h-3.5 ml-auto text-gray-500 group-hover/btn:text-indigo-400 transition-colors group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
  );
};
export default ProjectsPage;
