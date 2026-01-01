import { GraduationCap, Award, BookOpen, Calendar } from 'lucide-react';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      institution: 'G L Bajaj Institute of technology and Management',
      location: 'Greater Noida, India',
      period: '2021 - 2025',
      description: 'Specialized in Artificial Intelligence and Data Science.',
      achievements: ['Created so many Projects'],
      logo: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      degree: '12th Grade - Science Stream',
      institution: 'Delhi world Public School',
      location: 'Greater Noida, India',
      period: '2020 - 2021',
      description: 'Focused on Physics, Chemistry, and Mathematics. Actively participated in science fairs and coding workshops.',
      achievements: ['Participated in various Competitions'],
      logo: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
    {
      degree: '10th ',
      institution: 'Delhi world Public School',
      location: 'Greater Noida, India',
      period: '2018 - 2019',
      description: 'Focused on Science and Mathematics.',
      achievements: ['Top 5% of Class', 'Maths Olympiad Runner - up'],
      logo: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=200',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Education</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Academic journey and qualifications that shaped my career
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative animate-fadeInUp`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className="flex-1 lg:text-right">
                    {index % 2 === 0 && (
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:scale-105 group">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={edu.logo}
                              alt={edu.institution}
                              className="w-16 h-16 rounded-lg object-cover shadow-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {edu.institution}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                              </span>
                              <span>• {edu.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span>Key Achievements:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="hidden lg:flex items-center justify-center flex-shrink-0 w-16 h-16 z-10">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                      {index === 0 ? (
                        <GraduationCap className="w-8 h-8 text-white" />
                      ) : index === 1 ? (
                        <BookOpen className="w-8 h-8 text-white" />
                      ) : (
                        <Award className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>

                  <div className="flex-1">
                    {index % 2 !== 0 && (
                      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-8 hover:scale-105 group">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="flex-shrink-0">
                            <img
                              src={edu.logo}
                              alt={edu.institution}
                              className="w-16 h-16 rounded-lg object-cover shadow-md"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {edu.degree}
                            </h3>
                            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                              {edu.institution}
                            </p>
                            <div className="flex items-center gap-4 mt-2 text-gray-600 dark:text-gray-400">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {edu.period}
                              </span>
                              <span>• {edu.location}</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                          {edu.description}
                        </p>

                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
                            <Award className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                            <span>Key Achievements:</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {edu.achievements.map((achievement, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                              >
                                {achievement}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:hidden flex justify-center mt-8">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    {index === 0 ? (
                      <GraduationCap className="w-6 h-6 text-white" />
                    ) : index === 1 ? (
                      <BookOpen className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
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
