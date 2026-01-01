import { Code, Brain, Rocket, Award, Target, Heart } from 'lucide-react';

export default function About() {
  const interests = [
    { icon: Code, title: 'Clean Code', desc: 'Writing maintainable and scalable software' },
    { icon: Brain, title: 'AI & ML', desc: 'Exploring artificial intelligence possibilities' },
    { icon: Rocket, title: 'Innovation', desc: 'Building products that make a difference' },
    { icon: Award, title: 'Excellence', desc: 'Striving for perfection in every project' },
    { icon: Target, title: 'Problem Solving', desc: 'Finding elegant solutions to complex challenges' },
    { icon: Heart, title: 'Collaboration', desc: 'Working with amazing teams and people' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Me</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fadeInLeft">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-2xl blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About Me"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-fadeInRight">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer & AI Enthusiast
            </h2>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm a software developer with a deep passion for creating innovative solutions
              that make a real impact. With expertise in modern web technologies and artificial
              intelligence, I strive to build applications that are not only functional but
              also beautiful and user-friendly.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              My journey in technology started with curiosity and has evolved into a career
              focused on continuous learning and pushing boundaries. I believe in writing clean,
              maintainable code and following best practices to deliver exceptional results.
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge with the developer community. I'm
              always excited to take on new challenges and collaborate on innovative projects.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Cloud'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:scale-110 transition-transform duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12 animate-fadeInUp">
            What Drives Me
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {interests.map((interest, index) => (
              <div
                key={index}
                className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  <interest.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {interest.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {interest.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-8 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl shadow-2xl animate-fadeInUp">
          <div className="text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities.
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
