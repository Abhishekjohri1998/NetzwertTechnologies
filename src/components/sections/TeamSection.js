import React, { useState } from 'react';
import { Github, Linkedin, Twitter, Mail, Star, Award, Code, Palette } from 'lucide-react';
import GlowingCard from '../common/GlowingCard';

const TeamSection = () => {
  const [activeTeamMember, setActiveTeamMember] = useState(0);

const teamMembers = [
    {
    name: "Abhishek Johri",
    role: "Founder and CEO (Senior Tech)",
    bio: "Visionary founder with deep technical expertise, leading strategy and execution for top-tier digital solutions.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFu8M--VudRnQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686569690578?e=1756944000&v=beta&t=UsNRPOD8W-okE7ocCG9VOkhth1N9YI-5RpI01eNQjE8",
    skills: ["Leadership", "Product Strategy", "System Architecture", "Full Stack Development"],
    achievements: ["Founded 2 successful startups", "Mentor for 50+ tech professionals"],
    social: {
    //   linkedin: "https://www.linkedin.com/in/abhishek-johri-7a6409183/",
    //   github: "#",
    //   email: "abhishek@netzwert.com"
    },
    color: "from-yellow-500 to-orange-500"
  },
  {
    name: "Rajat Johri",
    role: "Lead Full-Stack Developer",
    bio: "10+ years crafting scalable web applications with expertise in React, Node.js, and cloud architecture.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHfZEHTcfDz9A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1730098320929?e=1756944000&v=beta&t=-ESVssgUzIchcIoBmT--Ldc3A5IUY5rkW3M8btVXgDM",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    achievements: ["Lead Developer on 200+ projects", "AWS Certified Solutions Architect"],
    social: {
    //   github: "#",
    //   linkedin: "https://www.linkedin.com/in/rajatjohri007/",
    //   twitter: "#",
    //   email: "rajat@netzwert.com"
    },
    color: "from-blue-500 to-cyan-500"
  },
   {
    name: "Amaan Siddiqui",
    role: "Digital Marketing Strategist",
    bio: "Growth hacker with 9+ years driving business results through data-driven marketing campaigns.",
    avatar: "https://media.licdn.com/dms/image/v2/D5635AQFbRbjDYncM2Q/profile-framedphoto-shrink_400_400/B56Zf4.X4sGoAc-/0/1752228791116?e=1756202400&v=beta&t=wlLsxFgw2YXRTOQNUJrXD1e_Mk5aONnHociZ50722sk",
    skills: ["SEO", "Google Ads", "Analytics", "Content Strategy"],
    achievements: ["Generated $50M+ in client revenue", "Google Ads Certified Expert"],
    social: {
    //   linkedin: "#",
    //   twitter: "#",
    //   email: "amaan@netzwert.com"
    },
    color: "from-green-500 to-emerald-500"
  },
  {
    name: "Pranjal Chaudhary",
    role: "Senior UI/UX Designer",
    bio: "Design strategist with 8+ years creating user-centered experiences that convert visitors into customers.",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQE0_jkvQicTNA/profile-displayphoto-scale_400_400/B4DZewBS4VGYAg-/0/1751004819751?e=1756944000&v=beta&t=-T1NmpIhIPSUCRLIP1NkSVzfncU2cNFeQKubCGzd99I",
    skills: ["Figma", "Adobe Creative Suite", "User Research", "Prototyping"],
    achievements: ["Designer for 150+ successful projects", "UX Design Award Winner 2023"],
    social: {
    //   linkedin: "https://www.linkedin.com/in/pranjal-chaudhari",
    //   twitter: "#",
    //   email: "pranjal@netzwert.com"
    },
    color: "from-purple-500 to-pink-500"
  },
  
 
  {
    name: "Aryan Vora",
    role: "Cloud Solutions Architect",
    bio: "Infrastructure expert specializing in scalable cloud solutions and DevOps automation.",
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQGZxnwRKFlWuA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1645285456951?e=1756944000&v=beta&t=nUO8dK7kERaRHE2qAafbT1B-sXZP3MGB6_fU5zT2JQc",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    achievements: ["Architected 100+ cloud solutions", "AWS Solution Architect Professional"],
    social: {
    //   github: "#",
    //   linkedin: "https://www.linkedin.com/in/aryan9721/",
    //   email: "aryan@netzwert.com"
    },
    color: "from-orange-500 to-red-500"
  },
  {
    name: "Prasad Naik",
    role: "AI/ML Engineer",
    bio: "Machine learning specialist building intelligent solutions that automate and optimize business processes.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    skills: ["Python", "TensorFlow", "Data Science", "API Development"],
    achievements: ["Built 50+ AI-powered features", "Published ML research papers"],
    social: {
    //   github: "#",
    //   linkedin: "https://www.linkedin.com/in/prasad-n-b26a4813b/",
    //   email: "prasad@netzwert.com"
    },
    color: "from-indigo-500 to-purple-500"
  },
  {
    name: "Guru Bhat",
    role: "Project Manager & Client Success",
    bio: "Agile project management expert ensuring seamless delivery and exceptional client experiences.",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQHHbH2NN2-oLw/profile-displayphoto-shrink_400_400/B56ZU.BMSkGQAk-/0/1740502259314?e=1756944000&v=beta&t=qKvIMzHGlYRM0YZkEtvxrCpz0S3X2BPmI3-kT1uEqMM",
    skills: ["Agile", "Scrum", "Client Relations", "Process Optimization"],
    achievements: ["Managed 300+ successful projects", "PMP Certified Professional"],
    social: {
    //   linkedin: "https://www.linkedin.com/in/guru-bhat-030745132/",
    //   email: "guru@netzwert.com"
    },
    color: "from-pink-500 to-rose-500"
  },
  
];


  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github': return Github;
      case 'linkedin': return Linkedin;
      case 'twitter': return Twitter;
      case 'email': return Mail;
      default: return null;
    }
  };

  return (
    <section id="team" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gradient animate-fade-in-up">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Passionate professionals with 11+ years of combined experience, delivering exceptional results for over 7000+ satisfied clients worldwide.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <GlowingCard
              key={index}
              className={`group cursor-pointer transform hover:scale-105 transition-all duration-500 animate-fade-in-up ${
                activeTeamMember === index ? 'ring-2 ring-purple-500' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setActiveTeamMember(index)}
            >
              <div className="text-center">
                {/* Avatar */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r ${member.color} p-1`}>
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                    <Star size={16} className="text-white" />
                  </div>
                </div>

                {/* Basic Info */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gradient transition-all duration-300">
                  {member.name}
                </h3>
                <p className="text-purple-400 font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 justify-center mb-6">
                  {member.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-purple-600/20 rounded-full text-purple-300 text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4">
                  {Object.entries(member.social).map(([platform, url]) => {
                    const IconComponent = getSocialIcon(platform);
                    return IconComponent ? (
                      <a
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110"
                      >
                        <IconComponent size={16} className="text-gray-400 hover:text-white" />
                      </a>
                    ) : null;
                  })}
                </div>
              </div>
            </GlowingCard>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          {[
            { number: "11+", label: "Years Combined Experience" },
            { number: "900+", label: "Projects Completed" },
            { number: "7000+", label: "Happy Clients" },
            { number: "50+", label: "Technologies Mastered" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/5 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default TeamSection;