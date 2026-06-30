import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative border-t border-[#ddd6c8] py-10">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#8a8270]">
          Made with <span className="text-cyan-400">React</span> by Lavanya
          Banga
        </p>

        <div className="flex items-center gap-5 text-[#6b6555]">
          <a
            href="https://github.com/LavanyaBanga"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            <FiGithub className="text-lg" />
          </a>
          <a
            href="https://linkedin.com/in/lavanya-banga-0a00692b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            <FiLinkedin className="text-lg" />
          </a>
          <a
            href="mailto:lavanyabanga14@gmail.com"
            aria-label="Email"
            className="hover:text-cyan-400 transition-colors duration-200"
          >
            <FiMail className="text-lg" />
          </a>
        </div>

        <p className="text-xs text-[#a39a85]">
          &copy; {new Date().getFullYear()} Lavanya Banga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
