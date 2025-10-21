import React, { useState } from 'react';
import { Code, Smartphone, Brain, Palette, Cloud, TrendingUp, ChevronRight, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Briefcase, Users, Target, Award, Heart, Zap, Shield, Rocket, ArrowRight, Check, Github, Instagram } from 'lucide-react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import IndustriesPage from './components/IndustriesPage';
import ProjectsPage from './components/ProjectsPage';
import CareersPage from './components/CareersPage';
import ContactPage from './components/ContactPage';

const FyniqWebsite = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const services = [
    { icon: <Code className="w-12 h-12" />, title: "Software & Web Development", desc: "Custom web applications built with cutting-edge frameworks and best practices", link: "web-dev" },
    { icon: <Smartphone className="w-12 h-12" />, title: "Mobile App Development", desc: "Native and Flutter-based mobile solutions for iOS and Android", link: "mobile-dev" },
    { icon: <Brain className="w-12 h-12" />, title: "AI & Machine Learning", desc: "Intelligent systems powered by advanced ML algorithms and data science", link: "ai-ml" },
    { icon: <Palette className="w-12 h-12" />, title: "UI/UX Design & Branding", desc: "Beautiful, intuitive interfaces that create memorable user experiences", link: "design" },
    { icon: <Cloud className="w-12 h-12" />, title: "Cloud & DevOps Solutions", desc: "Scalable infrastructure with CI/CD pipelines and cloud optimization", link: "cloud" },
    { icon: <TrendingUp className="w-12 h-12" />, title: "Digital Marketing & Growth", desc: "Data-driven strategies to accelerate your business growth", link: "marketing" }
  ];

  const industries = [
    { name: "Healthcare", icon: "🏥", desc: "HIPAA-compliant solutions for modern healthcare delivery" },
    { name: "Fintech", icon: "💳", desc: "Secure, scalable financial technology platforms" },
    { name: "Logistics", icon: "🚚", desc: "Smart logistics and supply chain optimization" },
    { name: "Education", icon: "🎓", desc: "E-learning platforms and educational technology" },
    { name: "Retail", icon: "🛍️", desc: "Next-gen e-commerce and retail solutions" },
    { name: "Manufacturing", icon: "🏭", desc: "Industry 4.0 and smart manufacturing systems" }
  ];

  const projects = [
    { 
      title: "AI-Powered Healthcare Diagnostics", 
      tech: ["React", "Python", "TensorFlow", "AWS"], 
      desc: "Predictive diagnostics platform reducing diagnosis time by 60%",
      industry: "Healthcare"
    },
    { 
      title: "Digital Banking Platform", 
      tech: ["Flutter", "Node.js", "PostgreSQL", "Kubernetes"], 
      desc: "Secure mobile banking app serving 100K+ active users",
      industry: "Fintech"
    },
    { 
      title: "Smart E-Commerce Marketplace", 
      tech: ["Next.js", "MongoDB", "Redis", "Stripe"], 
      desc: "Multi-vendor platform with AI-powered recommendations",
      industry: "Retail"
    },
    { 
      title: "Logistics Optimization Engine", 
      tech: ["Vue.js", "Django", "ML", "Google Maps API"], 
      desc: "Route optimization reducing delivery costs by 35%",
      industry: "Logistics"
    }
  ];

  const values = [
    { icon: <Shield className="w-10 h-10" />, title: "Integrity", desc: "Transparent and honest in every interaction with our clients and partners" },
    { icon: <Award className="w-10 h-10" />, title: "Excellence", desc: "Committed to delivering the highest quality in every project we undertake" },
    { icon: <Users className="w-10 h-10" />, title: "Collaboration", desc: "Working together with our clients to achieve extraordinary results" },
    { icon: <Rocket className="w-10 h-10" />, title: "Evolution", desc: "Constantly innovating and adapting to the ever-changing tech landscape" }
  ];

  const whyChooseUs = [
    { icon: <Zap className="w-8 h-8" />, title: "Innovation-First Approach", desc: "We leverage cutting-edge technologies to solve complex business challenges" },
    { icon: <Target className="w-8 h-8" />, title: "Trusted Delivery", desc: "On-time project delivery with transparent communication throughout" },
    { icon: <Heart className="w-8 h-8" />, title: "Cross-Domain Expertise", desc: "Multi-disciplinary team with deep expertise across various technologies" },
    { icon: <Rocket className="w-8 h-8" />, title: "Scalable Solutions", desc: "Build once, scale infinitely with our future-proof architectures" }
  ];

  const jobs = [
    { title: "Senior Full Stack Developer", dept: "Engineering", location: "Remote", type: "Full-time" },
    { title: "AI/ML Engineer", dept: "AI Research", location: "Hybrid", type: "Full-time" },
    { title: "UI/UX Designer", dept: "Design", location: "On-site", type: "Full-time" },
    { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Full-time" },
    { title: "Flutter Developer", dept: "Mobile", location: "Remote", type: "Contract" },
    { title: "Digital Marketing Specialist", dept: "Growth", location: "Hybrid", type: "Full-time" }
  ];

  // Use the dedicated HomePage component and pass handlers/data
  // HomePage expects props: setCurrentPage, services
  const Home = () => <HomePage setCurrentPage={setCurrentPage} services={services} />;

  const About = () => <AboutPage values={values} />;

  const Services = () => <ServicesPage services={services} setCurrentPage={setCurrentPage} />;

  const Industries = () => <IndustriesPage industries={industries} setCurrentPage={setCurrentPage} />;

  const Projects = () => <ProjectsPage projects={projects} setCurrentPage={setCurrentPage} />;

  const Careers = () => <CareersPage jobs={jobs} />;

  const Contact = () => <ContactPage onSubmit={() => {}} />;

  const renderPage = () => {
    switch(currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'services': return <Services />;
      case 'industries': return <Industries />;
      case 'projects': return <Projects />;
      case 'careers': return <Careers />;
      case 'contact': return <Contact />;
      default: return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#111827] via-[#0a0e1a] to-[#000000] font-sans relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#00F0FF]/5 via-transparent to-transparent pointer-events-none"></div>
      <div className="relative z-10">
      <style>{`\n        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');\n        \n        * {\n          font-family: 'Inter', sans-serif;\n        }\n        \n        h1, h2, h3, h4, h5, h6 {\n          font-family: 'Poppins', sans-serif;\n        }\n        \n        .glow-text {\n          text-shadow: 0 0 20px rgba(0, 240, 255, 0.5);\n        }\n        \n        @keyframes float {\n          0%, 100% {\n            transform: translateY(0) translateX(0);\n          }\n          25% {\n            transform: translateY(-20px) translateX(10px);\n          }\n          50% {\n            transform: translateY(-10px) translateX(-10px);\n          }\n          75% {\n            transform: translateY(-15px) translateX(5px);\n          }\n        }\n        \n        @keyframes fade-in {\n          from {\n            opacity: 0;\n            transform: translateY(20px);\n          }\n          to {\n            opacity: 1;\n            transform: translateY(0);\n          }\n        }\n        \n        .animate-fade-in {\n          animation: fade-in 1s ease-out;\n        }\n        \n        ::-webkit-scrollbar {\n          width: 10px;\n        }\n        \n        ::-webkit-scrollbar-track {\n          background: #0A3D62;\n        }\n        \n        ::-webkit-scrollbar-thumb {\n          background: #00F0FF;\n          border-radius: 5px;\n        }\n        \n        ::-webkit-scrollbar-thumb:hover {\n          background: #00c8d4;\n        }\n\n        input::placeholder, textarea::placeholder {\n          color: rgba(176, 176, 176, 0.5);\n        }\n      `}</style>

  <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
  <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default FyniqWebsite;
