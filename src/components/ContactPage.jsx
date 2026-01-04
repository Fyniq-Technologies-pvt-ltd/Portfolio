import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactPage = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Configuration for EmailJS
      // Replace these strings with your actual EmailJS credentials
      const SERVICE_ID = "service_y863u5t";
      const TEMPLATE_ID = "template_vjb9hla";
      const PUBLIC_KEY = "mZlzXjaX9e0yE31I9";

      const templateParams = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
        // The variables below should match the {{variable}} names in your EmailJS template
      };

      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (result.status === 200) {
        setStatus('success');
        if (onSubmit) onSubmit(formData);
        alert('Success! Your message has been sent.');
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        console.error('EmailJS Status Error:', result);
        throw new Error(`EmailJS Error: ${result.text}`);
      }
    } catch (error) {
      console.error("Detailed Submission Error:", error);
      setStatus('error');

      // Provide more specific feedback if possible
      let errorMsg = 'Something went wrong. Please check your EmailJS configuration.';
      if (error.text) errorMsg += `\n\nDetails: ${error.text}`;
      if (error.status === 403) errorMsg = 'EmailJS Error: Forbidden. Please ensure you have whitelisted your domain (localhost) in the EmailJS dashboard.';

      alert(errorMsg);
    }
  };

  return (
    <div className="pt-16 pb-20">
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent pointer-events-none"></div>
        <div className="text-center px-4 max-w-4xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in tracking-tight">
            Let's Build Something <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-indigo-400 glow-text">Extraordinary</span> Together
          </h1>
          <p className="text-xl text-gray-400">Get in touch with our team and start your digital transformation journey</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 backdrop-blur-md border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:bg-purple-900/10 transition-colors placeholder-gray-500"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 backdrop-blur-md border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:bg-purple-900/10 transition-colors placeholder-gray-500"
                    placeholder="your.email@company.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0f172a]/50 backdrop-blur-md border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:bg-purple-900/10 transition-colors placeholder-gray-500"
                    placeholder="Your company name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">Message *</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows="5"
                    className="w-full px-4 py-3 bg-[#0f172a]/50 backdrop-blur-md border border-white/10 rounded-xl text-white focus:outline-none focus:border-purple-500 focus:bg-purple-900/10 transition-colors resize-none placeholder-gray-500"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className={`w-full px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg ${status === 'sending'
                    ? 'bg-purple-900/50 text-purple-200 cursor-not-allowed'
                    : status === 'success'
                      ? 'bg-green-600 text-white'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-purple-500/25 hover:-translate-y-1'
                    }`}
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                </button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { Icon: Mail, title: "Email", value: "fyniqtechnologies@gmail.com" },
                  { Icon: Phone, title: "Phone", value: "+91 93521 11646" },
                  { Icon: MapPin, title: "Office", value: <>Pilani<br />Rajasthan, RJ 333031<br />India</> }
                ].map((item, idx) => (
                  <div key={idx} className="p-6 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center shrink-0 border border-purple-500/20">
                        <item.Icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                        <div className="text-gray-400 leading-relaxed">{item.value}</div>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="p-8 bg-[#0f172a]/40 backdrop-blur-xl rounded-2xl border border-white/5 mt-8">
                  <h3 className="text-xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="flex gap-4">
                    {[
                      { Icon: Linkedin, href: "https://www.linkedin.com/company/fyniq-technologies/" },
                      { Icon: Twitter, href: "https://x.com/fyniqtech" },
                      { Icon: Github, href: "https://github.com/fyniqtechnologies-byte" },
                      { Icon: Instagram, href: "https://www.instagram.com/fyniqtech/" }
                    ].map(({ Icon, href }, idx) => (
                      <a
                        key={idx}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center hover:bg-purple-600 hover:text-white hover:scale-110 transition-all duration-300 text-gray-400 border border-white/5"
                      >
                        <Icon className="w-6 h-6" />
                      </a>
                    ))}
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
