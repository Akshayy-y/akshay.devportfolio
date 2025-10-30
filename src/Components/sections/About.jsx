import { RevealOnScroll } from '../RevealOnScroll';
import { motion } from 'framer-motion';

export const About = () => {
  const cyberTools = [
    "Nmap",
    "Nessus",
    "Wireshark",
    "Kali Linux",
    "Burp Suite",
    "OWASP ZAP",
    "Hashcat",
  ];

  const frontendSkills = ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "TailwindCSS"];
  const backendSkills = ["PHP", "SQL"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          >
            About Me
          </motion.h2>

          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all"
          >
            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m an aspiring <span className="text-cyan-400 font-semibold">ethical hacker</span> and 
              <span className="text-blue-400 font-semibold"> front-end developer</span> dedicated to 
              building secure, user-friendly, and visually engaging web solutions. I bridge the gap 
              between <span className="text-cyan-300">creative design</span> and 
              <span className="text-blue-300"> cybersecurity</span> — exploring how systems can be both 
              functional and fortified.
            </p>

            {/* Cybersecurity Tools */}
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all mb-6">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Cybersecurity Tools</h3>
              <div className="flex flex-wrap gap-2">
                {cyberTools.map((tool, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Frontend + Backend */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-cyan-400">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Education + Experience */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8"
          >
            {/* Education */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Education</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>BCA (Ongoing)</strong> — Kristu Jyoti College, MG University (2023–2026)
                </li>
                <li>
                  Coursework: Web Development, Cybersecurity Fundamentals
                </li>
              </ul>
            </div>

            {/* Experience */}
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-cyan-400">Experience</h3>
              <div className="space-y-5 text-gray-300">

                {/* Srishti Campus Internship */}
                <div>
                  <h4 className="font-semibold">
                    Cyber Security Intern — Srishti Campus (Jul 2025 – Aug 2025)
                  </h4>
                  <p>
                    Worked on basic penetration testing and security assessments under guidance.  
                    Gained hands-on experience with <span className="text-cyan-400">Python scripting</span> and network analysis tools.
                  </p>
                </div>

                {/* Unified Mentor */}
                <div>
                  <h4 className="font-semibold">Intern — Unified Mentor (Dec 2024 – Jan 2025)</h4>
                  <p>
                    Worked on live front-end and full-stack projects, focusing on responsive UI, code optimization, and integration with backend systems.
                  </p>
                </div>


              </div>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

