"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CTAScroll() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const step1 = useTransform(scrollYProgress, [0.0, 0.20, 0.25], [1, 0, 0]);
  const step2 = useTransform(scrollYProgress, [0.25, 0.40, 0.50], [0, 1, 0]);
  const step3 = useTransform(scrollYProgress, [0.50, 0.65, 0.80], [0, 1, 0]);

  const finalText = useTransform(scrollYProgress, [0.80, 0.95], [0, 1]);
  const finalButton = useTransform(scrollYProgress, [0.88, 1.0], [0, 1]);

  return (
    <section ref={ref} className="relative h-[450vh] bg-[#008fa1]">
      <div className="sticky top-0 flex items-center justify-center h-screen px-4 sm:px-6">
        
        <div className="relative text-center text-white">

          {/* STEP 1 */}
          <motion.h2
            style={{ opacity: step1 }}
            className="font-bold text-4xl sm:text-5xl md:text-6xl leading-tight max-w-[90vw] mx-auto"
          >
            Bereit,
          </motion.h2>

          {/* STEP 2 */}
          <motion.h2
            style={{ opacity: step2 }}
            className="
              absolute left-1/2 top-1/3 sm:top-1/2
              -translate-x-1/2 -translate-y-1/2
              font-bold
              text-3xl sm:text-5xl md:text-6xl
              leading-tight 
              max-w-[90vw] mx-auto
            "
          >
            Ihr Auftragsmanagement zu
          </motion.h2>

          {/* STEP 3 */}
          <motion.h2
            style={{ opacity: step3 }}
            className="
              absolute left-1/2 top-1/3 sm:top-1/2
              -translate-x-1/2 -translate-y-1/2
              font-bold
              text-4xl sm:text-5xl md:text-6xl 
              leading-tight
              max-w-[90vw] mx-auto
            "
          >
            revolutionieren?
          </motion.h2>

          {/* FINAL TEXT */}
          <motion.div style={{ opacity: finalText }} className="mt-10">
            <h2 className="font-bold text-3xl sm:text-5xl md:text-6xl leading-tight max-w-[90vw] mx-auto">
              Jetzt Demo vereinbaren
            </h2>
          </motion.div>

          {/* BUTTON */}
          <motion.div style={{ opacity: finalButton }} className="mt-6">
            <a
              href="/kontakt"
              className="
                inline-block 
                bg-white text-[#008fa1] 
                font-semibold rounded-lg
                px-6 py-3 sm:px-8 sm:py-4 
                shadow-xl hover:bg-gray-100 transition
              "
            >
              Demo vereinbaren
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
