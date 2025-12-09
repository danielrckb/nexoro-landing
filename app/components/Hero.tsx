'use client'

import { useState, useEffect } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'

export default function Hero() {
  const scrollY = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  // 3D Tilt
  const tiltX = useTransform(scrollY, [0, 300], [45, 0])

  return (
    <div className="relative bg-white overflow-hidden">

      {/* FIXED + SICHTBARER + RIESIGER GRADIENT */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          className="
            absolute 
            top-[-300px] 
            left-1/2 
            -translate-x-1/2 
            w-[1800px] 
            h-[1400px] 
            blur-3xl 
            opacity-25 
            bg-[#00abb8]
            rounded-full
          "
        />
      </div>

      {/* HERO CONTENT */}
      <div className="relative isolate pt-14">
        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* TEXT */}
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-7xl">
                Die Next-Generation Lösung für dein{" "}
                <span className="text-[#00abb8]">Auftragsmanagement</span>
              </h1>

              <p className="mt-8 text-lg text-gray-600 sm:text-xl">
                Alles aus einer Hand – Vom Erstkontakt bis zur Rechnung.
              </p>

              <div className="mt-10 flex justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md px-4 py-3 text-sm font-semibold text-white shadow hover:bg-[#0097a3]"
                  style={{ backgroundColor: "#00abb8" }}
                >
                  Demo vereinbaren
                </a>

                <a href="#" className="text-sm font-semibold text-gray-900">
                  Mehr erfahren →
                </a>
              </div>
            </motion.div>

            {/* IMAGE */}
            <div
              className="mt-16 sm:mt-24"
              style={{ perspective: "1400px", transformStyle: "preserve-3d" }}
            >
              <motion.img
                src="/img/nexoro.png"
                alt=""
                width={2432}
                height={1442}
                className="rounded-md shadow-xl ring-1 ring-gray-900/10 bg-gray-50"
                style={{
                  rotateX: tiltX,
                  transformOrigin: "top center",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 }}
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
