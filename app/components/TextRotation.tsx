"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function TextRotation() {
  const { scrollY, scrollYProgress } = useScroll();
  const [velocity, setVelocity] = useState(0);

  // Detect mobile vs desktop
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      const prev = scrollY.getPrevious() ?? 0;
      const diff = latest - prev;

      // Desktop slower, mobile same as before
      const speedFactor = isMobile ? 1.8 : 0.9; // ← desktop slower

      setVelocity(Math.min(Math.max(diff * speedFactor, -100), 100));
    });
  }, [scrollY, isMobile]);

  // Base floating movement — desktop slowed down
  const baseX = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "-750%"] : ["0%", "-450%"] // desktop slower
  );

  // Smooth motion — no bounce
  const v = useSpring(velocity, {
    stiffness: 60,
    damping: 32,
    mass: 0.2,
  });

  const items = [
    "Projektmanagement",
    "Prozesskontrolle",
    "AI Assistant",
    "Mitarbeiter Onboarding",
    "Instant Approvals",
    "Team Zusammenarbeit",
    "Budgetplanung",
  ];

  return (
    <div className="w-full bg-[#e6f9fc] overflow-hidden py-6 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <motion.div
          style={{
            x: baseX,
            translateX: v,
          }}
          className="flex whitespace-nowrap gap-20 text-xl font-semibold text-[#00abb8]"
        >
          {Array(10)
            .fill(items)
            .flat()
            .map((text, i) => (
              <span key={i} className="flex items-center gap-2">
                {text}
                <Arrow />
              </span>
            ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

// Thin arrow
function Arrow() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#00abb8"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14"></path>
      <path d="m12 5 7 7-7 7"></path>
    </svg>
  );
}
