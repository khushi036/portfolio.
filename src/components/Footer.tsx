import { Github, Linkedin, Twitter, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/khushi036/', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/khushi-saxena-2308a6251', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/KhushiSaxe70696', label: 'Twitter' },
    { icon: Instagram, href: 'https://instagram.com/khushi_saxena_699', label: 'Instagram' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" />
            <span>by Khushi Saxena</span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            © {new Date().getFullYear()} Khushi Saxena. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
