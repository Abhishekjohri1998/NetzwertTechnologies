import React, { useState } from 'react';
import { Globe, Zap, Shield, Smartphone, Cloud, Lock, BarChart2, Cpu } from 'lucide-react';
import GlowingCard from '../common/GlowingCard';

const FeaturesSection = () => {
  // State to toggle showing all features
  const [showAll, setShowAll] = useState(false);

  const features = [
    {
      icon: Globe,
      title: "Global Reach",
      description: "Connect with users worldwide through seamless cross-platform experiences that transcend geographical boundaries.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance that delivers results at the speed of thought with advanced caching and optimization.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Shield,
      title: "Secure by Design",
      description: "Enterprise-grade security protecting your data and privacy with end-to-end encryption and advanced protocols.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Responsive design that looks and works beautifully across all devices and screen sizes.",
      color: "from-purple-500 to-indigo-500"
    },
    {
      icon: Cloud,
      title: "Cloud Native",
      description: "Built for the cloud with scalable architecture that grows with your business needs.",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Lock,
      title: "Privacy Focused",
      description: "Your data stays yours. We implement privacy-first principles in everything we build.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: BarChart2,
      title: "Strategic Marketing",
      description: "Data-driven marketing strategies to grow your brand, optimize customer engagement, and maximize ROI.",
      color: "from-green-400 to-lime-400"
    },
    {
      icon: Cpu,
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence for personalized experiences, predictive analytics, and business automation.",
      color: "from-pink-600 to-red-500"
    }
  ];

  // Determine which features to show
  const featuresToShow = showAll ? features : features.slice(0, 3);

  return (
    <section id="services" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
            Revolutionary Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Discover the cutting-edge technologies, strategic marketing, and AI-driven solutions that power the future of digital experiences.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresToShow.map((feature, index) => (
            <GlowingCard
              key={index}
              className="group transform hover:scale-105 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Icon with gradient background */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon size={32} className="text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-gradient transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Bottom CTA */}
        {!showAll && (
          <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              Explore All Features
            </button>
          </div>
        )}
      </div>

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default FeaturesSection;
