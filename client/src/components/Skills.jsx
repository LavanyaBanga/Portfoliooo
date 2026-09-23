import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { skillCategories, skills } from "../data/skills";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {
  const sectionRef = useRef(null);
  const marqueeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // reveal each category's cards with its own scroll trigger + stagger
      const groups = gsap.utils.toArray(".skill-group");
      groups.forEach((group) => {
        const cards = group.querySelectorAll(".skill-card");
        gsap.set(cards, { opacity: 0, y: 28, scale: 0.9 });
        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: {
            trigger: group,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      // seamless infinite marquee — track holds the skill list twice,
      // scrolling exactly one copy's width then snapping back unnoticed
      if (marqueeRef.current) {
        const track = marqueeRef.current;
        const loopWidth = track.scrollWidth / 2;
        gsap.to(track, {
          x: -loopWidth,
          duration: 32,
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    // magnetic tilt on hover for each skill card
    const cards = gsap.utils.toArray(".skill-card");
    const cleanups = cards.map((card) => {
      const handleMove = (e) => {
        const rect = card.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;
        gsap.to(card, {
          rotateY: relX * 14,
          rotateX: -relY * 14,
          scale: 1.06,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 500,
        });
      };
      const reset = () => {
        gsap.to(card, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      card.addEventListener("mousemove", handleMove);
      card.addEventListener("mouseleave", reset);
      return () => {
        card.removeEventListener("mousemove", handleMove);
        card.removeEventListener("mouseleave", reset);
      };
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 sm:py-32 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="eyebrow">Skills</span>
          <h2 className="section-heading">Tools I build with</h2>
          <p className="section-sub mx-auto">
            A toolkit spanning frontend, backend, databases, and core CS
            fundamentals.
          </p>
        </motion.div>
      </div>

      {/* infinite auto-scrolling marquee of every skill */}
      <div
        className="relative overflow-hidden mb-16"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div ref={marqueeRef} className="flex gap-4 w-max will-change-transform">
          {[...skills, ...skills].map((skill, i) => (
            <div
              key={`${skill.name}-${i}`}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#ddd6c8] shrink-0"
            >
              <skill.icon className="text-lg shrink-0" style={{ color: skill.color }} />
              <span className="text-sm font-medium text-[#3a352e] whitespace-nowrap">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* categorized skill grid */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 space-y-12">
        {skillCategories.map((category) => (
          <div key={category.label} className="skill-group">
            <h3 className="text-xs uppercase tracking-[0.2em] font-mono font-medium text-[#b5481f] mb-5">
              {category.label}
            </h3>
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card glass-card flex items-center gap-3 px-5 py-3 will-change-transform"
                >
                  <skill.icon
                    className="text-xl shrink-0"
                    style={{ color: skill.color }}
                  />
                  <span className="text-sm font-medium text-[#3a352e]">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}