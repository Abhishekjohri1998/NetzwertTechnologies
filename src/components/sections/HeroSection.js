import React, { useState } from "react";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

const HeroSection = ({
  scrollPosition = 0,
  mousePosition = { x: 0, y: 0 },
}) => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
  });

  // Replace this with your Google Apps Script Web App URL!
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxqOmYlZcl08WwziNhPUFed8OjPQKJ5E7eHCxZO1okBft11Q3G-dibIQnaUFiBDomxBQA/exec";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newLead = {
      name: formData.name,
      company: formData.company,
      email: formData.email,
      phone: formData.phone,
      requirement: formData.requirement,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newLead),
      });
      alert("Thank you! Your details have been submitted.");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        requirement: "",
      });
    } catch (error) {
      alert("Submission failed. Please try again.");
      console.error(error);
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
    >
      {/* Interactive Mouse Effect */}
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.4) 0%, transparent 50%)`,
        }}
      />

      {/* Main Grid Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 mt-32">
        {/* Left Content */}
        <div className="text-center lg:text-left">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 text-gradient animate-pulse-slow"
            style={{
              transform: `translateY(${scrollPosition * 0.3}px)`,
            }}
          >
            Netzwert
          </h1>
         <h2 className="text-3xl md:text-5xl lg:text-6xl font-light mb-8 text-gray-300 animate-fade-in-up">
            is{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 animate-glow">
                transformative
            </span>
        </h2>

          <p
            className="text-xl md:text-2xl mb-6 text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Lost in the digital maze? Stop the endless guessing and let us show you the way. Get a custom Web-App and Performance Marketing plan powered by AI that actually works for your business.
          </p>
          <p
            className="text-xl md:text-2xl mb-12 text-gray-400 max-w-3xl mx-auto lg:mx-0 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
           With over 500+ successful projects and counting, we combine smart AI technology, expert marketing strategies, and cutting-edge web/app solutions to help you achieve real growth – no fluff, just results.
          </p>
          {/* <div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start items-center animate-fade-in-up"
            style={{ animationDelay: "0.9s" }}
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl max-w-max mx-auto lg:mx-0">
              <span className="relative z-10 flex items-center gap-2">
                Explore Now
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="group flex items-center gap-3 px-8 py-4 border-2 border-purple-500/50 rounded-full font-semibold text-lg hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300 hover:scale-105 max-w-max mx-auto lg:mx-0">
              <Play size={20} className="group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div> */}
          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: "1.2s" }}>
            {[
              { number: "900+", label: "Projects Delivered" },
              { number: "7000+", label: "Satisfied Clients" },
              { number: "11+", label: "Years Experience" },
            ].map((stat, index) => (
              <div key={index} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content — Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="
            bg-black/30 
            glass-morphism 
            backdrop-blur-lg
            border border-purple-700/70
            rounded-2xl 
            p-10 
            max-w-md 
            mx-auto 
            animate-fade-in-up
            shadow-xl
            hover:shadow-[0_0_30px_rgba(124,58,237,0.7)]
            transition-shadow duration-500
          "
          style={{ animationDelay: "0.9s" }}
          noValidate
        >
          <h3 className="text-4xl font-extrabold text-white mb-8 text-center tracking-wide drop-shadow-[0_2px_8px_rgba(147,51,234,0.7)]">
            Contact Us
          </h3>
          <div className="space-y-6">
            {[
              { id: "name", name: "name", type: "text", placeholder: "Your full name" },
              { id: "company", name: "company", type: "text", placeholder: "Your company name" },
              { id: "email", name: "email", type: "email", placeholder: "you@example.com" },
              { id: "phone", name: "phone", type: "tel", placeholder: "+91 9876543210" },
            ].map(({ id, name, type, placeholder }) => (
              <input
                key={name}
                type={type}
                id={id}
                name={name}
                required
                value={formData[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className="w-full rounded-lg bg-black/60 border border-purple-600 text-white px-5 py-3 shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-shadow duration-300 placeholder-purple-400 hover:shadow-[0_0_10px_rgba(147,51,234,0.7)]"
              />
            ))}
            <textarea
              id="requirement"
              name="requirement"
              rows={4}
              value={formData.requirement}
              onChange={handleChange}
              placeholder="Please share your requirement"
              className="w-full rounded-lg bg-black/60 border border-purple-600 text-white px-5 py-3 resize-none shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:border-purple-400 transition-shadow duration-300 hover:shadow-[0_0_10px_rgba(147,51,234,0.7)]"
            />
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg text-white py-4 shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.85),0_0_35px_rgba(124,58,237,0.85)] transition-shadow duration-500 active:scale-95 transform"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-purple-400" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
      <div
        className="absolute top-40 right-20 w-32 h-32 bg-pink-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-40 left-20 w-16 h-16 bg-cyan-500/20 rounded-full blur-xl animate-float"
        style={{ animationDelay: "4s" }}
      ></div>
    </section>
  );
};

export default HeroSection;
