import React from 'react';
import { Mail, Phone, MapPin, Twitter, Github, Linkedin, Instagram } from 'lucide-react';

// Import your logo image (adjust the path if needed)
import logo from '../../assests/logo.png';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Team', href: '#team' },
      { name: 'Projects', href: '#projects' }
    ],
    services: [
      { name: 'Web Development', href: '#services' },
      { name: 'Mobile Apps', href: '#services' },
      { name: 'UI/UX Design', href: '#services' },
      { name: 'Consulting', href: '#services' },
      { name: 'Marketing', href: '#services' },
      { name: 'Cloude Services', href: '#services' }
    ],
    // Removed resources and legal sections
  };

  const socialLinks = [
    // { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    // { name: 'Github', icon: Github, href: '#', color: 'hover:text-gray-400' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/netzwert-technologies/?viewAsMember=true', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/netz.wert?igsh=djV6czVyZTc1ODZk&utm_source=qr', color: 'hover:text-pink-400' }
  ];

  return (
    <footer id="contact" className="relative bg-gradient-to-b from-transparent to-black/50 border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-8 mb-12"> 
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <img 
              src={logo} 
              alt="Netzwert Logo" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-6 leading-relaxed text-left">
              Netzwert is a team of passionate experts delivering digital transformation through innovative projects, creative solutions, and client-centric service. Explore our exceptional <a href="#team" className="text-purple-400 hover:underline">Team</a> and <a href="#projects" className="text-purple-400 hover:underline">Projects</a>.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {/* <div className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-purple-400" />
                <span>hello@NETZWERT.com</span>
              </div> */}
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-purple-400" />
                <span>+91 7017-157-653</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={18} className="text-purple-400" />
                <span>Coco County, Noida, India</span>
              </div>
            </div>
          </div>

          {/* Company Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 mb-8">
          {socialLinks.map(({ name, icon: Icon, href, color }) => (
            <a
              key={name}
              href={href}
              aria-label={name}
              className={`text-gray-400 transition-colors duration-300 ${color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon size={28} />
            </a>
          ))}
        </div>

        {/* Footer Bottom Text */}
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Netzwer. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
