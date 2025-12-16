import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://github.com/nana-adjoa-3" className="text-slate-600 hover:text-blue-600">
            <FaGithub size={20} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-slate-600 hover:text-blue-600">
            <FaTwitter size={20} />
          </a>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4">
          Nana Adjoa <span className="text-blue-600">Bentum</span>
        </h1>

        <div className="text-xl md:text-2xl text-slate-600 mb-8">
          <span className="font-semibold text-slate-900">Frontend Web Developer</span>{" "}
          building scalable interfaces for AgriTech, Education & Data-driven platforms
        </div>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed mb-12">
          I design and build responsive, user-focused web applications using React and Tailwind CSS,
          translating real-world problems into clean, scalable digital solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#projects" className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-slate-300 px-8 py-4 rounded-lg font-semibold hover:border-blue-400">
            Get In Touch
          </a>
        </div>

        <div className="animate-bounce">
          <FaArrowDown className="mx-auto text-slate-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
