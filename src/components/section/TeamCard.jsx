import React from 'react';
import { User, Shield, Star } from 'lucide-react';

const TeamCard = ({ name, role, description, image, category = "TEAM", year = "2025", tag = "MEMBER" }) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto">
      {/* Outer Card Container */}
      <div className="bg-[#0f172a]/40 backdrop-blur-xl rounded-[2rem] p-4 border border-white/5 transition-all duration-500 hover:border-purple-500/30 hover:shadow-[0_0_40px_rgba(124,58,237,0.15)] overflow-hidden">

        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-[50px] pointer-events-none group-hover:bg-purple-500/20 transition-colors"></div>

        {/* Header: Tag & Year */}
        <div className="flex justify-between items-center mb-4 px-2 relative z-10">
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{category}</span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-gray-500 uppercase">{year}</span>
        </div>

        {/* Image Container */}
        <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-4 bg-gradient-to-br from-[#1e1b4b] to-[#0f172a] border border-white/5 flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-500">

          {/* Badge: Top Center */}
          {/* <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-[#0f172a]/90 backdrop-blur-md px-6 py-1.5 rounded-full border border-white/10 z-20">
            <span className="text-[10px] font-bold text-gray-200 tracking-widest uppercase">{tag}</span>
          </div> */}

          {/* Icon/Image with blending effects */}
          {image ? (
            <div className="relative w-full h-full">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 brightness-90 group-hover:brightness-110"
              />
              {/* Purple tint overlay */}
              <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay pointer-events-none"></div>
              {/* Vignette effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-60"></div>
            </div>
          ) : (
            <div className="w-24 h-24 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-500/20">
              <User className="w-12 h-12 text-purple-400" />
            </div>
          )}

          {/* Social Icon Overlay */}
          <div className="absolute top-8 right-6 w-8 h-8 bg-[#0f172a]/80 backdrop-blur-md rounded-lg border border-white/10 flex items-center justify-center z-20 hover:bg-purple-600 hover:border-purple-500 transition-colors cursor-pointer">
            <Shield className="w-4 h-4 text-gray-300 group-hover:text-white" />
          </div>

          {/* Bottom Badge */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#0f172a]/80 backdrop-blur-md px-6 py-1.5 rounded-xl border border-white/10 min-w-[100px] text-center z-20">
            <span className="text-[10px] font-bold text-white tracking-tight">Fyniq Elite</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="px-2">
          <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight group-hover:text-purple-400 transition-colors">{name}</h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="w-5 h-5 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Star className="w-3 h-3 text-purple-400" />
            </div>
            <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">{role}</span>
          </div>

          {/* Description / Stats Area */}
          <div className="bg-white/5 rounded-xl p-3 border border-white/5 group-hover:border-white/10 transition-colors">
            <p className="text-[12px] text-gray-400 leading-relaxed line-clamp-2">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
