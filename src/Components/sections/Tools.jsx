import { motion } from "framer-motion";
import {
  SiWireshark,
  SiHashnode,
  SiKalilinux,
  SiOpenvpn,
  SiBurpsuite,
} from "react-icons/si";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { BsShieldLock } from "react-icons/bs";

const tools = [
  { name: "Kali Linux", icon: SiKalilinux, color: "text-red-500", role: "Pentesting OS" },
  { name: "Nmap", icon: MdOutlineRemoveRedEye, color: "text-cyan-400", role: "Network Scanning" },
  { name: "Nessus", icon: BsShieldLock, color: "text-purple-400", role: "Vulnerability Scanning" },
  { name: "Wireshark", icon: SiWireshark, color: "text-blue-400", role: "Packet Analysis" },
  { name: "Burp Suite", icon: SiBurpsuite, color: "text-orange-400", role: "Web Proxy Testing" },
  { name: "OWASP ZAP", icon: SiOpenvpn, color: "text-yellow-400", role: "Web App Scanning" },
  { name: "Hashcat", icon: SiHashnode, color: "text-green-400", role: "Password Cracking" },
];

// Container animation (staggered reveal)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

// Each card animation
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const Tools = () => {
  return (
    <section className="border-b border-neutral-800 pb-24">
      {/* Title animation */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="my-20 text-center text-4xl font-semibold"
      >
        Tools I Use
      </motion.h2>

      {/* Description animation */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-gray-400 mb-12 max-w-2xl mx-auto"
      >
        My ethical hacking toolkit includes these essential tools for reconnaissance,
        vulnerability assessment, and exploitation.
      </motion.p>

      {/* Tools Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="flex flex-wrap items-center justify-center gap-6"
      >
        {tools.map((tool, index) => {
          const Icon = tool.icon;
          return (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.1, rotate: 3 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="group flex flex-col items-center rounded-2xl border-4 border-neutral-800 p-4 hover:border-blue-500/50 transition"
            >
              <Icon className={`text-7xl ${tool.color}`} />
              <span className="mt-2 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.name}
              </span>
              <span className="text-xs text-gray-500 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tool.role}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Tools;
