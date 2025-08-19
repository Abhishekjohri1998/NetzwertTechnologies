import React from 'react';
import { Menu, X } from 'lucide-react';
import { NAVIGATION_ITEMS } from '../../utils/constants';

// Corrected assets import path
import logo from '../../assests/logo.png';

const Header = ({ isMenuOpen, setIsMenuOpen, scrollPosition }) => {
  const isScrolled = scrollPosition > 50;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md border-b border-purple-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo on the left with increased height */}
         <div className="flex-shrink-0">
            <img src={logo} alt="Netzwert Logo" className="h-16 w-auto" />
        </div>

          {/* Navigation on the right */}
          <nav className="hidden md:flex space-x-8 items-center">
            {NAVIGATION_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-white hover:text-purple-400 transition-colors duration-300 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button on right */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-morphism hover:bg-purple-600/20 transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden mobile-menu transition-all duration-300 ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="glass-morphism border-t border-purple-500/20">
          <div className="px-4 py-6 space-y-4">
            {NAVIGATION_ITEMS.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-3 text-white hover:text-purple-400 transition-colors duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            {/* Get Started button is already removed */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
