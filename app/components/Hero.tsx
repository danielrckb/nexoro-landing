'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // 👇 Scroll progress (0 = top, 1 = weiter unten)
  const { scrollYProgress } = useScroll()

  // 👇 Bild soll leicht nach hinten kippen (rotateX 15°)
  //    und beim Scrollen aufrichten (0°)
  const tiltX = useTransform(scrollYProgress, [0, 0.3], [15, 0])

  // 👇 Zusätzlich minimal Scale-Effekt (wirkt hochwertiger)
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.96, 1])

  return (
    <div className="bg-gray-50">
      <div className="relative isolate pt-14">

        <div className="py-24 sm:py-32 lg:pb-40">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            {/* TEXT BLOCK */}
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h1 className="text-4xl font-semibold tracking-tight text-black sm:text-7xl">
                Die Next-Generation Lösung für dein{' '}
                <span className="text-[#00abb8]">Auftragsmanagement</span>
              </h1>

              <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl/8">
                Alles aus einer Hand - Vom Erstkontakt bis zur Rechnung. Mit Nexoro hast du deine Aufträge,
                Kommunikation und Dokumente immer im Blick. Kein lästiges Suchen mehr – alles ist an einem Ort gespeichert.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs"
                  style={{ backgroundColor: '#00abb8' }}
                >
                  Demo vereinbaren
                </a>

                <a href="#" className="text-sm font-semibold text-gray-900">
                  Mehr erfahren →
                </a>
              </div>
            </motion.div>

            {/* IMAGE – 3D SCROLL ANIMATION */}
            <motion.img
              alt="App screenshot"
              src="/img/nexoro.png"
              width={2432}
              height={1442}
              className="mt-16 rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10 sm:mt-24"
              style={{
                perspective: "1200px",
                rotateX: tiltX,   // <— Magic happens here
                scale: scale,     // <— zusätzlicher Smooth-Effekt
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
