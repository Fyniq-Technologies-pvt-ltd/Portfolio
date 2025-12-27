import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';
import TeamCard from './section/TeamCard';

const teamData = {
  leadership: [
    {
      name: "Divyam Kashyap",
      role: "Founder & Visionary",
      description: "Driving the core philosophy and long-term vision of Fyniq Technologies. Divyam's leadership focuses on sustainable innovation and creating a culture of excellence.",
      category: "LEADERSHIP",
      tag: "FOUNDER",
      year: "2024",
      image: "/members/divyam_kashyap.png"
    },
    {
      name: "Devansh Indoriya",
      role: "Co-Founder & CEO",
      description: "Strategizing the technical roadmap and business growth. Devansh oversees the intersection of technology and market impact, ensuring Fyniq remains at the cutting edge.",
      category: "LEADERSHIP",
      tag: "CO-FOUNDER",
      year: "2024",
      image: "/members/devansh_indoriya.jpeg"
    },
    {
      name: "Riya Jangid",
      role: "Backend Dep. Head",
      description: "Architecting high-performance server-side systems and database structures. Riya leads our backend engineering with a focus on security and scalability.",
      category: "LEADERSHIP",
      tag: "DEPT. HEAD",
      year: "2025",
      image: "/members/riya_jangid.jpeg"
    },
    {
      name: "Ajay Singh",
      role: "Frontend Dep. Head",
      description: "Crafting responsive and interactive user interfaces with modern frameworks. Ajay ensures that Fyniq's digital products are both beautiful and performant.",
      category: "LEADERSHIP",
      tag: "DEPT. HEAD",
      year: "2025",
      image: "/members/ajay_singh.jpeg"
    },
    {
      name: "Vivek Budania",
      role: "Marketing Dep. Head",
      description: "Spearheading global growth strategies and brand positioning. Vivek connects our technological solutions with the businesses that need them most.",
      category: "LEADERSHIP",
      tag: "DEPT. HEAD",
      year: "2025",
      image: "/members/vivek_budhaniya.jpeg"
    }
  ],
  leadMembers: [
    {
      name: "Karan Sain",
      role: "Mobile App Lead",
      description: "Full-stack developer with a passion for building scalable and efficient web applications. Driving technical excellence across our development teams.",
      category: "DEVELOPMENT",
      tag: "LEAD",
      year: "2025",
      image: "/members/karan_sain.jpg"
    },
    // {
    //   name: "Elena Petrova",
    //   role: "Head of AI Research",
    //   description: "Pushing the boundaries of machine learning and generative AI to deliver intelligent solutions that solve complex predictive challenges.",
    //   category: "RESEARCH",
    //   tag: "LEAD",
    //   year: "2025",
    //   image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
    // },
    // {
    //   name: "James Wilson",
    //   role: "Lead UI/UX Architect",
    //   description: "Mastermind behind our design systems, James focuses on creating immersive digital experiences that resonate with users emotionally.",
    //   category: "DESIGN",
    //   tag: "LEAD",
    //   year: "2025",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
    // },
    // {
    //   name: "Priyanka Sharma",
    //   role: "Senior Project Director",
    //   description: "Ensuring every client project is delivered with precision, transparency, and the highest standards of quality assurance.",
    //   category: "OPERATIONS",
    //   tag: "LEAD",
    //   year: "2025",
    //   image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
    // },
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

    {/* Leadership Section */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Leadership</h2>
          <p className="text-gray-400 text-lg">Guided by visionary leadership</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.leadership.map((leader, idx) => (
            <div key={idx} className="w-full md:w-[calc(33.333%-2rem)] lg:w-[calc(25%-2rem)] max-w-[280px]">
              <TeamCard {...leader} />
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Lead Members Section */}
    <section className="py-20 bg-purple-900/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Lead Members</h2>
          <p className="text-gray-400 text-lg">The core team driving our success through expertise and innovation</p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {teamData.leadMembers.map((member, idx) => (
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
