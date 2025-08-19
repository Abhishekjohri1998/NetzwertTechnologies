import React, { useEffect, useRef, useState } from 'react';
import {
  Award, Users, Rocket, Target,
  Globe2, MessageCircleQuestion, Shield, LayoutDashboard, ClipboardList,
  Megaphone, FolderKanban, FileCog, Wrench, ShoppingBag, BarChart3,
  PenLine, Image, Phone, UserCog, MonitorSmartphone, Search, TrendingUp,
  Mail, FileText, Code, Smartphone, Monitor, Database, Zap, Settings
} from 'lucide-react';

// ==== ONLINE SERVICES DATA ====
const onlineServices = [
  // Digital Marketing Services
  { icon: MonitorSmartphone, label: 'Social Media Marketing', description: "Transform your social presence into a powerful tool for engagement, conversion, and brand loyalty." },
  { icon: BarChart3, label: 'Media Planning & Buying', description: "Maximize your reach with strategic media buys that deliver optimal ROI across every platform." },
  { icon: Search, label: 'Search Engine Marketing (SEM)', description: "Boost your visibility and conversions with expertly managed PPC campaigns that drive measurable results." },
  { icon: TrendingUp, label: 'SEO (Search Engine Optimization)', description: "Rank higher, attract more traffic, and convert leads with a tailored SEO strategy that works." },
  { icon: FileText, label: 'Content Marketing', description: "Create content that not only attracts but also nurtures and converts your audience." },
  { icon: Mail, label: 'Email Marketing', description: "Drive customer engagement and conversions with personalized email campaigns that resonate." },
  { icon: BarChart3, label: 'Analytics & Reporting', description: "Gain actionable insights with in-depth analytics that help you optimize your marketing strategy." },
  { icon: Shield, label: 'Brand Strategy', description: "Craft a brand story that resonates and connects with your audience on a deeper level." },
  { icon: Target, label: 'Conversion Rate Optimization (CRO)', description: "Turn website visitors into loyal customers with strategies designed to maximize conversions." },
  
  // Software & Web Development Services
  { icon: Code, label: 'Custom Software Development', description: "Build scalable, robust software solutions tailored to your specific business needs and requirements." },
  { icon: Monitor, label: 'Web Application Development', description: "Create powerful, responsive web applications that deliver exceptional user experiences across all devices." },
  { icon: Smartphone, label: 'Mobile App Development', description: "Develop native and cross-platform mobile applications that engage users and drive business growth." },
  { icon: Globe2, label: 'Website Development', description: "Design and develop modern, fast-loading websites that convert visitors into customers." },
  { icon: Database, label: 'Database Design & Management', description: "Optimize your data architecture with secure, scalable database solutions for better performance." },
  { icon: Zap, label: 'API Development & Integration', description: "Connect your systems seamlessly with custom APIs and third-party integrations for enhanced functionality." },
  { icon: Settings, label: 'Software Maintenance & Support', description: "Keep your applications running smoothly with ongoing maintenance, updates, and technical support." }
];

// ==== ONLINE SERVICE ICON CARD ====
function OnlineServiceCard({ service }) {
  const Icon = service.icon;
  
  // Service Card with larger icons
  return (
    <div className="flex flex-col items-center justify-start group cursor-pointer text-center">
      <div className="bg-white dark:bg-black rounded-xl w-24 h-24 border-2 border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:border-transparent">
        <Icon size={48} className="text-gray-900 dark:text-white group-hover:text-white transition-colors duration-300" />
      </div>
      <span className="mt-3 text-sm font-bold text-white-700 dark:text-white-200 group-hover:text-pink-500 transition-colors duration-300">
        {service.label}
      </span>
      {service.description && (
        <p className="hidden group-hover:block mt-3 text-xs text-white-500 dark:text-white-400 leading-relaxed max-w-[180px] transition-opacity duration-300">
          {service.description}
        </p>
      )}
    </div>
  );
}

// ==== CUSTOM HOOK (Intersection) ====
function useInView(ref, options = {}) {
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    }, options);
    observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, [ref, options]);
  return isIntersecting;
}

