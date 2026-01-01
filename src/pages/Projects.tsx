import { Github, ExternalLink, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with real-time inventory management, payment integration, and advanced analytics dashboard.',
      image: 'src/assets/earrings.jpg',
      technologies: ['React.js', 'TypeScript', 'Supabase (postgreSQL)'],
      github: 'https://github.com/khushi036/E_commerce-website',
    },
    {
       title: 'Facial Emotion Detection',
      description: 'AI-powered system that detects and classifies human emotions from facial expressions using deep learning and computer vision techniques.',
      image: 'src/assets/facial.jpg',
      technologies: ['Python', 'Pandas',  'Deep Learning'],
      github: 'https://github.com/khushi036/facial-emotion-detection',
      demo: '#',

      
    },
    {
      title: 'To-Do App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and productivity analytics.',
      image: 'src/assets/todo.jpg',
      technologies: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/khushi036/ToDoApp',
      
    },
    
   
    {
      title: 'Portfolio Website Builder',
      description: 'Drag-and-drop portfolio builder with customizable templates, SEO optimization, and one-click deployment.',
      image: 'src/assets/portfolio.jpg',
      technologies: ['React.js', 'TypeScript', 'Vercel'],
      github: 'https://github.com/khushi036/portfolio',
      
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 transition-colors duration-300 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fadeInDown">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my work showcasing skills in web development, AI, and software engineering
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fadeInUp"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Code className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-xs font-medium"
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
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm font-medium">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Want to see more? Check out my GitHub profile for additional projects and contributions.
          </p>
          <a
            href="https://github.com/khushi036"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
