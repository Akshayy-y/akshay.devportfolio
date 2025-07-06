import { RiReactjsLine } from "react-icons/ri";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill, RiPhpFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { icon: FaHtml5, color: "text-orange-600", name: "HTML5" },
  { icon: FaCss3Alt, color: "text-blue-600", name: "CSS3" },
  { icon: IoLogoJavascript, color: "text-yellow-400", name: "JavaScript" },
  { icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
  { icon: RiTailwindCssFill, color: "text-cyan-400", name: "Tailwind CSS" },
  { icon: FaBootstrap, color: "text-purple-600", name: "Bootstrap" },
  { icon: RiPhpFill, color: "text-white", name: "PHP" },
  { icon: SiMysql, color: "text-white", name: "MySQL" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {techStack.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <motion.div
              key={index}
              className="relative group flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4"
              whileHover={{ scale: 1.2, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Icon className={`text-7xl ${tech.color}`} />
              <span className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.name}
              </span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Technologies;
