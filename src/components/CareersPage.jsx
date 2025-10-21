import React, { useState } from 'react';
import { Briefcase, MapPin, Users, Brain, Rocket } from 'lucide-react';

const CareersPage = ({ jobs }) => {
  const [selectedDept, setSelectedDept] = useState('All');
  const departments = ['All', 'Engineering', 'AI Research', 'Design', 'Infrastructure', 'Mobile', 'Growth'];

  const filteredJobs = selectedDept === 'All' ? jobs : jobs.filter(job => job.dept === selectedDept);

  return (
    <div className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Join the <span className="text-[#00F0FF] glow-text">Future</span> with Fyniq</h1>
          <p className="text-xl text-[#B0B0B0]">Be part of a team that's shaping the future of technology. We're looking for passionate innovators who want to make an impact.</p>
        </div>
      </section>

      <section className="py-20 bg-[#0A3D62]/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work at Fyniq?</h2>
            <p className="text-[#B0B0B0] text-lg">Innovation-driven, learning-focused, impact-oriented</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[{ icon: <Brain className="w-10 h-10" />, title: 'Continuous Learning', desc: 'Access to courses, conferences, and cutting-edge technology' }, { icon: <Users className="w-10 h-10" />, title: 'Collaborative Culture', desc: 'Work with talented individuals across multiple domains' }, { icon: <Rocket className="w-10 h-10" />, title: 'Growth Opportunities', desc: 'Fast-track your career with challenging projects' }].map((perk, idx) => (
              <div key={idx} className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 text-center">
                <div className="text-[#00F0FF] flex justify-center mb-4">{perk.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{perk.title}</h3>
                <p className="text-[#B0B0B0]">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-[#B0B0B0]">Find your next opportunity</p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {departments.map(dept => (
              <button key={dept} onClick={() => setSelectedDept(dept)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedDept === dept ? 'bg-[#00F0FF] text-[#0A3D62]' : 'bg-[#082845]/50 text-[#B0B0B0] border border-[#00F0FF]/20 hover:border-[#00F0FF]'}`}>
                {dept}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, idx) => (
              <div key={idx} className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,240,255,0.3)]">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm text-[#B0B0B0]">
                      <span className="flex items-center gap-1"><Briefcase className="w-4 h-4" /> {job.dept}</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {job.location}</span>
                      <span className="px-2 py-1 bg-[#00F0FF]/20 text-[#00F0FF] rounded text-xs">{job.type}</span>
                    </div>
                  </div>
                </div>
                <button className="mt-4 px-5 py-2 bg-[#00F0FF]/20 text-[#00F0FF] rounded-lg hover:bg-[#00F0FF]/30 transition-all duration-300 border border-[#00F0FF]/30 font-medium">Apply Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
