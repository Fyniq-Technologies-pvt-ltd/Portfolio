import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

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
    { title: "Senior Full Stack Developer", dept: "Engineering", location: "Remote", type: "Part-time" },
    { title: "AI/ML Engineer", dept: "AI Research", location: "Remote", type: "Part-time" },
    { title: "UI/UX Designer", dept: "Design", location: "Remote", type: "Part-time" },
    { title: "DevOps Engineer", dept: "Infrastructure", location: "Remote", type: "Part-time" },
    { title: "Flutter Developer", dept: "Mobile", location: "Remote", type: "Part-time" },
    { title: "Digital Marketing Specialist", dept: "Growth", location: "Remote", type: "Part-time" }
  ];

  // Use the dedicated HomePage component and pass handlers/data
  // HomePage expects props: setCurrentPage, services
  const Home = () => <HomePage setCurrentPage={setCurrentPage} services={services} />;

  const About = () => <AboutPage values={values} />;

  const Services = () => <ServicesPage services={services} setCurrentPage={setCurrentPage} />;

  const Industries = () => <IndustriesPage industries={industries} setCurrentPage={setCurrentPage} />;

  const Projects = () => <ProjectsPage projects={projects} setCurrentPage={setCurrentPage} />;

  const Careers = () => <CareersPage jobs={jobs} />;

  const Contact = () => <ContactPage onSubmit={() => { }} />;

  const renderPage = () => {
    switch (currentPage) {
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
    <div className="min-h-screen bg-[#050B14] font-sans relative overflow-x-hidden text-white">
      {/* Global Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main deep glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#5b21b6]/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#2563eb]/20 rounded-full blur-[120px]"></div>
        {/* Secondary accents */}
        <div className="absolute top-[20%] right-[20%] w-[30%] h-[30%] bg-[#7c3aed]/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="relative z-10">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        
        * {
          font-family: 'Inter', sans-serif;
        }
        
        h1, h2, h3, h4, h5, h6 {
          font-family: 'Poppins', sans-serif;
        }
        
        .glow-text {
          text-shadow: 0 0 20px rgba(139, 92, 246, 0.5); /* Violet-500 glow */
        }

        .glass-panel {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #a78bfa 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #020617; /* Slate-950 */
        }
        
        ::-webkit-scrollbar-thumb {
          background: #4c1d95; /* Violet-900 */
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #6d28d9; /* Violet-700 */
        }

        ::selection {
          background: #7c3aed; /* Violet-600 */
          color: white;
        }
        
        input::placeholder, textarea::placeholder {
          color: rgba(148, 163, 184, 0.5); /* Slate-400 */
        }
      `}</style>

        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <main>{renderPage()}</main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};

export default FyniqWebsite;
