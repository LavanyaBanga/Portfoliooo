import { motion, useScroll, useSpring } from "framer-motion";

// Thin gradient bar pinned to the very top of the viewport,
// filling left-to-right as the user scrolls the page.
export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-gradient-accent z-[95]"
      style={{ scaleX }}
    />
  );
}