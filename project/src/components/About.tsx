import React from 'react';
import { Trophy, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: <Trophy className="h-6 w-6" />,
      title: "Top 50 All-India",
      description: "CSI DT Contest 🏆"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Global Rank #1363",
      description: "Codechef CookOff"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Multiple Live Products",
      description: "Making real impact!"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            👨‍💻 About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Who am I beyond the code?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <Lightbulb className="h-12 w-12 text-blue-600 mb-6" />
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I'm the kind of developer who's as excited about the <span className="font-semibold text-blue-600">"why"</span> behind a project as I am about the <span className="font-semibold text-teal-600">"how."</span> Whether it's building an email client from scratch or contributing to open-source tools used by thousands—I bring clarity, care, and clean code to everything I do.
              </p>
              <p className="text-gray-600 italic">
                Let's just say—if there's a challenge, I'm already sketching a solution.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              💡 A few things I'm proud of:
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-teal-50 transition-all duration-200">
                  <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow-sm text-blue-600">
                    {achievement.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;