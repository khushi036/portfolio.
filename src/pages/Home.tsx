import { Github, Linkedin, Twitter, Instagram, ArrowDown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

// ✅ IMAGE IMPORT (IMPORTANT)
import khushiImg from "../assets/khushi.jpg";

export default function Home() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/khushi036/', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/khushi-saxena-2308a6251/', label: 'LinkedIn', color: 'hover:text-blue-600' },
    { icon: Twitter, href: 'https://x.com/KhushiSaxe70696', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Instagram, href: 'https://instagram.com/khushi_saxena_699', label: 'Instagram', color: 'hover:text-pink-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          {/* LEFT SECTION */}
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                Welcome to my portfolio
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
                Khushi Saxena
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 font-medium">
              Software Developer & AI Enthusiast
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
              Passionate about creating innovative solutions and exploring the frontiers of artificial intelligence.
              Building the future, one line of code at a time.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/projects"
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg shadow-lg hover:scale-105 transition"
              >
                <span className="flex items-center gap-2">
                  View My Work
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-semibold rounded-lg shadow hover:scale-105 transition"
              >
                Get In Touch
              </Link>
            </div>

            <div className="flex items-center space-x-6 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 ${social.color} shadow-md hover:shadow-xl transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full blur-3xl opacity-20"></div>

              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl">
                {/* ✅ FIXED IMAGE */}
                <img
                  src={khushiImg}
                  alt="Khushi Saxena"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-xl">
                <p className="font-bold">Available for work</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
