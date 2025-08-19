import React, { useState } from 'react';
import { ExternalLink, Github, Play, ArrowRight, Calendar, Users, Zap, Globe, Smartphone, ShoppingCart, BarChart3, Brain } from 'lucide-react';
import GlowingCard from '../common/GlowingCard';

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: 'all', name: 'All Projects', icon: Globe },
    { id: 'web-apps', name: 'Web Applications', icon: Globe },
    { id: 'mobile', name: 'Mobile Apps', icon: Smartphone },
    { id: 'ecommerce', name: 'E-Commerce', icon: ShoppingCart },
    { id: 'marketing', name: 'Digital Marketing', icon: BarChart3 },
    { id: 'ai', name: 'AI Solutions', icon: Brain },
  ];

  const projects = [
    {
      id: 1,
      title: "FinTech Trading Platform",
      category: "web-apps",
      description: "Real-time cryptocurrency trading platform with advanced analytics and portfolio management.",
      longDescription: "A comprehensive cryptocurrency trading platform built with React, Node.js, and WebSocket technology. Features include real-time price tracking, advanced charting, portfolio management, and automated trading strategies.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "WebSocket", "MongoDB", "AWS"],
      results: {
        users: "50K+",
        performance: "99.9% uptime",
        revenue: "$2M+ trading volume"
      },
      timeline: "6 months",
      team: "5 developers",
      links: {
        live: "#",
        github: "#",
        demo: "#"
      },
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 2,
      title: "Healthcare Management App",
      category: "mobile",
      description: "Mobile application for patient management, appointment scheduling, and telemedicine consultations.",
      longDescription: "A comprehensive healthcare management solution built with React Native and Node.js. Features include patient records management, appointment scheduling, video consultations, prescription management, and health analytics dashboard.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS"],
      results: {
        users: "25K+",
        satisfaction: "4.8/5 rating",
        efficiency: "60% faster consultations"
      },
      timeline: "8 months",
      team: "6 developers",
      links: {
        live: "#",
        demo: "#"
      },
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 3,
      title: "E-Commerce Fashion Store",
      category: "ecommerce",
      description: "Modern e-commerce platform with AI-powered recommendations and seamless checkout experience.",
      longDescription: "A next-generation e-commerce platform featuring AI-powered product recommendations, virtual try-on capabilities, seamless payment integration, and comprehensive analytics dashboard. Built with modern technologies for optimal performance.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Redis", "Vercel"],
      results: {
        conversion: "35% increase",
        revenue: "$5M+ annual",
        customers: "100K+"
      },
      timeline: "4 months",
      team: "4 developers",
      links: {
        live: "#",
        github: "#"
      },
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 4,
      title: "Digital Marketing Campaign",
      category: "marketing",
      description: "Comprehensive digital marketing strategy resulting in 300% ROI increase for SaaS company.",
      longDescription: "A data-driven digital marketing campaign encompassing SEO optimization, Google Ads management, social media marketing, and content strategy. Implemented advanced analytics and conversion tracking for maximum ROI.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["Google Ads", "Analytics", "SEMrush", "HubSpot", "Facebook Ads"],
      results: {
        roi: "300% increase",
        leads: "500% more leads",
        traffic: "250% website traffic"
      },
      timeline: "3 months",
      team: "3 specialists",
      links: {
        demo: "#"
      },
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      title: "AI-Powered Chatbot System",
      category: "ai",
      description: "Intelligent customer service chatbot with natural language processing and learning capabilities.",
      longDescription: "An advanced AI chatbot system powered by machine learning and natural language processing. Features include multi-language support, sentiment analysis, automated ticket routing, and continuous learning from interactions.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Python", "TensorFlow", "NLP", "Docker", "AWS Lambda"],
      results: {
        satisfaction: "90% user satisfaction",
        efficiency: "70% faster responses",
        cost: "50% support cost reduction"
      },
      timeline: "5 months",
      team: "3 AI engineers",
      links: {
        github: "#",
        demo: "#"
      },
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      title: "Real Estate Platform",
      category: "web-apps",
      description: "Comprehensive real estate platform with virtual tours, property management, and CRM integration.",
      longDescription: "A full-featured real estate platform offering property listings, virtual 3D tours, mortgage calculators, agent CRM, and automated marketing tools. Built with scalable architecture to handle high traffic and large datasets.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      technologies: ["Vue.js", "Laravel", "MySQL", "Three.js", "CloudFlare"],
      results: {
        listings: "50K+ properties",
        agents: "1K+ active agents",
        revenue: "40% increase in sales"
      },
      timeline: "7 months",
      team: "6 developers",
      links: {
        live: "#",
        demo: "#"
      },
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const handleViewProject = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover how we've transformed businesses across industries with innovative technology solutions and strategic digital marketing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          {categories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-400 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              <category.icon size={18} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <GlowingCard
              key={project.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleViewProject(project)}
            >
              <div className="relative">
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-lg mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.color} animate-pulse`}></div>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-purple-300 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-600/20 rounded-full text-gray-400 text-xs font-medium">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* Quick Stats */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {project.timeline}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={14} />
                    {project.team}
                  </div>
                </div>

                {/* Action Buttons */}
                {/* <div className="flex gap-3">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 flex-1 justify-center"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </a>
                  )}
                  <button className="flex items-center gap-2 px-4 py-2 border border-purple-500/50 rounded-lg text-sm font-semibold hover:bg-purple-500/10 transition-all duration-300">
                    <ArrowRight size={14} />
                    Details
                  </button>
                </div> */}
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4">
            <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <GlowingCard className="relative">
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors duration-300 z-10"
                >
                  ×
                </button>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Project Image */}
                  <div className="relative">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 md:h-80 object-cover rounded-lg"
                    />
                    <div className={`absolute top-4 left-4 w-4 h-4 rounded-full bg-gradient-to-r ${selectedProject.color} animate-pulse`}></div>
                  </div>

                  {/* Project Details */}
                  <div>
                    <h3 className="text-3xl font-bold text-gradient mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {selectedProject.longDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-purple-600/20 rounded-full text-purple-300 text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Key Results</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {Object.entries(selectedProject.results).map(([key, value], index) => (
                          <div key={index} className="bg-gray-800/50 rounded-lg p-3">
                            <div className="text-lg font-bold text-gradient">{value}</div>
                            <div className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <div>
                          <div className="text-white font-medium">Timeline</div>
                          <div className="text-sm">{selectedProject.timeline}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <Users size={16} />
                        <div>
                          <div className="text-white font-medium">Team Size</div>
                          <div className="text-sm">{selectedProject.team}</div>
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="flex gap-4">
                      {selectedProject.links.live && (
                        <a
                          href={selectedProject.links.live}
                          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                        >
                          <ExternalLink size={18} />
                          View Live
                        </a>
                      )}
                      {selectedProject.links.github && (
                        <a
                          href={selectedProject.links.github}
                          className="flex items-center gap-2 px-6 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                        >
                          <Github size={18} />
                          GitHub
                        </a>
                      )}
                      {selectedProject.links.demo && (
                        <a
                          href={selectedProject.links.demo}
                          className="flex items-center gap-2 px-6 py-3 border border-purple-500/50 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300"
                        >
                          <Play size={18} />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlowingCard>
            </div>
          </div>
        )}

        {/* Portfolio Stats */}
        {/* <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            { number: "900+", label: "Projects Delivered", icon: Zap },
            { number: "7000+", label: "Happy Clients", icon: Users },
            { number: "50+", label: "Technologies", icon: Globe },
            { number: "99.9%", label: "Success Rate", icon: BarChart3 },
          ].map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={24} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div> */}

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can bring your vision to life with cutting-edge technology and strategic expertise.
          </p>
          <button
            onClick={() => {
              const homeSection = document.getElementById('home');
              if (homeSection) {
                homeSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Get Started Today
          </button>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default ProjectsSection;