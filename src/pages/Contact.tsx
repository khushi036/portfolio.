import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram, Send, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8 animate-fadeInLeft">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info.title}
                      </p>
                      <p className="text-gray-900 dark:text-white font-medium">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

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
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together</h3>
              <p className="text-blue-100">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>
          </div>

          <div className="animate-fadeInRight">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Send Me a Message
              </h2>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 animate-fadeInUp">
                  <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4 animate-bounce">
                    <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-center">
                    Thank you for reaching out. I'll get back to you soon!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 text-gray-900 dark:text-white resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
                  >
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
