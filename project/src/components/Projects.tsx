import React from 'react';
import { ExternalLink, Star, Globe, Users } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SleekEmail",
      status: "Live Beta",
      icon: "📧",
      description: "Built a Gmail-style email client from scratch using Django, Angular & PostgreSQL.",
      features: ["IMAP/SMTP integration", "CRON jobs", "Bulk actions", "Sender grouping"],
      tech: ["Django", "Angular", "PostgreSQL"],
      link: "#",
      gradient: "from-blue-500 to-teal-500"
    },
    {
      title: "City Municipal Web App",
      status: "Germany",
      icon: "🌍",
      description: "Freelance project with custom backend, comment system, email automation, captcha, and separate dashboards.",
      features: ["Custom backend", "Email automation", "Dual dashboards", "International client"],
      tech: ["Django", "JavaScript", "PostgreSQL"],
      link: "#",
      gradient: "from-teal-500 to-green-500"
    },
    {
      title: "E-commerce Web App",
      status: "Coming Soon",
      icon: "🛍️",
      description: "Integrated Paytm payments, social login, guest cart, and auto-PDF invoice mailing.",
      features: ["Payment integration", "Social login", "Guest cart", "Auto invoicing"],
      tech: ["Django", "JavaScript", "Payment APIs"],
      link: "#",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            🚀 Projects That Speak for Themselves
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real applications solving real problems, with real impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
              <div className={`bg-gradient-to-r ${project.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl">{project.icon}</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              </div>

              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">✅ Features:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <Star className="h-3 w-3 text-yellow-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  View Project
                  <ExternalLink className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 italic">
            🎯 Delivered remotely with rave reviews from international clients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;