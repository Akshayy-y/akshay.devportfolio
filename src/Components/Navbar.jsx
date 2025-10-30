import { useEffect, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [strike, setStrike] = useState(false);

  // trigger lightning at random intervals (3–7 seconds)
  useEffect(() => {
    const triggerStrike = () => {
      setStrike(true);
      setTimeout(() => setStrike(false), 500); // brief flash
    };

    const interval = setInterval(() => {
      triggerStrike();
    }, Math.random() * 4000 + 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Akshay <span className="text-blue-500">suresh</span>
          </a>

          {!menuOpen && (
            <div
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Open Menu"
            >
              &#9776;
            </div>
          )}

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#projects" className="text-gray-300 hover:text-white transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>

            <a href="https://github.com/Akshayy-y" target="_blank">
              <IoLogoGithub className="text-2xl hover:text-blue-500 transition-colors cursor-pointer" />
            </a>

            {/* Lightning bolt effect */}
            <motion.a
              href="#"
              animate={
                strike
                  ? {
                      opacity: [1, 0.3, 1, 0.6, 1],
                      scale: [1, 1.05, 0.98, 1],
                      filter: [
                        "drop-shadow(0 0 2px #facc15)",
                        "drop-shadow(0 0 20px #facc15)",
                        "drop-shadow(0 0 4px #facc15)",
                      ],
                    }
                  : {}
              }
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative text-yellow-400 text-3xl cursor-pointer"
            >
              <AiTwotoneThunderbolt />
              {strike && (
                <motion.span
                  className="absolute inset-0 rounded-full bg-yellow-400/30 blur-md"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0.8, 0, 0.4, 0] }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                />
              )}
            </motion.a>
          </div>
        </div>
      </div>
    </nav>
  );
};
