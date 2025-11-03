import React from "react";
import { motion } from "framer-motion";
import {
  SiKalilinux,
  SiBurpsuite,
  SiMetasploit,
  SiWireshark,
} from "react-icons/si";

const tools = [
  { name: "Nmap", logo: () => <img src="/nmap.png" alt="Nmap" className="w-14 h-14" /> },
  { name: "Hydra", logo: () => <img src="/hydra.svg" alt="Hydra" className="w-14 h-14" /> },
  { name: "John the Ripper", logo: () => <img src="/john.png" alt="John the Ripper" className="w-14 h-14" /> },
  { name: "Hashcat", logo: () => <img src="/hashcat.svg" alt="Hashcat" className="w-14 h-14" /> },
  { name: "Wireshark", logo: () => <SiWireshark className="text-blue-400 w-20 h-20" /> },
  { name: "Burp Suite", logo: () => <SiBurpsuite className="text-orange-500 w-20 h-20" /> },
  { name: "Metasploit", logo: () => <SiMetasploit className="text-cyan-400 w-20 h-20" /> },
  { name: "Kali Linux", logo: () => <SiKalilinux className="text-sky-500 w-20 h-20" /> },
  { name: "Nessus", logo: () => <img src="/nessus.png" alt="Nessus" className="w-14 h-14" /> },
  { name: "Owasp Zap", logo: () => <img src="/owasp.svg" alt="Owasp Zap" className="w-14 h-14" /> },
];

const technologies = [
  { name: "HTML5", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" className="w-14 h-14" /> },
  { name: "CSS3", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" className="w-14 h-14" /> },
  { name: "JavaScript", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-14 h-14" /> },
  { name: "React", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-14 h-14" /> },
  { name: "Bootstrap", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-14 h-14" /> },
  { name: "Tailwind CSS", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-14 h-14" /> },
  { name: "PHP", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP" className="w-14 h-14" /> },
  { name: "MySQL", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="w-14 h-14" /> },
  { name: "GitHub", logo: () => <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-14 h-14" /> },
];


// 🔁 MarqueeRow Component (supports direction prop)
const MarqueeRow = ({ items, delay = 0, direction = "left" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay }}
    className="relative group w-full overflow-x-auto overflow-y-hidden no-scrollbar"
  >
    <div
      className={`flex gap-16 ${
        direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
      } group-hover:[animation-play-state:paused]`}
      style={{ width: "max-content" }}
    >
      {items.concat(items).map((item, i) => {
        const Logo = item.logo;
        return (
          <div
            key={i}
            className="flex items-center gap-4 select-none flex-shrink-0 transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center justify-center">
              <Logo />
            </div>
            <span className="text-gray-200 font-medium whitespace-nowrap text-lg">
              {item.name}
            </span>
          </div>
        );
      })}
    </div>
  </motion.div>
);

export default function ToolsAndTechnologies() {
  return (
    <div className="flex flex-col gap-16 w-full items-center py-12 px-4">
      {/* Tools Section (scrolls left) */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-semibold text-gray-100"
      >
        Tools
      </motion.h2>
      <MarqueeRow items={tools} delay={0.2} direction="left" />

      {/* Technologies Section (scrolls right) */}
      <motion.h2
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="text-3xl md:text-4xl font-semibold text-gray-100 mt-6"
      >
        Technologies
      </motion.h2>
      <MarqueeRow items={technologies} delay={0.4} direction="right" />
    </div>
  );
}
