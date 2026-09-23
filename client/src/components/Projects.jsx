import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/projects";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading animation
      gsap.from(headingRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          once: true,
        },
      });

      // Project cards animation
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.96,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Card hover animation
  const handleMouseEnter = (index) => {
    setHovered(index);

    const card = cardsRef.current[index];

    gsap.to(card, {
      y: -8,
      scale: 1.02,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (index) => {
    setHovered(null);

    const card = cardsRef.current[index];

    gsap.to(card, {
      y: 0,
      scale: 1,
      duration: 0.35,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative py-24 sm:py-32"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">

        {/* Section Heading */}
        <div
          ref={headingRef}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="eyebrow">Projects</span>

          <h2 className="section-heading">
            Things I've built
          </h2>

          <p className="section-sub mx-auto">
            A selection of full-stack and AI-assisted projects focused on
            solving real, everyday problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={() => handleMouseLeave(i)}
              className="relative glass-card p-7 flex flex-col h-full group"
            >

              {/* Hover Preview */}
              {hovered === i && project.image && (
                <div className="absolute left-1/2 bottom-full mb-5 -translate-x-1/2 z-20 w-80 max-w-[88vw] pointer-events-none">
                  <div className="relative rounded-2xl overflow-hidden border border-[#ddd6c8] bg-white shadow-[0_24px_60px_-12px_rgba(28,26,23,0.28)]">

                    {/* Glow */}
                    <div
                      className={`absolute -inset-px rounded-2xl ${
                        project.accent === "cyan"
                          ? "shadow-[0_0_0_1px_rgba(181,72,31,0.15)]"
                          : "shadow-[0_0_0_1px_rgba(156,60,24,0.15)]"
                      } pointer-events-none`}
                    />

                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="w-full h-44 object-cover block"
                    />

                    {/* Preview Label */}
                    <div className="flex items-center justify-between gap-3 px-4 py-2.5 bg-white border-t border-[#eee7d8]">
                      <span className="text-xs font-mono text-[#4a4439] truncate">
                        {project.title}
                      </span>

                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-wider text-[#b5481f] bg-[#b5481f]/10 rounded-full px-2.5 py-1 shrink-0">
                        <span className="relative flex h-1.5 w-1.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b5481f] opacity-60" />
                          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#b5481f]" />
                        </span>

                        Preview
                      </span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute left-1/2 -bottom-[7px] -translate-x-1/2 w-3.5 h-3.5 bg-white border-r border-b border-[#ddd6c8] rotate-45" />
                </div>
              )}

              {/* Project Icon */}
              <div
                className={`w-10 h-10 rounded-lg mb-5 flex items-center justify-center font-display font-semibold ${
                  project.accent === "cyan"
                    ? "bg-cyan-400/10 text-[#b5481f]"
                    : "bg-violet-400/10 text-[#b5481f]"
                }`}
              >
                {project.title.charAt(0)}
              </div>

              {/* Project Title */}
              <h3 className="font-display text-xl font-semibold text-[#1c1a17] mb-2">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6b6555] leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono text-[#4a4439] bg-white border border-[#ddd6c8] rounded-full px-3 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Bottom Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-[#ddd6c8]">

                {/* GitHub */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
                >
                  <FiGithub />
                  Code
                </a>

                {/* Live Demo */}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#4a4439] hover:text-[#b5481f] transition-colors duration-200"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}