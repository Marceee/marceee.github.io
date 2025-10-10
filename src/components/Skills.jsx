import { motion } from 'framer-motion';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaCode,
} from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiTypescript } from 'react-icons/si';
import { RiSvelteFill } from "react-icons/ri";

const skills = [

  { name: 'JavaScript', icon: FaJs, color: 'text-yellow-400' },
  { name: 'TypeScript', icon: SiTypescript, color: 'text-purple-400' },
	{ name: 'React Native', icon: FaReact, color: 'text-cyan-400' },
  { name: 'React.js', icon: FaReact, color: 'text-cyan-400' },

  { name: 'Svelte', icon: RiSvelteFill, color: 'text-orange-500' },
  { name: 'HTML', icon: FaHtml5, color: 'text-orange-500' },
  { name: 'CSS', icon: FaCss3Alt, color: 'text-blue-500' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-400' },
  { name: 'MongoDB', icon: SiMongodb, color: 'text-green-500' },
  { name: 'Firebase', icon: SiFirebase, color: 'text-yellow-500' },
  { name: 'Git', icon: FaGitAlt, color: 'text-orange-500' },
  { name: 'GitHub', icon: FaGithub, color: 'text-gray-700 dark:text-white' },
  { name: 'SDLC', icon: FaCode, color: 'text-indigo-700' },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="section bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
    >
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-white relative inline-block">
            Skills
            <span className="block w-20 h-1 bg-indigo-600 rounded-full mt-3 mx-auto"></span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10"
        >
          {skills.map(({ name, icon: Icon, color }) => (
            <motion.div
              key={name}
              variants={item}
              className="flex flex-col items-center p-5 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 duration-300 cursor-default"
              title={name}
              aria-label={name}
            >
              <Icon className={`text-5xl ${color} mb-3`} />
              <span className="text-base text-gray-900 dark:text-gray-100">{name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
