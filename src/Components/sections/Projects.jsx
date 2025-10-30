import { RevealOnScroll } from '../RevealOnScroll';
import { IoLogoGithub } from "react-icons/io";
import { motion } from 'framer-motion';

export const Projects = () => {
  const projects = [
    {
      title: "Python Port Scanner",
      desc: "A multi-threaded port scanner written in Python for fast host/port discovery and basic service detection.",
      tags: ["Python", "Networking", "Multithreading"],
      repo: "https://github.com/Akshayy-y/Python-Port-Scanner"
    },
    {
      title: "Python RAT (Server & Client)",
      desc: "Client/server tool using TCP sockets with AES (Fernet) encrypted communication. Features command execution on client systems, system info reporting (hostname, username, OS, cwd), heartbeat checks, and a multi-threaded server that supports multiple clients. (For educational / authorized testing only.)",
      tags: ["Python", "Sockets", "Encryption", "C2"],
      repo: "https://github.com/Akshayy-y/Python-RAT-Server-Client-"
    },
    {
      title: "Brute Force Algorithms in Python",
      desc: "Collection of brute force algorithm implementations for educational and research purposes. Each script demonstrates brute-force techniques applied to classic computational problems.",
      tags: ["Python", "Algorithms", "Education"],
      repo: "https://github.com/Akshayy-y/Brute-force-algorithms"
    },
    {
      title: "Keylogger (Educational Toolkit)",
      desc: "An educational toolkit demonstrating system monitoring and encrypted network communication. Includes examples of keylogging and remote desktop concepts for learning about security and defenses. (For research/learning only — not for misuse.)",
      tags: ["Python", "Security", "Monitoring"],
      repo: "https://github.com/Akshayy-y/Advanced-Keylogger"
    },
    {
      title: "Car Wash Management System",
      desc: "Web-based management system for running and tracking car-wash operations. Built with PHP, MySQL, and a simple HTML/CSS/JS front-end.",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      repo: "https://github.com/Akshayy-y/Car-Wash-Management-System"
    },
  ];

  // simple card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12, duration: 0.45 }
    })
  };

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((p, idx) => (
              <motion.div
                key={idx}
                custom={idx}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true, amount: 0.2 }}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
              >
                <h3 className="text-xl font-bold mb-2">{p.title}</h3>

                <p className="text-gray-400 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t, k) => (
                    <span
                      key={k}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition-all"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a href={p.repo} target="_blank" rel="noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Project →
                  </a>
                  <a href={p.repo} target="_blank" rel="noreferrer">
                    <IoLogoGithub className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
