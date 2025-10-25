// components/Skills.js
import React from 'react';
import { FaCode, FaTools, FaUsers } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      icon: <FaCode className="text-blue-600" size={24} />,
      title: "Frontend Technologies",
      skills: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"]
    },
    {
      icon: <FaTools className="text-green-600" size={24} />,
      title: "Tools & Platforms",
      skills: ["Git & GitHub", "VSCode", "Power BI", "SQL", "Python", "Microsoft Excel"]
    },
    {
      icon: <FaUsers className="text-purple-600" size={24} />,
      title: "Soft Skills",
      skills: ["Leadership", "Teaching & Mentoring", "Public Speaking", "Analytical Thinking", "Project Management", "Team Collaboration"]
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-blue-400">Expertise</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            A comprehensive skill set combining technical proficiency with strong communication and leadership abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-slate-800 rounded-2xl p-8 hover:bg-slate-750 transition-colors">
              <div className="flex items-center space-x-4 mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">Languages</h3>
          <div className="flex justify-center space-x-12">
            <div className="text-center">
              <div className="bg-slate-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">🇬🇧</span>
              </div>
              <p className="font-semibold">English</p>
              <p className="text-slate-400">Native</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-800 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <span className="text-lg font-bold">🇬🇭</span>
              </div>
              <p className="font-semibold">Akan</p>
              <p className="text-slate-400">Twi, Fante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;