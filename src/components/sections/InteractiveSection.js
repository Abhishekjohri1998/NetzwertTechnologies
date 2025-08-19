import React, { useState, useEffect } from 'react';
import { Star, Sparkles, Zap } from 'lucide-react';

const InteractiveSection = () => {
  const [activeDemo, setActiveDemo] = useState(0);
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate random particles for the demo area
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 3,
    }));
    setParticles(newParticles);
  }, []);

  const demos = [
    {
      title: "Real-time Interactions",
      description: "Every element responds instantly to your actions",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Adaptive Interfaces",
      description: "UI that learns and adapts to user preferences",
      icon: Sparkles,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Personalized Experiences",
      description: "Tailored content for each individual user",
      icon: Star,
      color: "from-cyan-400 to-blue-500"
    }
  ];

  const handleTryDemoClick = () => {
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="portfolio" className="relative py-20 px-4 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Immerse Yourself in
              <span className="block text-gradient mt-2">
                Interactive Design
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Every element responds to your presence, creating a living, breathing digital environment that adapts to your needs and enhances your experience.
            </p>

            {/* Interactive Demo List */}
            <div className="space-y-4 mb-8">
              {demos.map((demo, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                    activeDemo === index 
                      ? 'glass-morphism glow-effect' 
                      : 'hover:bg-white/5'
                  }`}
                  onClick={() => setActiveDemo(index)}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${demo.color}`}>
                    <demo.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {demo.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {demo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              onClick={handleTryDemoClick}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Try Interactive Demo
            </button>
          </div>

          {/* Right Interactive Demo */}
          <div className="relative animate-slide-in-right">
            <div className="relative w-full h-96 rounded-2xl glass-morphism overflow-hidden group">
              {/* Dynamic background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${demos[activeDemo].color} opacity-20 transition-all duration-500`}></div>

              {/* Animated particles */}
              {particles.map((particle) => (
                <div
                  key={particle.id}
                  className="absolute bg-white rounded-full opacity-60 animate-ping"
                  style={{
                    left: `${particle.x}%`,
                    top: `${particle.y}%`,
                    width: `${particle.size}px`,
                    height: `${particle.size}px`,
                    animationDelay: `${particle.delay}s`,
                    animationDuration: '2s'
                  }}
                />
              ))}

              {/* Center content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${demos[activeDemo].color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                    {React.createElement(demos[activeDemo].icon, { size: 40, className: "text-white" })}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {demos[activeDemo].title}
                  </h3>
                  <p className="text-gray-300">
                    Interactive Experience
                  </p>
                </div>
              </div>

              {/* Hover effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Corner decorations */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Floating indicators */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full animate-bounce opacity-60"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-bounce opacity-60" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>

      {/* Section background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default InteractiveSection;
