import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Github, Instagram, Twitter, Brain } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full px-8 py-12 bg-gradient-to-b from-[#241E41] to-[#0F0F15] border-t border-purple-600 shadow-[0_4px_24px_-1px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-purple-500 text-2xl font-bold flex items-center gap-2">
            <Brain className="w-6 h-6" /> HealthHub
          </h2>
          <p className="text-gray-300 leading-relaxed">
          Your third-party healthcare platform has immense potential to transform how patients—especially the elderly and young parents—manage their medical lives.
          </p>
        </div>

        {/* Explore Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-purple-500 font-semibold text-lg">Explore</h3>
          <ul className="flex flex-col gap-3">
            {['Home', 'Innovations', 'Team', 'Contact'].map((item) => (
              <li key={item}>
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-purple-500 font-semibold text-lg">Contact</h3>
          <ul className="flex flex-col gap-3">
            <li className="text-gray-300">
              <strong className="text-purple-400">Email:</strong> eliteAchivers@gmail.com
            </li>
            <li className="text-gray-300">
              <strong className="text-purple-400">Tel:</strong> +91 8368770024
            </li>
            <li className="text-gray-300">
              <strong className="text-purple-400">WhatsApp:</strong> +91 8368770024
            </li>
            <li className="text-gray-300">
              Team Elite Achivers private limited 
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="flex flex-col gap-4">
          <h3 className="text-purple-500 font-semibold text-lg">Connect</h3>
          <div className="flex gap-4">
            {[
              { icon: Facebook, href: '#' },
              { icon: Github, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-300 hover:text-purple-400 transition-colors duration-200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-purple-800/30">
        <p className="text-gray-400 text-sm text-center">
          Copyright © {new Date().getFullYear()} Elite Achivers . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;