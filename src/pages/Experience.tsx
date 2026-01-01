import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

// ✅ IMPORT IMAGES PROPERLY
import dgImg from '../assets/dg.jpeg';
import skybriskImg from '../assets/skybrisk.jpeg';

export default function Experience() {
  const experiences = [
    {
      title: 'Digital Marketing Intern',
      company: 'CyberInfomines',
      location: 'WFH',
      period: '2025 - Present',
      type: 'Internship',
      description: 'Managing social media, content creation, and analytics.',
      responsibilities: [
        'Manage and schedule content across social media platforms.',
        'Assist in planning and executing digital marketing campaigns.',
        'Support email marketing and online promotional activities.',
        'Research market trends and competitor strategies.',
      ],
      image: dgImg,
    },
    {
      title: 'Web Developer',
      company: 'The Skybrisk',
      location: 'WFH',
      period: '2025',
      type: 'Internship',
      description:
        'Developed and maintained responsive web applications using modern frontend technologies.',
      responsibilities: [
        'Built responsive web applications using React and JavaScript.',
        'Developed interactive UI components.',
        'Participated in code reviews and team discussions.',
        'Created responsive and user-friendly web pages.',
      ],
      image: skybriskImg,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:to-blue-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            Work <span className="text-blue-600">Experience</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Professional journey and contributions
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-blue-600 rounded-full"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:scale-105 transition-transform">
                      {/* IMAGE */}
                      <div className="h-48 overflow-hidden">
                        <img
                          src={exp.image}
                          alt={exp.company}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                              {exp.title}
                            </h3>
                            <p className="text-blue-600 font-semibold">
                              {exp.company}
                            </p>
                          </div>
                          <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                            {exp.type}
                          </span>
                        </div>

                        <div className="flex gap-4 text-sm text-gray-600 mb-4">
                          <span className="flex items-center gap-1">
                            <Calendar size={16} /> {exp.period}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin size={16} /> {exp.location}
                          </span>
                        </div>

                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                          {exp.description}
                        </p>

                        <div>
                          <div className="flex items-center gap-2 font-semibold mb-2">
                            <TrendingUp size={16} className="text-blue-600" />
                            Key Responsibilities
                          </div>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((item, i) => (
                              <li
                                key={i}
                                className="flex gap-2 text-sm text-gray-600"
                              >
                                <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* TIMELINE ICON */}
                  <div className="hidden lg:flex w-16 h-16 bg-blue-600 rounded-full items-center justify-center shadow-lg">
                    <Briefcase className="text-white w-8 h-8" />
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
