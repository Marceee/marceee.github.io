import { motion } from 'framer-motion';
import { FaBug } from 'react-icons/fa';

const experiences = [
  {
    title: 'Software Development Engineer Intern',
    organization: 'Neoned71 Tech Solutions',
    period: 'Sept 2024 – Nov 2024',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          🧩 Contributed to{' '}
          <span className="font-semibold text-blue-600">WriterBoard</span> – a{' '}
          <span className="font-medium text-indigo-600">node-based storytelling platform</span>
        </li>
        <li>
          💻 Engineered core features using{' '}
          <span className="font-semibold text-purple-600">C++</span> and{' '}
          <span className="font-semibold text-teal-600">Qt Framework</span>
        </li>
        <li>
          ⚙️ Enhanced performance of{' '}
          <span className="font-medium text-yellow-600">QGraphicsScene layouts</span> for smoother rendering
        </li>
        <li>
          🗃️ Optimized data structures with{' '}
          <span className="font-semibold text-green-700">STL</span> and integrated with a{' '}
          <span className="font-semibold text-blue-700">centralized database</span>
        </li>
        <li>
          🐞 Resolved <span className="text-red-600 font-bold">30+ bugs</span> and boosted platform stability
        </li>
      </ul>
    ),
    icon: FaBug,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 py-16"
    >
      <div className="container px-4 md:px-6 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-2">
            Experiences & Achievements
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
            From learning foundations to solving real-world challenges.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
          className="relative max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1 }}
            className="absolute left-6 top-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-600 rounded-full"
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={item}
                transition={{ type: 'spring', stiffness: 120, damping: 20 }}
                className="relative flex gap-6 items-start group"
              >
                <div className="absolute -left-6 top-0 flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-600 text-white font-semibold shadow-md z-20">
                    {i + 1}
                  </div>
                  {i !== experiences.length - 1 && (
                    <div className="w-1 flex-1 bg-indigo-300 rounded-full mt-1" />
                  )}
                </div>

                <div className="ml-10 mt-1 relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white dark:bg-slate-800 shadow-md border border-cyan-200 dark:border-slate-700"
                  >
                    <exp.icon className="text-xl text-indigo-500" />
                  </motion.div>
                </div>

                <div className="ml-6 flex-1 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-md border border-slate-200 dark:border-slate-700 group-hover:border-cyan-300 transition-all duration-300">
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-cyan-500 bg-clip-text text-transparent mb-1">
                    {exp.title}
                  </h3>
                  <div className="flex items-center flex-wrap gap-3 mb-3">
                    <span className="px-3 py-0.5 bg-cyan-100 dark:bg-slate-700 text-cyan-700 dark:text-cyan-400 rounded-full text-sm font-medium">
                      {exp.organization}
                    </span>
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {exp.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-cyan-100/40 dark:bg-cyan-900/30 rounded-full blur-2xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-indigo-100/40 dark:bg-indigo-900/30 rounded-full blur-2xl opacity-40 animate-pulse" />
      </div>
    </section>
  );
}
