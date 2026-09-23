import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TbSchool, TbCode, TbBrain, TbRocket } from "react-icons/tb";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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

// px gap between slides — keep this in sync with the `gap-5` class on the track
const GAP = 20;

export default function About() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const cardRefs = useRef([]);
  const [index, setIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);

  // how many cards are visible at once, based on viewport width
  useEffect(() => {
    const updateVisible = () => {
      const w = window.innerWidth;
      if (w >= 1024) setVisibleCount(3);
      else if (w >= 640) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const maxIndex = Math.max(0, highlights.length - visibleCount);

  // clamp index whenever the visible count changes (e.g. resize)
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  // scroll-in reveal for the slider as a whole
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRefs.current, {
        opacity: 0,
        y: 60,
        scale: 0.92,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // slide the track horizontally whenever the active index changes
  useEffect(() => {
    const cardEl = cardRefs.current[0];
    if (!trackRef.current || !cardEl) return;

    const cardWidth = cardEl.getBoundingClientRect().width;
    const offset = index * (cardWidth + GAP);

    gsap.to(trackRef.current, {
      x: -offset,
      duration: 0.6,
      ease: "power3.out",
    });
  }, [index, visibleCount]);

  const goPrev = () => setIndex((i) => Math.max(0, i - 1));
  const goNext = () => setIndex((i) => Math.min(maxIndex, i + 1));

  // basic swipe support on touch devices
  const touchStartX = useRef(0);
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff > 50) goPrev();
    else if (diff < -50) goNext();
  };

  const cardWidthClass =
    visibleCount === 1
      ? "w-full"
      : visibleCount === 2
      ? "w-[calc(50%-10px)]"
      : "w-[calc(33.333%-14px)]";

  return (
    <section id="about" ref={sectionRef} className="relative py-24 sm:py-32">
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

        <div className="relative">
          {/* prev / next arrows */}
          <button
            type="button"
            onClick={goPrev}
            disabled={index === 0}
            aria-label="Previous"
            className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#ddd6c8] items-center justify-center text-[#4a4439] shadow-sm hover:border-cyan-400/50 hover:text-[#b5481f] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <HiChevronLeft className="text-xl" />
          </button>
          <button
            type="button"
            onClick={goNext}
            disabled={index === maxIndex}
            aria-label="Next"
            className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-[#ddd6c8] items-center justify-center text-[#4a4439] shadow-sm hover:border-cyan-400/50 hover:text-[#b5481f] disabled:opacity-30 disabled:pointer-events-none transition-colors"
          >
            <HiChevronRight className="text-xl" />
          </button>

          {/* slider viewport */}
          <div
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div ref={trackRef} className="flex gap-5">
              {highlights.map((item, i) => (
                <div
                  key={item.title}
                  ref={(el) => (cardRefs.current[i] = el)}
                  className={`about-card glass-card p-6 shrink-0 transition-colors duration-300 hover:border-cyan-400/30 hover:-translate-y-1 ${cardWidthClass}`}
                >
                  <item.icon className="text-3xl text-cyan-400 mb-4" />
                  <h3 className="font-display font-semibold text-[#1c1a17] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-[#6b6555] leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* dot indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                type="button"
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-6 bg-[#b5481f]" : "w-2 bg-[#ddd6c8]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}