import { motion } from "framer-motion";
import { TbSchool, TbCode, TbBrain, TbRocket } from "react-icons/tb";

const highlights = [
  {
    icon: TbSchool,
    title: "B.Tech CSE",
    text: "Building a strong foundation in computer science fundamentals, software engineering, and systems thinking.",
  },
  {
    icon: TbCode,
    title: "MERN Stack",
    text: "Designing and shipping full-stack applications with MongoDB, Express, React, and Node.js.",
  },
  {
    icon: TbBrain,
    title: "Java & DSA",
    text: "500+ problems solved across arrays, trees, graphs, and dynamic programming to sharpen problem-solving.",
  },
  {
    icon: TbRocket,
    title: "AI-Driven Projects",
    text: "Exploring practical AI integrations in real products — from career platforms to travel planning tools.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow">About me</span>
          <h2 className="section-heading">A developer who likes solving real problems</h2>
          <p className="section-sub mx-auto">
            I'm a B.Tech CSE student with a deep interest in full-stack
            development, problem-solving, and building software that people
            actually find useful. My work spans the MERN stack, Java-based
            backends, and data structures &amp; algorithms — and I enjoy
            connecting those skills through AI-assisted, practical projects
            that solve everyday problems for students and professionals
            alike.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="glass-card p-6 hover:border-cyan-400/30 transition-colors duration-300"
            >
              <item.icon className="text-3xl text-cyan-400 mb-4" />
              <h3 className="font-display font-semibold text-[#1c1a17] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#6b6555] leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
