import React from 'react';
import { Code2, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Code2 className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold">Samarth Paliwal</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Building solutions that matter, one line of code at a time. Always excited to take on new challenges and create something amazing.
          </p>

          <div className="flex items-center justify-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart className="h-4 w-4 mx-2 text-red-400" />
            <span>and lots of ☕ by Samarth</span>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-gray-500 text-sm">
            <p>&copy; 2024 Samarth Paliwal. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;