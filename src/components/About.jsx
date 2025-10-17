import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

export default function About() {
  return (
    <section
      id="about"
      className="section bg-gradient-to-r from-indigo-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20"
    >
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl p-10 text-center"
        >
          <p className="text-lg leading-relaxed mb-8">
						Software Engineer with 6+ years of experience building scalable, efficient, and user-focused applications.
						My core expertise is React, React Native, Svelte.
          </p>
					<p className="text-lg leading-relaxed mb-8">
						I am passionate about transforming ideas, design into intuitive digital experiences, collaborating closely with teams through every stage of the development cycle, from technical implementation to production.
						My professional joy creating software that’s not only functional, but an efficient solution that elevates the business.
					</p>
        </motion.div>
      </div>
    </section>
  );
}
