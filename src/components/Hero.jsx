import { motion } from 'framer-motion';
import {FaCode, FaDownload} from 'react-icons/fa';

const leftVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
      ease: "easeOut",
      duration: 0.6,
    },
  },
};

const childVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const rightVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function Hero() {
  return (
    <section id="home" className="section pt-20 md:pt-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            variants={leftVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 md:mb-0 pl-6 md:pl-10"
          >
            <motion.h1 variants={childVariant} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {/*Hi, I'm{' '}*/}
              <span className="text-primary">Marcellinus Sande</span>
            </motion.h1>

            <motion.h2 variants={childVariant} className="text-xl md:text-2xl mb-6 text-gray-600 dark:text-gray-400">
              Software Developer
            </motion.h2>

            <motion.p variants={childVariant} className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                React, React Native, Svelte, Typescript
              {/*I build modern, scalable, and user-friendly websites and software.*/}
            </motion.p>

            <motion.div variants={childVariant} className="flex flex-wrap gap-4">
								<a
									href="assets/Marcellinus_Sande_Resume.pdf"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex item9i9i9immikmju s-center gap-3 bg-purple-600 hover:bg-purple-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg"
								>
									View Resume
								</a>

								<a
									href="assets/Marcellinus_Sande_Resume.pdf"
									download
									className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg"
								>
									<FaDownload className="text-xl" />
									Download Resume
								</a>
            </motion.div>
          </motion.div>

          <motion.div
            variants={rightVariants}
            initial="hidden"
            animate="visible"
            className="order-first md:order-last flex justify-center items-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              {/* Pulsing background circle */}
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>

              {/* Your Image */}
              <img
                src="/assets/profile.jpeg"
                alt="Karan Sundariya"
                className="absolute inset-0 w-full h-full rounded-full object-cover object-top"
              />

              {/* Small bouncing icon */}
            <motion.div
               animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                 className="absolute -top-4 -right-4 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center cursor-pointer"
                  onClick={() => window.open('https://github.com/marceee', '_blank')}
                  title="Competative Programming and DSA Profiles"
>
  <FaCode className="text-xl text-primary" />
</motion.div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