// ==== STATS CARD ====
function StatCard({ stat, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  return (
    <div
      ref={ref}
      className="text-center group"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`,
      }}
    >
      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} p-4 group-hover:scale-110 transition-transform duration-300`}>
        <stat.icon size={32} className="text-white" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
        {stat.number}
      </div>
      <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
    </div>
  );
}

// ==== MILESTONE CARD ====
function MilestoneCard({ milestone, index, isActive }) {
  const isLeft = index % 2 === 0;
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.3 });
  return (
    <div
      ref={ref}
      className={`relative flex items-center ${isLeft ? 'justify-start' : 'justify-end'} transition-transform duration-700 ${
        isActive ? 'scale-105' : 'scale-95'
      }`}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView
          ? 'translateX(0)'
          : isLeft
          ? 'translateX(-40px)'
          : 'translateX(40px)',
        transition: 'all 0.7s ease',
      }}
      aria-label={`Milestone: ${milestone.title}`}
    >
      {/* Timeline node */}
      <div
        className={`
          absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-12 h-12 rounded-full border-4 border-black bg-gradient-to-r from-purple-500 to-pink-500
          shadow-[0_0_20px_rgba(236,72,153,0.8)]
          transition-all duration-700
          ${isActive ? 'animate-pulse shadow-[0_0_40px_rgba(236,72,153,1)]' : ''}
          z-20
        `}
      />
      {/* Content card */}
      <div
        className={`
          w-5/12 glass-morphism p-8 rounded-3xl shadow-xl shadow-pink-600/40
          bg-gradient-to-tr from-black/50 to-black/30
          transition-all duration-700 cursor-pointer select-none
          hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.85),0_0_40px_rgba(124,58,237,0.85)]
          ${isLeft ? 'text-right pr-10' : 'text-left pl-10'}
        `}
      >
        <div className="text-3xl font-extrabold text-gradient mb-4 select-none">
          {milestone.year}
        </div>
        <h4 className="text-2xl font-semibold text-white mb-3 tracking-wide">
          {milestone.title}
        </h4>
        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
      </div>
    </div>
  );
}

