import { motion } from "framer-motion";

// Pure animated SVG illustration — no card/box wrapper.
// A coding illustration with a floating laptop, animated code lines,
// and orbiting tech bubbles around it.
export default function HeroIllustration() {
  const floatingTech = [
    { label: "React", top: "6%", left: "2%", delay: 0 },
    { label: "Node.js", top: "14%", left: "78%", delay: 0.6 },
    { label: "MongoDB", top: "68%", left: "84%", delay: 1.2 },
    { label: "Java", top: "78%", left: "4%", delay: 0.3 },
  ];

  return (
    <div className="relative flex items-center justify-center h-[420px] sm:h-[500px] select-none">
      {/* Ambient glow */}
      <motion.div
        className="absolute w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-violet-500/15 blur-3xl"
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-64 h-64 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ scale: [1.05, 0.95, 1.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating tech labels orbiting the illustration */}
      {floatingTech.map((item) => (
        <motion.div
          key={item.label}
          className="absolute font-mono text-xs text-[#b5481f] bg-white border border-[#ddd6c8] rounded-full px-3 py-1.5"
          style={{ top: item.top, left: item.left }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.label}
        </motion.div>
      ))}

      {/* Main illustration */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-full max-w-md"
      >
        <svg
          viewBox="0 0 400 320"
          className="w-full h-auto"
          role="img"
          aria-label="Illustration of a developer coding on a laptop"
        >
          {/* Desk shadow */}
          <ellipse cx="200" cy="290" rx="140" ry="14" fill="#0d1220" opacity="0.6" />

          {/* Laptop base */}
          <rect x="110" y="220" width="180" height="14" rx="4" fill="#1b2438" />
          <polygon points="120,220 280,220 270,234 130,234" fill="#131a2c" />

          {/* Laptop screen */}
          <rect x="120" y="90" width="160" height="130" rx="10" fill="#0d1220" stroke="#243047" strokeWidth="2" />
          <rect x="130" y="100" width="140" height="110" rx="4" fill="#080b14" />

          {/* Animated code lines on screen */}
          <motion.rect
            x="140" y="112" height="5" rx="2.5" fill="#22d3ee"
            initial={{ width: 0 }}
            animate={{ width: [0, 60, 60, 0] }}
            transition={{ duration: 4, repeat: Infinity, times: [0, 0.3, 0.85, 1] }}
          />
          <motion.rect
            x="140" y="124" height="5" rx="2.5" fill="#8b7cf6"
            initial={{ width: 0 }}
            animate={{ width: [0, 90, 90, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.3, times: [0, 0.3, 0.85, 1] }}
          />
          <motion.rect
            x="150" y="136" height="5" rx="2.5" fill="#5dcaa5"
            initial={{ width: 0 }}
            animate={{ width: [0, 70, 70, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.6, times: [0, 0.3, 0.85, 1] }}
          />
          <motion.rect
            x="140" y="148" height="5" rx="2.5" fill="#22d3ee"
            initial={{ width: 0 }}
            animate={{ width: [0, 50, 50, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 0.9, times: [0, 0.3, 0.85, 1] }}
          />
          <motion.rect
            x="150" y="160" height="5" rx="2.5" fill="#8b7cf6"
            initial={{ width: 0 }}
            animate={{ width: [0, 100, 100, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.2, times: [0, 0.3, 0.85, 1] }}
          />
          <motion.rect
            x="140" y="172" height="5" rx="2.5" fill="#5dcaa5"
            initial={{ width: 0 }}
            animate={{ width: [0, 65, 65, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1.5, times: [0, 0.3, 0.85, 1] }}
          />

          {/* Blinking cursor */}
          <motion.rect
            x="205" y="160" width="6" height="5" fill="#22d3ee"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
          />

          {/* Person - simple geometric figure sitting */}
          <circle cx="200" cy="250" r="16" fill="#f0997b" />
          <path d="M170,300 Q170,260 200,260 Q230,260 230,300 Z" fill="#7c5cf0" />
          <path d="M178,266 L165,290" stroke="#f0997b" strokeWidth="8" strokeLinecap="round" />
          <path d="M222,266 L235,290" stroke="#f0997b" strokeWidth="8" strokeLinecap="round" />

          {/* Floating particles */}
          <motion.circle
            cx="80" cy="150" r="4" fill="#22d3ee"
            animate={{ y: [0, -16, 0], opacity: [0.8, 0.3, 0.8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="330" cy="180" r="5" fill="#8b7cf6"
            animate={{ y: [0, 14, 0], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle
            cx="310" cy="100" r="3" fill="#5dcaa5"
            animate={{ y: [0, -10, 0], opacity: [0.9, 0.4, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </motion.div>
    </div>
  );
}
