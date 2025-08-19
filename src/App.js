import React, { useState, useEffect } from "react";
import { useScrollPosition } from "./hooks/useScrollPosition";
import { useMousePosition } from "./hooks/useMousePosition";

// Component imports
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import HeroSection from "./components/sections/HeroSection";
import FeaturesSection from "./components/sections/FeaturesSection";
import InteractiveSection from "./components/sections/InteractiveSection";
import TeamSection from "./components/sections/TeamSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AboutSection from "./components/sections/AboutSection";
import AnimatedBackground from "./components/ui/AnimatedBackground";
import LoadingSpinner from "./components/ui/LoadingSpinner";

import "./App.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollPosition = useScrollPosition();
  const mousePosition = useMousePosition();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest(".mobile-menu")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="App min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground mousePosition={mousePosition} />

      {/* Header */}
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollPosition={scrollPosition}
      />

      {/* Main Content */}
      <main>
        <HeroSection
          scrollPosition={scrollPosition}
          mousePosition={mousePosition}
        />

        <AboutSection />

        <FeaturesSection />
        <TeamSection
          scrollPosition={scrollPosition}
          mousePosition={mousePosition}
        />
        <ProjectsSection />
        <InteractiveSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top button */}
      {scrollPosition > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default App;