// ==== MAIN ABOUT SECTION ====
const AboutSection = () => {
  const stats = [
    { icon: Users, number: '100K+', label: 'Active Users', color: 'from-blue-500 to-cyan-500' },
    { icon: Award, number: '15+', label: 'Awards Won', color: 'from-yellow-500 to-orange-500' },
    { icon: Rocket, number: '99.9%', label: 'Uptime', color: 'from-green-500 to-emerald-500' },
    { icon: Target, number: '150+', label: 'Countries', color: 'from-purple-500 to-pink-500' },
  ];
  
  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Started with a vision to revolutionize digital experiences by integrating cutting-edge technology and strategic marketing.' },
    { year: '2021', title: 'Growth', description: 'Reached 20K users and expanded globally, driving innovation in combined tech and marketing solutions.' },
    { year: '2022', title: 'Innovation', description: 'Launched groundbreaking AI-powered features that transformed client engagement and marketing effectiveness.' },
    { year: '2023', title: 'Recognition', description: 'Won multiple industry awards for excellence in technology, marketing innovation, and AI implementation.' },
    { year: '2024', title: 'Future', description: 'Leading the next generation of immersive technology and data-driven marketing strategies.' },
    { year: '2025', title: 'Expansion', description: 'Going bigger by helping more customers harness technology, marketing, and AI to accelerate growth and innovation.' },
  ];
  
  const [activeIndex, setActiveIndex] = useState(null);
  const milestoneRefs = useRef([]);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.75;
      let currentActive = null;
      milestoneRefs.current.forEach((ref, i) => {
        if (ref) {
          const offsetTop = ref.offsetTop;
          if (scrollPos >= offsetTop) {
            currentActive = i;
          }
        }
      });
      setActiveIndex(currentActive);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const setMilestoneRef = (el, index) => {
    milestoneRefs.current[index] = el;
  };
  
  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 text-gradient"
            style={{ opacity: 0, transform: 'translateY(20px)', animation: 'fadeSlideUp 0.8s forwards' }}
          >
            Netzwert Services
          </h2>
          <p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            style={{ opacity: 0, transform: 'translateY(20px)', animation: 'fadeSlideUp 0.8s 0.2s forwards' }}
          >
            We're pioneering the future of digital experiences through innovative technology, strategic marketing, exceptional design, and an unwavering commitment to user satisfaction.
          </p>
        </div>
        
        {/* = SERVICES SECTION = */}
        <div className="mb-24">
          <div className="w-full">                       
            {/* Icon Grid - Full Width */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 justify-items-center">
              {onlineServices.map((service, idx) => (
                <OnlineServiceCard key={idx} service={service} />
              ))}
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
        
        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="opacity-0 translate-x-[-40px]" style={{ animation: 'slideFadeInLeft 0.8s forwards' }}>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                At Netzwert, we believe that technology and marketing go hand-in-hand to create intuitive, beautiful, and transformative digital experiences. Our mission is to craft solutions that not only meet user needs but also elevate brands and inspire customers at every interaction.
            </p>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                By combining cutting-edge technology with strategic, data-driven marketing and human-centered design, we build impactful solutions that drive real business growth. Every project is a chance to push boundaries and deliver measurable results.
            </p>
          </div>
          <div className="relative opacity-0 translate-x-[40px]" style={{ animation: 'slideFadeInRight 0.8s forwards' }}>
            <div className="relative w-full h-80 rounded-2xl glass-morphism overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20"></div>
              {/* Animated elements inside the box */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse"></div>
                  <div
                    className="absolute inset-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 animate-spin"
                    style={{ animationDuration: '3s' }}
                  ></div>
                  <div className="absolute inset-8 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 animate-bounce"></div>
                </div>
              </div>
              {/* Corner elements */}
              <div className="absolute top-4 left-4 w-3 h-3 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* = CLIENTS LOGO SECTION = */}
        <div className="mb-0">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-10">Clients we have worked</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-center">
            <img src="https://mrmechanic.co/static/media/mrmechanics-logo.1133374bdc3106a01cfd.png" alt="Client 1" className="mx-auto grayscale hover:grayscale-0 transition" />
            <img src="https://lyamii.com/static/media/lyamii.450cb31d01df8ab4ed90.webp" alt="Client 2" className="mx-auto grayscale hover:grayscale-0 transition" />
            <img src="https://www.trippro.in/static/media/tripproLogo.8c9f30fc53190c149ba5.png" alt="Client 3" className="mx-auto grayscale hover:grayscale-0 transition" />
            <img src="https://araikay.com/static/media/araikayLogo.497a5681a2ec328f1c80.png" alt="Client 4" className="mx-auto grayscale hover:grayscale-0 transition" />
            <img src="https://www.rtoxpert.com/static/media/rtoxpertLogo.c75aa58572ed90aeba16.png" alt="Client 5" className="mx-auto grayscale hover:grayscale-0 transition" />
          </div>
        </div>
        
        {/* = IMMERSIVE OUR JOURNEY TIMELINE = */}
        {/* <div className="relative mt-10"> */}
            {/* <h3
                className="text-4xl md:text-5xl font-bold text-center text-white mb-16 tracking-wide drop-shadow-lg"
                style={{ opacity: 0, transform: 'translateY(20px)', animation: 'fadeSlideUp 0.8s forwards' }}
            >
                Our Journey
            </h3> */}
            {/* Vertical timeline bar */}
            {/* <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full rounded-full bg-gradient-to-b from-purple-500 to-pink-500 shadow-lg"></div>
            <div className="space-y-24">
                {milestones.map((milestone, index) => (
                <div key={index} ref={(el) => setMilestoneRef(el, index)}>
                    <MilestoneCard milestone={milestone} index={index} isActive={index === activeIndex} />
                </div>
                ))}
            </div> */}
        {/* </div> */}
      </div>
      
      {/* Inline keyframes for fade-slide effects */}
      <style>{`
        @keyframes fadeSlideUp {
          0% { opacity: 0; transform: translateY(20px);}
          100% {opacity: 1; transform: translateY(0);}
        }
        @keyframes slideFadeInLeft {
          0% {opacity: 0; transform: translateX(-40px);}
          100% {opacity: 1; transform: translateX(0);}
        }
        @keyframes slideFadeInRight {
          0% {opacity: 0; transform: translateX(40px);}
          100% {opacity: 1; transform: translateX(0);}
        }
      `}</style>
    </section>
  );
};

export default AboutSection;