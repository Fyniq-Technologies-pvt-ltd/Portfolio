import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github, Instagram } from 'lucide-react';

const ContactPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formData);
    alert('Thank you for reaching out! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <div className="pt-16">
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in">Let's Build Something <span className="text-[#00F0FF] glow-text">Extraordinary</span> Together</h1>
          <p className="text-xl text-[#B0B0B0]">Get in touch with our team and start your digital transformation journey</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white mb-2 font-medium">Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-[#082845]/50 backdrop-blur-sm border border-[#00F0FF]/20 rounded-lg text-white focus:outline-none focus:border-[#00F0FF] transition-colors placeholder-[#B0B0B0]/50" placeholder="Your full name" required />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Email *</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 bg-[#082845]/50 backdrop-blur-sm border border-[#00F0FF]/20 rounded-lg text-white focus:outline-none focus:border-[#00F0FF] transition-colors placeholder-[#B0B0B0]/50" placeholder="your.email@company.com" required />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Company</label>
                  <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-4 py-3 bg-[#082845]/50 backdrop-blur-sm border border-[#00F0FF]/20 rounded-lg text-white focus:outline-none focus:border-[#00F0FF] transition-colors placeholder-[#B0B0B0]/50" placeholder="Your company name" />
                </div>
                <div>
                  <label className="block text-white mb-2 font-medium">Message *</label>
                  <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows="5" className="w-full px-4 py-3 bg-[#082845]/50 backdrop-blur-sm border border-[#00F0FF]/20 rounded-lg text-white focus:outline-none focus:border-[#00F0FF] transition-colors resize-none placeholder-[#B0B0B0]/50" placeholder="Tell us about your project..." required></textarea>
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-[#00F0FF] text-[#0A3D62] font-bold rounded-xl hover:shadow-[0_0_30px_rgba(0,240,255,0.5)] transition-all duration-300">Send Message</button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                <div className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center"><Mail className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Email</h3>
                      <p className="text-[#B0B0B0]">hello@fyniq.tech</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center"><Phone className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Phone</h3>
                      <p className="text-[#B0B0B0]">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center"><MapPin className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Office</h3>
                      <p className="text-[#B0B0B0]">123 Innovation Drive<br/>San Francisco, CA 94102<br/>United States</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#082845]/50 backdrop-blur-sm rounded-xl border border-[#00F0FF]/20">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/30 cursor-pointer transition-all"><Linkedin className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/30 cursor-pointer transition-all"><Twitter className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/30 cursor-pointer transition-all"><Facebook className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/30 cursor-pointer transition-all"><Github className="w-6 h-6 text-[#00F0FF]" /></div>
                    <div className="w-12 h-12 bg-[#00F0FF]/20 rounded-lg flex items-center justify-center hover:bg-[#00F0FF]/30 cursor-pointer transition-all"><Instagram className="w-6 h-6 text-[#00F0FF]" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
