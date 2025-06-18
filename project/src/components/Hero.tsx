import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ['Full Stack Developer', 'Python Enthusiast', 'Open Source Contributor', 'Solution Builder'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentText(texts[currentIndex]);
  }, [currentIndex]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-4">
            Hey there, I'm{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              Samarth Paliwal
            </span>{' '}
            👋
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-2">
            I'm not just a developer—I'm a solution builder.
          </p>
          <div className="h-8 mb-6">
            <p className="text-lg sm:text-xl text-gray-600 animate-pulse">
              💻 <span className="font-semibold text-blue-600">{currentText}</span>
            </p>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            From backend APIs to full-stack apps, I love turning complex problems into clean, scalable code.
            <br />
            <span className="font-semibold text-gray-800">Let's build something that matters.</span>
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            👉 Check Out My Work
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
          >
            💬 Let's Connect
          </button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="https://github.com/samarthpaliwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/samarthpaliwal"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:ram.paliwal49@gmail.com"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+917869447295"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
          >
            <Phone size={24} />
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce text-gray-500 hover:text-blue-600 transition-colors duration-200"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;