import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
	{
		title: 'Fanomix',
		description:
			'AI-powered video creator platform that transforms the way brands generate high-converting video ads',
		image: '/assets/fanomix.png',
		tech: ['Svelte', 'Typescript', 'Tailwind'],
		demo: 'https://fanomix.ai/',
	},
  {
    title: 'Elsa Science AB',
    description:
      'Android/IOS app for navigating through life when diagonised with Rheumatic Diseases.',
    image: '/assets/elsa.png',
    tech: ['React Native', 'React', 'Typescript','Node JS','GraphQL'],
    demo: 'https://www.elsa.science/en/',
  },
  {
    title: 'Addressya AB',
    description:
      'Digital addresses for the un-addressed',
    image: '/assets/addressya.png',
		tech: ['React Native', 'React', 'Firebase'],
    demo: 'https://github.com/marceee',
  },
  {
    title: 'Asante',
    description: 'Waste management solution',
    image: '/assets/asante.png',
    tech: ['Wordpress', 'Payments integration', 'CMS'],
    demo: 'https://www.asantewm.com/',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-gradient-to-br from-white to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-24"
    >
      <div className="container px-6 md:px-12 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-700 via-cyan-500 to-indigo-700 bg-clip-text text-transparent mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Projects I have contributed to.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={item}
              transition={{ type: 'spring', stiffness: 120, damping: 15 }}
              className="group relative rounded-3xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-52 sm:h-48 md:h-56 overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed min-h-[72px]">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block px-4 py-1 text-sm font-medium text-indigo-700 bg-indigo-100 rounded-full dark:bg-indigo-900 dark:text-indigo-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-5 border-t border-gray-200 dark:border-gray-700 pt-4">
                  {project.github && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub Repo`}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaGithub size={24} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      whileHover={{ scale: 1.2 }}
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} Live Demo`}
                      className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                    >
                      <FaExternalLinkAlt size={22} />
                    </motion.a>
                  )}
                </div>
              </div>

              {/* Subtle glow on hover */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-100/40 to-cyan-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Soft animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-28 -right-28 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-900/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
        <div className="absolute -bottom-28 -left-28 w-96 h-96 bg-cyan-200/40 dark:bg-cyan-900/30 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>
    </section>
  );
}
