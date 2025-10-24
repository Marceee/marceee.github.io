import { motion } from 'framer-motion';
import {FaBug, FaMicrochip, FaPills} from 'react-icons/fa';
import {FaLocationDot} from "react-icons/fa6";

const experiences = [
  {
    title: 'Frontend Developer',
    organization: 'Fanomix LLC, UK',
		location: 'Remote',
    period: 'November 2024 - May 2025',
    description: (
      <ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
        <li>
          🧩 Contributed to{' '}
          <span className="font-semibold text-blue-600">Fanomix</span> – a{' '}
          <span className="font-medium text-indigo-600">web tool for generating short-form UGC-style content using fanomix AI.
 </span>
        </li>
        <li>
          💻 Built core frontend features using{' '}
          <span className="font-semibold text-purple-600">Svelte</span>
        </li>
      </ul>
    ),
    icon: FaMicrochip,
  },
	{
		title: 'React/React Native Engineer',
		organization: 'Elsa Science AB, Sweden',
		location: 'Remote',
		period: 'Sept 2022 - December 2023',
		description: (
			<ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
				<li>
					🧩 Contributed to{' '}
					<span className="font-semibold text-blue-600">Elsa</span> – a{' '}
					<span className="font-medium text-indigo-600">web and mobile apps to support individuals diagnosed with rheumatic related illnesses.
 </span>
				</li>
				<li>
					💻 Built core web and mobile app features using{' '}
					<span className="font-semibold text-purple-600">React, React Native.</span>
				</li>
				<li>
					Features included medicine catalog, scheduler, clinical dashboard support system for medical personnel.
				</li>
			</ul>
		),
		icon: FaPills,
	},
	{
		title: 'React Native Engineer',
		organization: 'Addressya AB, Sweden',
		location: 'Remote',
		period: 'Sept 2022 - December 2023',
		description: (
			<ul className="list-disc ml-5 space-y-2 text-gray-700 dark:text-gray-300">
				<li>
					🧩 Contributed to{' '}
					<span className="font-semibold text-blue-600">Addressya</span> – a{' '}
					<span className="font-medium text-indigo-600">mobile tool for creating and managing addresses for the un-addressed.
 </span>
				</li>
				<li>
					💻 Built core mobile app features using{' '}
					<span className="font-semibold text-purple-600">React Native</span>
				</li>
			</ul>
		),
		icon: FaLocationDot,
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
            Work Experience
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
										<span className="px-3 py-0.5 bg-cyan-100 dark:bg-slate-700 text-black-700 dark:text-black-400 rounded-full text-sm font-medium">
                      {exp.location}
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
