import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Full-screen preloader shown once when the site first loads.
// Fades/slides out after a short delay (or once the window has loaded).
export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Give the fonts/assets a beat to settle, then dismiss.
    const minTimer = setTimeout(() => setLoading(false), 1600);

    return () => clearTimeout(minTimer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f6f3ec]"
        >
          {/* Logo mark */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl sm:text-3xl font-semibold text-[#1c1a17]"
          >
            Lavanya<span className="text-gradient">.Banga</span>
          </motion.div>

          {/* Animated loading bar */}
          <div className="mt-6 w-40 h-[3px] rounded-full bg-[#ddd6c8] overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-accent rounded-full"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Spinning ring accent */}
          <motion.div
            className="absolute w-24 h-24 rounded-full border border-dashed border-cyan-400/40"
            animate={{ rotate: 360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}