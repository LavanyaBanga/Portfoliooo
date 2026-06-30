import { motion } from "framer-motion";
import { HiArrowRight, HiOutlineDownload } from "react-icons/hi";
import HeroIllustration from "./HeroIllustration.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20"
    >
      {/* Animated gradient blobs - purely decorative background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-32 -left-20 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/3 -right-24 w-[28rem] h-[28rem] rounded-full bg-cyan-500/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,124,246,0.08),transparent_60%)]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 gap-14 items-center w-full">
        {/* Left: text content */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-[#ddd6c8] bg-white px-4 py-1.5 text-xs font-mono text-[#b5481f]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            available for opportunities
          </span>

          <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1c1a17] mt-6 leading-tight">
            Hi, I'm{" "}
            <span className="text-gradient">Lavanya Banga</span>
          </h1>

          <p className="mt-5 text-lg sm:text-xl text-[#4a4439] font-medium">
            Aspiring Software Developer · MERN Stack Developer · Java &amp;
            DSA Enthusiast
          </p>

          <p className="mt-5 text-[#6b6555] leading-relaxed max-w-xl">
            I build clean, responsive, and user-friendly web applications
            with a focus on problem-solving and practical impact.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3.5 font-semibold text-navy-950 transition-transform duration-200 hover:scale-105 shadow-glow"
            >
              View Projects
              <HiArrowRight className="transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="/resume-lavanya-banga.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[#c9c0ac] px-7 py-3.5 font-semibold text-[#1c1a17] transition-colors duration-200 hover:border-cyan-400/60 hover:bg-cyan-400/[0.06]"
            >
              Download Resume
              <HiOutlineDownload />
            </a>
          </div>
        </motion.div>

        {/* Right: animated illustration (no card/box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <HeroIllustration />
        </motion.div>
      </div>
    </section>
  );
}
