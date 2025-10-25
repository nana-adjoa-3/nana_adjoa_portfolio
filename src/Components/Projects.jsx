// components/Projects.js
import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Multi-Page Application",
      description: "A sophisticated multi-page platform demonstrating modern React patterns, complex routing, and responsive design. Built with clean architecture and optimized performance.",
      technologies: ["React", "Tailwind CSS", "JavaScript", "Responsive Design"],
      liveLink: "https://multi-page-nana.vercel.app/",
      githubLink: "https://github.com/nana-adjoa-3/multi-page-nana",
      image: "/api/placeholder/600/400",
      features: ["Complex routing", "State management", "Mobile-first design", "Performance optimized"]
    },
    {
      title: "Test Portal System",
      description: "An interactive assessment platform with dynamic functionality and real-time features. Designed for seamless user experience and modern web standards.",
      technologies: ["React", "Tailwind CSS", "Interactive UI", "Modern Hooks"],
      liveLink: "https://test-portal-psi.vercel.app/",
      githubLink: "https://github.com/nana-adjoa-3/test-portal",
      image: "/api/placeholder/600/400",
      features: ["Dynamic forms", "Real-time updates", "User-friendly interface", "Clean code architecture"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Showcasing my expertise in building modern, responsive web applications with React and Tailwind CSS
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
              {/* Project Image */}
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">Project Preview</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700 border border-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Key Features:</h4>
                  <ul className="text-slate-600 list-disc list-inside space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex space-x-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FaExternalLinkAlt size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border-2 border-slate-300 text-slate-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-400 hover:text-blue-700 transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;