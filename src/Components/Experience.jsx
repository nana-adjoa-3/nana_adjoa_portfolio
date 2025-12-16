import React from "react";
import { FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

const Experience = () => {
  const experiences = [
    {
      period: "Nov 2025 – Present",
      title: "Front-End Developer",
      company: "AgriOne Technologies",
      location: "Accra, Ghana",
      responsibilities: [
        "Building responsive interfaces with React and Tailwind CSS",
        "Developing reusable UI components",
        "Debugging frontend issues and improving performance",
        "Collaborating on AgriTech product features"
      ]
    },
    {
      period: "May 2025 – Aug 2025",
      title: "Software Development Facilitator",
      company: "Civilwise Ventures",
      location: "Winneba, Ghana",
      responsibilities: [
        "Teaching web development fundamentals",
        "Providing code reviews and mentoring",
        "Guiding student project development"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          Professional <span className="text-blue-600">Experience</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i}>
              <div className="flex justify-between mb-2">
                <h3 className="text-2xl font-bold">{exp.title}</h3>
                <span className="flex items-center gap-2 text-blue-600">
                  <FaCalendar /> {exp.period}
                </span>
              </div>
              <div className="flex items-center gap-2 text-slate-600 mb-4">
                <FaMapMarkerAlt /> {exp.company} • {exp.location}
              </div>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                {exp.responsibilities.map((r, j) => (
                  <li key={j}>{r}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
