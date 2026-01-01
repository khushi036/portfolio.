import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: 'Digital Marketing Intern',
      company: 'CyberInfomines.',
      location: 'WFH',
      period: '2025 - Present',
      type: 'Internship',
      description: 'Managing Social media, Content Creation and Analytics.',
      responsibilities: [
        'Manage and schedule content across social media platforms.',
        'Assist in planning and executing digital marketing campaigns',
        'Support email marketing and online promotional activities.',
        'Research market trends and competitor strategies.',
      ],
      image: 'src/assets/dg.jpeg',
    },
    {
      title: 'web Developer',
      company: 'The Skybrisk',
      location: 'WFH',
      period: '2025 - 2025',
      type: 'Internship',
      description: 'Developed and maintained full-stack applications using modern web technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      responsibilities: [
        'Built responsive web applications using React and JavaScript',
        'Designed and implemented RESTful APIs with Node.js',
        'Participated in code reviews and knowledge sharing sessions',
        'Developing responsive and interactive web pages'
      ],
      image: 'src/assets/skybrisk.jpeg',
    },
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Experience</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Professional journey and contributions to various organizations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative animate-fadeInUp`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1">
                    {index % 2 === 0 && (
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {exp.company}
                              </p>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                              {exp.type}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <span>Key Responsibilities:</span>
                            </div>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16 h-16 z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      <Briefcase className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group hover:scale-105">
                        <div className="h-48 overflow-hidden">
                          <img
                            src={exp.image}
                            alt={exp.company}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {exp.title}
                              </h3>
                              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                                {exp.company}
                              </p>
                            </div>
                            <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                              {exp.type}
                            </span>
                          </div>

                          <div className="flex flex-wrap gap-4 mb-4 text-gray-600 dark:text-gray-400 text-sm">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                          </div>

                          <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-2">
                            <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                              <TrendingUp className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <span>Key Responsibilities:</span>
                            </div>
                            <ul className="space-y-2">
                              {exp.responsibilities.map((resp, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm"
                                >
                                  <span className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:hidden flex justify-center mt-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
