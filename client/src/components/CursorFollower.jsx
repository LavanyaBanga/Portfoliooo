import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Custom cursor: a small dot that follows the mouse instantly,
// plus a trailing ring (spring-eased) that grows on hoverable elements.
// Hidden automatically on touch devices.
export default function CursorFollower() {
  const [isTouch, setIsTouch] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Ring trails behind the raw cursor position with a soft spring.
  const ringX = useSpring(mouseX, { damping: 25, stiffness: 300, mass: 0.5 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 300, mass: 0.5 });

  useEffect(() => {
    const hasTouch = window.matchMedia("(pointer: coarse)").matches;
    setIsTouch(hasTouch);
    if (hasTouch) return;

    const handleMove = (e) => {
      if (!visible) setVisible(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleOver = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, [role='button']"
      );
      setIsHovering(Boolean(target));
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible]);

  if (isTouch) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[90] hidden lg:block transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Core dot - snaps to the exact cursor position */}
      <motion.div
        className="absolute rounded-full bg-cyan-400"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ width: isHovering ? 6 : 8, height: isHovering ? 6 : 8 }}
        transition={{ duration: 0.15 }}
      />

      {/* Trailing ring - spring-eased, grows on hover */}
      <motion.div
        className="absolute rounded-full border border-cyan-400/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovering ? 46 : 28,
          height: isHovering ? 46 : 28,
          borderColor: isHovering
            ? "rgba(139, 124, 246, 0.7)"
            : "rgba(34, 211, 238, 0.6)",
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </div>
  );
}