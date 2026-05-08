import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';
import TeamCard from './section/TeamCard';

const teamData = {
  coreTeam: [
    {
      name: "Vivek Budania",
      role: "Founder & Chief Growth Officer (CGO)",
      description: "Responsible for strategic growth, partnerships, market expansion, brand positioning, business opportunities, and growth strategy.",
      category: "LEADERSHIP",
      tag: "FOUNDER & CGO",
      year: "2024",
      image: "/members/vivek_budhaniya.jpeg"
    },
    {
      name: "Devansh Indoriya",
      role: "Co-Founder & Chief Executive Officer (CEO)",
      description: "Responsible for company vision, strategic leadership, product direction, ecosystem planning, major operational decisions, and cross-team alignment.",
      category: "LEADERSHIP",
      tag: "CO-FOUNDER & CEO",
      year: "2024",
      image: "/members/devansh_indoriya.jpeg"
    },
    {
      name: "Riya Jangid",
      role: "Chief Technology Officer (CTO)",
      description: "Responsible for technical leadership, engineering direction, architecture decisions, development standards, technology planning, and product scalability.",
      category: "TECHNOLOGY",
      tag: "CTO",
      year: "2025",
      image: "/members/riya_jangid.jpeg"
    },
    {
      name: "Ajay Singh",
      role: "Head of Research & Solutions Architecture",
      description: "Responsible for technical research, scalable solution planning, technology evaluation, system design recommendations, innovation support, and problem-solving strategies.",
      category: "TECHNOLOGY",
      tag: "HEAD OF RESEARCH",
      year: "2025",
      image: "/members/ajay_singh.jpeg"
    },
    {
      name: "Divyanshu Purohit",
      role: "AI & Innovation Lead",
      description: "Responsible for AI integrations, automation systems, GenAI experimentation, AI-powered product innovation, and emerging technology exploration.",
      category: "TECHNOLOGY",
      tag: "AI LEAD",
      year: "2025",
      image: ""
    },
    {
      name: "Sudarshan Sharma",
      role: "Chief Marketing Officer (CMO)",
      description: "Responsible for social media strategy, content management, brand communication, marketing campaigns, community engagement, and digital presence.",
      category: "MARKETING",
      tag: "CMO",
      year: "2025",
      image: ""
    },
    {
      name: "Karan Sain",
      role: "Chief Business Relations Officer (CBRO)",
      description: "Responsible for business networking, strategic connections, client relationships, partner coordination, business onboarding, and external collaborations.",
      category: "BUSINESS",
      tag: "CBRO",
      year: "2024",
      image: "/members/karan_sain.jpg"
    },
    {
      name: "Divyam Kashyap",
      role: "Operations & Resource Coordinator",
      description: "Responsible for internal coordination, workflow management, resource tracking, team operations, execution support, and process organization.",
      category: "OPERATIONS",
      tag: "COORDINATOR",
      year: "2024",
      image: "/members/divyam_kashyap.png"
    }
  ]
};

const AboutPage = ({ values }) => (
  <div className="pt-16">
    {/* Hero Section */}
    <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="text-center px-4 max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
          Born from Innovation, <br /> Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Impact</span>
        </h1>
        <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
          Pioneering the future of technology with passion, expertise, and unwavering commitment to excellence.
        </p>
      </div>
    </section>

    {/* Company Story */}
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl p-10 md:p-16 border border-white/5">
          <h2 className="text-3xl font-bold text-white mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-300 leading-relaxed font-light">
            <p>
              Fyniq Technologies was born from a vision to bridge the gap between cutting-edge technology and real-world business impact. We recognized that businesses needed more than just software – they needed intelligent, scalable solutions that could evolve with their growth.
            </p>
            <p>
              Founded with the mission to combine intelligence and technology, we've built a multi-domain service company that specializes in transforming complex challenges into elegant, efficient solutions. From AI-powered systems to intuitive designs, we deliver excellence across every touchpoint.
            </p>
            <p>
              Today, Fyniq stands as a trusted partner for businesses seeking to leverage technology for sustainable growth and competitive advantage in an increasingly digital world.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-10 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors">
            <div className="text-purple-400 mb-6 bg-purple-500/10 w-fit p-3 rounded-xl border border-purple-500/20">
              <Target className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              To be the global leader in multi-domain technology solutions, empowering businesses worldwide with intelligent systems that drive sustainable growth, innovation, and digital transformation.
            </p>
          </div>
          <div className="p-10 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/20 transition-colors">
            <div className="text-purple-400 mb-6 bg-purple-500/10 w-fit p-3 rounded-xl border border-purple-500/20">
              <Rocket className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We create transformative technology solutions that bridge the gap between ambition and achievement, delivering measurable impact through innovation, expertise, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Values</h2>
          <p className="text-gray-400 text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-8 bg-[#0f172a]/40 backdrop-blur-md rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="text-purple-400 flex justify-center mb-6">{value.icon}</div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">{value.title}</h3>
              <p className="text-gray-400 text-center leading-relaxed text-sm">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Core Team Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core Team</h2>
          <p className="text-gray-400 text-lg">Guided by visionary leadership and expertise</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.coreTeam.map((member, idx) => (
            <div key={idx} className="w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2rem)] max-w-[280px]">
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl border border-white/5">
          <h2 className="text-3xl font-bold text-white mb-6">Part of Something Bigger</h2>
          <p className="text-lg text-gray-400 leading-relaxed font-light">
            Fyniq Technologies operates as part of a larger ecosystem of innovation, collaborating with cutting-edge organizations and thought leaders to stay at the forefront of technological advancement. Our connections enable us to bring world-class solutions to every project.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
