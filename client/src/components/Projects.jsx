import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="eyebrow">Projects</span>
          <h2 className="section-heading">Things I've built</h2>
          <p className="section-sub mx-auto">
            A selection of full-stack and AI-assisted projects focused on
            solving real, everyday problems.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 flex flex-col h-full group hover:border-white/[0.15] transition-colors duration-300"
            >
              <div
                className={`w-10 h-10 rounded-lg mb-5 flex items-center justify-center font-display font-semibold ${
                  project.accent === "cyan"
                    ? "bg-cyan-400/10 text-[#b5481f]"
                    : "bg-violet-400/10 text-[#b5481f]"
                }`}
              >
                {project.title.charAt(0)}
              </div>

              <h3 className="font-display text-xl font-semibold text-[#1c1a17] mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-[#6b6555] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono text-[#4a4439] bg-white border border-[#ddd6c8] rounded-full px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-[#ddd6c8]">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
                >
                  <FiGithub /> Code
                </a>
             
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
