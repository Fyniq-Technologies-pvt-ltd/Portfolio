import React, { useState } from 'react';
import { Briefcase, MapPin, Users, Brain, Rocket, ArrowRight } from 'lucide-react';

const CareersPage = ({ jobs }) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const departments = ['All', 'Engineering', 'AI Research', 'Design', 'Infrastructure', 'Mobile', 'Growth'];

  const filteredJobs = selectedDept === 'All' ? jobs : jobs.filter(job => job.dept === selectedDept);

  return (
    <div className="pt-16">
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
        <div className="text-center px-4 max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Future</span> with Fyniq
          </h1>
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Be part of a team that's shaping the future of technology. We're looking for passionate innovators who want to make an impact.
          </p>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work at Fyniq?</h2>
            <p className="text-gray-400 text-lg">Innovation-driven, learning-focused, impact-oriented</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: <Brain className="w-10 h-10" />, title: 'Continuous Learning', desc: 'Access to courses, conferences, and cutting-edge technology' },
              { icon: <Users className="w-10 h-10" />, title: 'Collaborative Culture', desc: 'Work with talented individuals across multiple domains' },
              { icon: <Rocket className="w-10 h-10" />, title: 'Growth Opportunities', desc: 'Fast-track your career with challenging projects' }
            ].map((perk, idx) => (
              <div key={idx} className="p-8 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 text-center hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="text-purple-400 flex justify-center mb-6 bg-purple-500/10 w-20 h-20 rounded-full items-center mx-auto border border-purple-500/20">
                  {perk.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{perk.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-400 mb-6">Find your next opportunity</p>

            <div className="inline-flex flex-col md:flex-row gap-4 md:gap-8 justify-center items-center bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-purple-300">
                <Briefcase className="w-4 h-4" />
                <span className="font-medium">All jobs are part-time and unpaid</span>
              </div>
              <div className="hidden md:block w-px h-4 bg-white/10"></div>
              <div className="flex items-center gap-2 text-indigo-300">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">All jobs are remote</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 text-sm ${selectedDept === dept
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:border-purple-500/50 hover:text-white'
                  }`}
              >
                {dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="p-8 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:shadow-[0_0_25px_rgba(124,58,237,0.1)] group cursor-pointer">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-400">
                      <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                        <Briefcase className="w-3.5 h-3.5 text-purple-400" /> {job.dept}
                      </span>
                      <span className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                        <MapPin className="w-3.5 h-3.5 text-indigo-400" /> {job.location}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-300 rounded-lg text-xs font-semibold border border-purple-500/20">
                        {job.type}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 border border-white/10 font-semibold group-hover:border-purple-500/50">
                  Apply Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
