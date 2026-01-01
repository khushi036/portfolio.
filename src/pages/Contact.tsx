import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'saxenakhushi699@gmail.com',
      link: 'mailto:saxenakhushi699@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 7042959724',
      link: 'tel:+917042959724',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Greater Noida, India',
      link: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/khushi036', label: 'GitHub', color: 'hover:bg-gray-900 hover:text-white' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/khushi-saxena-2308a6251/', label: 'LinkedIn', color: 'hover:bg-blue-600 hover:text-white' },
    { icon: Twitter, href: 'https://x.com/KhushiSaxe70696', label: 'Twitter', color: 'hover:bg-blue-400 hover:text-white' },
    { icon: Instagram, href: 'https://instagram.com/khushi_saxena_699', label: 'Instagram', color: 'hover:bg-pink-600 hover:text-white' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Feel free to connect with me through any of the platforms below.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Contact Info */}
        <div className="space-y-10">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{info.title}</p>
                    <p className="text-gray-900 dark:text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Follow Me
            </h2>

            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 bg-gray-50 dark:bg-gray-700 rounded-lg transition-all duration-300 hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-5 h-5" />
                  <span className="font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-3">
              Let's Build Something Amazing Together 🚀
            </h3>
            <p className="text-blue-100">
              Open for projects, internships, collaborations & freelance work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
