// components/Hero.js
import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/nana-adjoa-3" className="text-slate-600 hover:text-blue-600 transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600 transition-colors">
            <FaTwitter size={20} />
          </a>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
          Nana Adjoa <span className="text-blue-600">Bentum</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-slate-600 mb-8">
          <span className="font-semibold text-slate-900">Frontend Engineer</span> | React & Tailwind CSS Specialist
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          Crafting high-performance, responsive web applications with modern React and Tailwind CSS. 
          Bridging technical excellence with user-centered design to create impactful digital experiences.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a 
            href="#projects" 
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
          >
            View My Projects
          </a>
          <a 
            href="#contact" 
            className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors"
          >
            Get In Touch
          </a>
        </div>

        {/* Tech Icons */}
        <div className="flex justify-center items-center space-x-8 text-slate-400 mb-8">
          <div className="text-center">
            <div className="bg-white rounded-full p-3 shadow-lg mb-2">
              <span className="font-bold text-blue-500">React</span>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-3 shadow-lg mb-2">
              <span className="font-bold text-cyan-500">Tailwind</span>
            </div>
          </div>
          <div className="text-center">
            <div className="bg-white rounded-full p-3 shadow-lg mb-2">
              <span className="font-bold text-yellow-500">JS</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <FaArrowDown className="text-slate-400 mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;