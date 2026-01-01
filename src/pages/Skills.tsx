import { Code2, Database, Cloud,  Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skillCategories = [
    {
      icon: Code2,
      title: 'Frontend Development',
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React / Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 95 },
      ],
    },
    {
      icon: Database,
      title: 'Backend Development',
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js / Express', level: 88 },
        { name: 'Python / Django', level: 85 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'GraphQL', level: 80 },
      ],
    },
   
    {
      icon: Database,
      title: 'Databases',
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MongoDB', level: 85 },
        { name: 'Redis', level: 80 },
        { name: 'Supabase', level: 90 },
      ],
    },
    {
      icon: Cloud,
      title: 'Creative',
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'Script Writing', level: 82 },
        { name: 'Content Creation', level: 85 },
        { name: 'Video Scripting', level: 88 },
        { name: 'Copy Writing', level: 75 },
      ],
    },
  ];

  const tools = [
    { name: 'Git', icon: '🔧' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Postman', icon: '📮' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'Vercel', icon: '🚀' },
    { name: 'Supabase', icon: '🗄️' },
  ];

  const stats = [
    { label: 'Certifications', value: '5+', icon: '🏆' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technical expertise and proficiency across various technologies and tools
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center shadow-lg`}
                >
                  <category.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out relative`}
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${categoryIndex * 100 + skillIndex * 100}ms`,
                        }}
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 animate-fadeInUp">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Tools & Technologies</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <span className="text-4xl mb-2 group-hover:scale-125 transition-transform duration-300">{tool.icon}</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-500 dark:to-blue-700 rounded-2xl shadow-xl p-6 text-center hover:scale-105 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-100 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
