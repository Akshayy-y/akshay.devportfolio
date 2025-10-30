import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaLinkedin,} from "react-icons/fa"; 
import { BiLogoGmail } from "react-icons/bi";
import { motion } from "framer-motion";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight"
          >
            Hi, I'm Akshay Suresh
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-gray-400 text-lg mb-8 max-w-lg mx-auto"
          >
            I'm diving deep into ethical hacking and cybersecurity — building
            safer, more resilient web solutions. With a front-end background, I
            combine creativity with security awareness to craft secure,
            user-friendly experiences.
          </motion.p>

          {/* --- Buttons Section --- */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
            >
              Get In Touch
            </a>

            {/* Download Resume Button */}
          </motion.div>

          {/* --- Social Links --- */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex justify-center space-x-6 mt-10"
          >
            <a
              href="https://github.com/Akshayy-y"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-3xl hover:text-blue-500 transition-transform transform hover:scale-110"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/akshay-suresh-a04202283/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-3xl hover:text-blue-400 transition-transform transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            {/* Gmail */}
            <a
              href="mailto:akshaysuresh441@gmail.com"
              className="text-gray-400 hover:text-red-500 text-3xl transition-all hover:scale-110"
            >
              <BiLogoGmail />
            </a>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
