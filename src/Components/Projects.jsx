import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "Commodity Aggregation Platform (Frontend)",
      description:
        "A component-based frontend showcasing agricultural commodity aggregation services, improving clarity, trust, and onboarding for farmers and buyers.",
      technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://multi-page-nana.vercel.app/",
      githubLink: "https://github.com/nana-adjoa-3/multi-page-nana",
      features: [
        "Reusable UI components",
        "Mobile-first responsive design",
        "Animated transitions",
        "Scalable routing structure",
        "Performance optimization"
      ]
    },
    {
      title: "Farm Management System",
      description:
        "A web-based system enabling farmers to manage livestock records, inventory, and daily operations digitally.",
      technologies: ["React", "JavaScript", "HTML", "CSS", "MySQL"],
      liveLink: "#",
      githubLink: "#",
      features: [
        "CRUD farm records",
        "Dashboard-style UI",
        "Designed for non-technical users",
        "Structured for future expansion"
      ]
    },
    {
      title: "Data Analytics & Visualization Dashboard",
      description:
        "An interactive dashboard that converts raw datasets into visual insights for better decision-making.",
      technologies: ["Python", "SQL", "Power BI", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
      features: [
        "Data cleaning & preparation",
        "Interactive charts",
        "Insight-driven layout",
        "Clear analytical summaries"
      ]
    },
    {
      title: "AgriOne Platform",
      description:
        "A production-level AgriTech platform currently under active development.",
      technologies: ["React", "Tailwind CSS"],
      liveLink: "#",
      githubLink: "#",
      features: [
        "Real-world product development",
        "Reusable UI components",
        "Scalable frontend architecture",
        "🚧 Case study coming soon"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Selected <span className="text-blue-600">Work</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real-world frontend projects with a focus on usability, scalability, and impact
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-slate-50 rounded-2xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-r from-blue-500 to-cyan-500" />

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-6">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white border rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc list-inside text-slate-600 mb-6 space-y-1">
                  {project.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div className="flex gap-4">
                  {project.liveLink !== "#" && (
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer"
                      className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2">
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                  {project.githubLink !== "#" && (
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer"
                      className="border px-5 py-3 rounded-lg flex items-center gap-2">
                      <FaGithub /> Code
                    </a>
                  )}
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
