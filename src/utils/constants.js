// Navigation items for the header
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Projects', href: '#projects' },
  { name: 'Team', href: '#team' },
  { name: 'About', href: '#about' },
];

// Animation constants
export const ANIMATION_DURATION = {
  fast: 200,
  normal: 300,
  slow: 500,
  slower: 1000,
};

// Color themes for components
export const COLOR_THEMES = {
  primary: 'from-purple-600 to-pink-600',
  secondary: 'from-blue-500 to-cyan-500',
  success: 'from-green-500 to-emerald-500',
  warning: 'from-yellow-500 to-orange-500',
  danger: 'from-red-500 to-pink-500',
  info: 'from-indigo-500 to-purple-500',
};

// Breakpoints for responsive design
export const BREAKPOINTS = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Social media links
export const SOCIAL_LINKS = {
  github: 'https://github.com/netzwert',
  linkedin: 'https://linkedin.com/company/netzwert',
  twitter: 'https://twitter.com/netzwert',
  instagram: 'https://instagram.com/netzwert',
  email: 'contact@netzwert.com',
};

// Company information
export const COMPANY_INFO = {
  name: 'Netzwert',
  tagline: 'Transformative Digital Solutions',
  description: 'Empowering businesses through expert digital marketing strategies, cutting-edge technology solutions, and cloud services.',
  founded: '2013',
  location: 'Global',
  employees: '50+',
  projects: '900+',
  clients: '7000+',
};

// Project categories
export const PROJECT_CATEGORIES = [
  { id: 'all', name: 'All Projects' },
  { id: 'web-apps', name: 'Web Applications' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'ecommerce', name: 'E-Commerce' },
  { id: 'marketing', name: 'Digital Marketing' },
  { id: 'ai', name: 'AI Solutions' },
];

// Service offerings
export const SERVICES = [
  {
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies',
    technologies: ['React', 'Node.js', 'Next.js', 'Vue.js']
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile applications',
    technologies: ['React Native', 'Flutter', 'iOS', 'Android']
  },
  {
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies for business growth',
    technologies: ['SEO', 'Google Ads', 'Social Media', 'Analytics']
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and DevOps automation',
    technologies: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  },
  {
    title: 'AI & Machine Learning',
    description: 'Intelligent solutions powered by artificial intelligence',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Computer Vision']
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Complete online store development and optimization',
    technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions']
  }
];