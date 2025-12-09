// components/funktionen/integrationen/hero.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'

const LOGOS = [
  { src: '/img/logos/google.png', alt: 'Google' },
  { src: '/img/logos/microsoft.png', alt: 'Microsoft' },
  { src: '/img/logos/sms.png', alt: 'SMS' },
  { src: '/img/logos/3cx.png', alt: '3CX' },
  { src: '/img/logos/powrbook.png', alt: 'Powrbook' },
  { src: '/img/logos/whatsapp.png', alt: 'WhatsApp' },
]

export default function IntegrationsHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">

        {/* HEADLINE */}
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-black">
            Integrationen, die dein{' '}
            <span className="text-[#00abb8]">Tagesgeschäft</span> vereinfachen
          </h1>

          <p className="mt-5 text-lg text-gray-600 max-w-xl mx-auto">
            E-Mail, Telefonie, Messaging und Spezialtools — zentral verbunden.
            So hast du alle Infos direkt im Auftrag.
          </p>
        </div>

        {/* LOGO CLOUD */}
        <div className="mt-20 flex flex-col items-center gap-8">
          <div className="relative w-full max-w-5xl">

            <div className="relative h-[240px] md:h-[260px]">

              {LOGOS.map((logo, i) => {
                const delay = i * 0.18
                const dur = 5.5 + (i % 2) * 0.9

                // 3 links, 3 rechts — symmetrisch & kleiner
                const positions = [
                  { left: '12%', top: '10%' },
                  { left: '5%', top: '55%' },
                  { left: '28%', top: '50%' },

                  { left: '62%', top: '8%' },
                  { left: '75%', top: '48%' },
                  { left: '88%', top: '22%' },
                ]

                const pos = positions[i]

                return (
                  <motion.div
                    key={logo.src}
                    aria-hidden="true"
                    className="absolute"
                    style={{ left: pos.left, top: pos.top }}
                    initial={{ y: 0, opacity: 0, scale: 0.9 }}
                    animate={{
                      y: ['0%', '-8%', '0%'],
                      opacity: [1, 0.95, 1],
                      scale: [0.97, 1.03, 0.97],
                      rotate: [0, -2.3, 0],
                    }}
                    transition={{
                      duration: dur,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay,
                    }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 md:p-4 shadow-md border border-gray-100 hover:shadow-lg transition">
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className="h-16 w-auto md:h-20 lg:h-24 object-contain"
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>

          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-md bg-[#00abb8] px-7 py-4 text-base font-semibold text-white shadow hover:bg-[#0097a3] transition"
            >
              Demo vereinbaren
            </a>

            <a
              href="mailto:office@nexoro.net"
              className="text-base font-medium text-gray-700 hover:text-[#007f87] transition"
            >
              Weitere Integrationen anfragen
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
