import { motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { achievements } from "../data/achievements";

export default function Achievements() {
  const trackRef = useRef(null);
  // Progress of the timeline track itself scrolling through the viewport —
  // drives the line filling in as the user scrolls down this section.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.4"],
  });

  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-xl mx-auto mb-14"
        >
          <span className="eyebrow">Achievements</span>
          <h2 className="section-heading">Experience &amp; milestones</h2>
          <p className="section-sub mx-auto">
            Hackathons, open source, and consistent practice that shaped how
            I build today.
          </p>
        </motion.div>

        <div ref={trackRef} className="relative max-w-3xl mx-auto">
          {/* static vertical track */}
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px bg-[#ddd6c8] sm:-translate-x-1/2" />
          {/* animated fill that grows as the section scrolls through view */}
          <motion.div
            className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-px origin-top bg-gradient-to-b from-cyan-400 via-violet-400 to-cyan-400/60 sm:-translate-x-1/2"
            style={{ scaleY: scrollYProgress }}
          />

          <div className="space-y-8">
            {achievements.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-14 sm:pl-0 sm:grid sm:grid-cols-2 sm:gap-10 items-center"
              >
                {/* icon dot */}
                <div className="absolute left-0 sm:left-1/2 top-0 sm:-translate-x-1/2 w-10 h-10 rounded-full bg-navy-900 border border-cyan-400/40 flex items-center justify-center text-[#b5481f] z-10">
                  <item.icon className="text-lg" />
                </div>

                <div
                  className={`glass-card p-6 ${
                    i % 2 === 0 ? "sm:col-start-1" : "sm:col-start-2"
                  }`}
                >
                  <h3 className="font-display font-semibold text-[#1c1a17]">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-[#b5481f] mt-1 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-[#6b6555] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}