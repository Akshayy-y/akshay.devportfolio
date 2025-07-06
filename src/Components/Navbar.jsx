import { useEffect } from "react";
import { IoLogoGithub } from "react-icons/io";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Akshay <span className="text-blue-500">suresh</span>
          </a>

          {/* Show hamburger only when menu is closed */}
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
            <a
              href="#home"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </a>

          <a href='https://github.com/Akshayy-y' target='_blank'> <IoLogoGithub className='text-2xl  hover:text-blue-500 transition-colors cursor-pointer' /> 
          </a>

          </div>
        </div>
      </div>
    </nav>
  );
};

