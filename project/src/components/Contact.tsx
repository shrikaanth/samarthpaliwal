import React from 'react';
import { Mail, Phone, Linkedin, Github, MessageCircle, Rocket } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "ram.paliwal49@gmail.com",
      href: "mailto:ram.paliwal49@gmail.com",
      color: "blue"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 78694 47295",
      href: "tel:+917869447295",
      color: "teal"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/samarthpaliwal",
      href: "https://linkedin.com/in/samarthpaliwal",
      color: "blue"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/samarthpaliwal",
      href: "https://github.com/samarthpaliwal",
      color: "gray"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
      teal: "from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700",
      gray: "from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            🎯 Let's Collaborate
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking for a developer, contributor, or tech partner—I'm here to talk.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-8 rounded-2xl">
              <Rocket className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Let's build what's next. Together.
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                I'm always excited to work on challenging projects and collaborate with passionate people. Whether you have a specific project in mind or just want to chat about technology, I'd love to hear from you.
              </p>
              <div className="flex items-center text-blue-600">
                <MessageCircle className="h-5 w-5 mr-2" />
                <span className="font-semibold">Start a Conversation</span>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.href}
                target={method.href.startsWith('http') ? '_blank' : undefined}
                rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block p-6 bg-gradient-to-r ${getColorClasses(method.color)} text-white rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-3">
                    {method.icon}
                  </div>
                  <div className="font-semibold mb-1">{method.label}</div>
                  <div className="text-sm opacity-90 break-words">{method.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Something Amazing?</h3>
            <p className="text-lg mb-6 opacity-90">
              Let's turn your ideas into reality with clean code and creative solutions.
            </p>
            <a
              href="mailto:ram.paliwal49@gmail.com"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <Mail className="h-5 w-5 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;