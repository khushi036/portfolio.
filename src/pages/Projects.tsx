import { Github, ExternalLink, Code } from 'lucide-react';

// ✅ IMPORT IMAGES PROPERLY
import earringsImg from '../assets/earrings.jpg';
import facialImg from '../assets/facial.jpg';
import todoImg from '../assets/todo.jpg';
import portfolioImg from '../assets/portfolio.jpg';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.',
      image: earringsImg,
      technologies: ['React.js', 'TypeScript', 'Supabase (PostgreSQL)'],
      github: 'https://github.com/khushi036/E_commerce-website',
      demo: '#',
    },
    {
      title: 'Facial Emotion Detection',
      description:
        'AI-powered system that detects and classifies human emotions from facial expressions using deep learning and computer vision techniques.',
      image: facialImg,
      technologies: ['Python', 'Pandas', 'Deep Learning'],
      github: 'https://github.com/khushi036/facial-emotion-detection',
      demo: '#',
    },
    {
      title: 'To-Do App',
      description:
        'Collaborative task management application with real-time updates, team collaboration features, and productivity analytics.',
      image: todoImg,
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/khushi036/ToDoApp',
      demo: '#',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website showcasing projects, skills, and experience with modern UI and animations.',
      image: portfolioImg,
      technologies: ['React.js', 'Tailwind CSS', 'Vercel'],
      github: 'https://github.com/khushi036/portfolio',
      demo: '#',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:to-blue-950 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600">Projects</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            A collection of my work showcasing skills in Web Development & AI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* IMAGE */}
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-blue-100 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg"
                  >
                    <Github size={16} />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
