import React from 'react';
import { Code, Database, Server, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["Python", "C++", "JavaScript", "TypeScript"],
      color: "blue"
    },
    {
      title: "Frameworks",
      icon: <Server className="h-6 w-6" />,
      skills: ["Django", "Django REST", "Angular", "jQuery"],
      color: "teal"
    },
    {
      title: "Tools & Tech",
      icon: <Wrench className="h-6 w-6" />,
      skills: ["Celery", "Bootstrap", "AJAX", "HTML/CSS", "CRON jobs"],
      color: "orange"
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6" />,
      skills: ["PostgreSQL", "SQLite3", "MySQL"],
      color: "green"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 text-blue-600 bg-blue-50",
      teal: "from-teal-500 to-teal-600 text-teal-600 bg-teal-50",
      orange: "from-orange-500 to-orange-600 text-orange-600 bg-orange-50",
      green: "from-green-500 to-green-600 text-green-600 bg-green-50"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            🧠 Skills I Bring to the Table
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Need someone who can handle both logic and user experience? That's me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const colorClasses = getColorClasses(category.color);
            const [gradientColors, textColor, bgColor] = colorClasses.split(' ');

            return (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className={`bg-gradient-to-r ${gradientColors} p-3 rounded-xl w-fit mb-4 text-white`}>
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className={`${bgColor} ${textColor} px-3 py-2 rounded-lg text-sm font-medium`}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              🛠️ Open Source & Community
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              I don't just use open-source—I contribute to it.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-2">1100+</div>
                <div className="text-gray-600">additions on django-phone-auth</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-teal-600 mb-2">8</div>
                <div className="text-gray-600">PRs merged during HacktoberFest</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-2">∞</div>
                <div className="text-gray-600">Custom mixins & decorators</div>
              </div>
            </div>
            <p className="text-gray-600 italic mt-6">
              Because good code is meant to be shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;