import { motion } from "framer-motion";
import { HiOutlineDownload } from "react-icons/hi";
import { TbSchool, TbCode, TbTrophy, TbBriefcase } from "react-icons/tb";

const resumeHighlights = [
  {
    icon: TbSchool,
    label: "Education",
    value: "B.Tech, Computer Science Engineering",
  },
  {
    icon: TbCode,
    label: "Core Skills",
    value: "MERN Stack, Java, SQL, DSA",
  },
  {
    icon: TbBriefcase,
    label: "Projects",
    value: "4+ Full-Stack & AI-Assisted Apps",
  },
  {
    icon: TbTrophy,
    label: "Achievements",
    value: "SIH Participant, GSSoC Contributor, 400+ DSA Problems",
  },
];

export default function Resume() {
  return (
    <section id="resume" className="relative py-24 sm:py-32">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card p-8 sm:p-12 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-radial-glow -z-10" />

          <span className="eyebrow">Resume</span>

          <h2 className="section-heading">
            A Quick Snapshot of My Journey
          </h2>

          <p className="section-sub mx-auto mb-10">
            Prefer the full picture in one document? Download my resume for
            details on education, projects, technical skills, and achievements.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            {resumeHighlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3 bg-white border border-[#ddd6c8] rounded-xl p-4"
                >
                  <Icon className="text-xl text-cyan-400 mt-0.5 shrink-0" />

                  <div>
                    <p className="text-xs font-mono uppercase tracking-wide text-[#8a8270]">
                      {item.label}
                    </p>

                    <p className="text-sm text-[#3a352e] font-medium mt-0.5">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <a
            href="/Lavanya_Banga_Resume.pdf"
            download="Lavanya_Banga_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-3.5 font-semibold text-navy-950 transition-transform duration-200 hover:scale-105 shadow-glow"
          >
            Download Full Resume
            <HiOutlineDownload className="text-lg" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}