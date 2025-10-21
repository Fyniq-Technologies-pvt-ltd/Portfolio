import React from 'react';
import { Target, Rocket, Users } from 'lucide-react';

const AboutPage = ({ values }) => (
  <div className="pt-16">
    {/* Hero Section */}
    <section className="min-h-[60vh] flex items-center justify-center">
      <div className="text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Born from Innovation, Built for <span className="text-[#00F0FF] glow-text">Impact</span>
        </h1>
        <p className="text-xl text-[#B0B0B0]">
          Pioneering the future of technology with passion, expertise, and unwavering commitment to excellence.
        </p>
      </div>
    </section>

    {/* Company Story */}
    <section className="py-20 bg-[#0A3D62]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-[#B0B0B0] leading-relaxed">
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
        <div className="grid md:grid-cols-2 gap-12">
          <div className="p-8 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
            <div className="text-[#00F0FF] mb-4">
              <Target className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              To be the global leader in multi-domain technology solutions, empowering businesses worldwide with intelligent systems that drive sustainable growth, innovation, and digital transformation.
            </p>
          </div>
          <div className="p-8 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
            <div className="text-[#00F0FF] mb-4">
              <Rocket className="w-12 h-12" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-lg text-[#B0B0B0] leading-relaxed">
              We create transformative technology solutions that bridge the gap between ambition and achievement, delivering measurable impact through innovation, expertise, and unwavering commitment to our clients' success.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Core Values */}
    <section className="py-20 bg-[#0A3D62]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Core Values</h2>
          <p className="text-[#B0B0B0] text-lg">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)]"
            >
              <div className="text-[#00F0FF] flex justify-center mb-4">{value.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3 text-center">{value.title}</h3>
              <p className="text-[#B0B0B0] text-center">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership & Ecosystem */}
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Leadership</h2>
          <p className="text-[#B0B0B0] text-lg">Guided by visionary leadership</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="p-8 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20 hover:border-[#00F0FF] transition-all duration-300 text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#00F0FF]/30 to-[#0A3D62] flex items-center justify-center border-2 border-[#00F0FF]/50">
              <Users className="w-16 h-16 text-[#00F0FF]" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Devansh Indoriya</h3>
            <p className="text-[#00F0FF] font-semibold mb-4">Founder & CEO - AzureBlaze</p>
            <p className="text-[#B0B0B0] leading-relaxed">
              Visionary technologist and innovator driving Fyniq's mission to transform businesses through intelligent technology solutions. With a passion for AI, software architecture, and digital innovation, Devansh leads a team dedicated to creating impact at scale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-[#0A3D62]/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Part of Something Bigger</h2>
          <p className="text-lg text-[#B0B0B0] leading-relaxed">
            Fyniq Technologies operates as part of a larger ecosystem of innovation, collaborating with cutting-edge organizations and thought leaders to stay at the forefront of technological advancement. Our connections enable us to bring world-class solutions to every project.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
