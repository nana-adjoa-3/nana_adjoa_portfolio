// components/Experience.js
import React from 'react';
import { FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      period: "2025 - Present",
      title: "Software Development Facilitator",
      company: "Civilwise Ventures",
      location: "Winneba, Ghana",
      responsibilities: [
        "Delivering lessons on software development topics (HTML, CSS, JavaScript, Git, databases, frameworks)",
        "Providing code reviews and feedback to improve students' programming skills",
        "Supporting students in developing projects and portfolios",
        "Tracking progress through coding challenges and assignments"
      ]
    },
    {
      period: "2024 - 2025",
      title: "Teaching & Technician Assistant",
      company: "University of Cape Coast",
      location: "Cape Coast, Ghana",
      responsibilities: [
        "Assisting instructors during lectures and lab sessions",
        "Troubleshooting hardware and software issues",
        "Setting up machines for classes and performing maintenance",
        "Supervising and guiding students during lab experiments"
      ]
    },
    {
      period: "2021 - 2022",
      title: "MIS Intern",
      company: "University of Cape Coast",
      location: "Cape Coast, Ghana",
      responsibilities: [
        "Assisted with preparation of student ID cards",
        "Performed hardware troubleshooting and maintenance",
        "Reset student passwords and handled system administration tasks",
        "Provided technical support to students and faculty"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Professional <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Combining technical expertise with teaching and leadership experience
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 top-16 w-0.5 h-20 bg-blue-200"></div>
              )}
              
              <div className="flex">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-6">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900">{exp.title}</h3>
                    <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                      <FaCalendar size={14} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-slate-600 mb-6">
                    <FaMapMarkerAlt size={14} />
                    <span className="font-semibold">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <li key={respIndex} className="flex items-start space-x-3 text-slate-600">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;