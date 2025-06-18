import React from 'react';
import { MapPin, Calendar, Code, Smartphone, CheckCircle } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Backend Intern",
      company: "HighBreed Dev",
      location: "Canada – Remote",
      period: "2024",
      icon: <Code className="h-6 w-6" />,
      achievements: [
        "18,000+ lines of real, production-ready code",
        "Built features for Mrkt365 (live project)",
        "CRON Jobs, Email Systems, API Integrations"
      ],
      color: "blue"
    },
    {
      title: "Mobile App Intern",
      company: "XeA Innovations",
      location: "Remote",
      period: "2023",
      icon: <Smartphone className="h-6 w-6" />,
      achievements: [
        "Flutter-based Smart QR Attendance App",
        "2,000+ lines of neat, efficient code",
        "Learned fast, shipped faster"
      ],
      color: "teal"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            💼 Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real experience with real impact at innovative companies.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-teal-500 hidden lg:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-teal-500 to-teal-600'} text-white mr-4`}>
                        {exp.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                        <p className="text-lg font-semibold text-blue-600">{exp.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 mb-4 space-x-4">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {exp.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden lg:flex w-2/12 justify-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${exp.color === 'blue' ? 'from-blue-500 to-blue-600' : 'from-teal-500 to-teal-600'} shadow-lg`}></div>
                </div>

                {/* Spacer */}
                <div className="w-full lg:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;