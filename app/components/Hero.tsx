'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, useMotionValue, useTransform } from 'framer-motion'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollY = useMotionValue(0)

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollY])

  // Bild startet hinten (45°) → richtet sich nach vorne (0°)
  const tiltX = useTransform(scrollY, [0, 300], [45, 0])

  return (
    <div className="bg-white">
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
                Alles aus einer Hand - Vom Erstkontakt bis zur Rechnung.
                Mit Nexoro hast du deine Aufträge, Kommunikation und Dokumente immer im Blick.
              </p>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:!bg-[#00abb8]/80"
                  style={{ backgroundColor: '#00abb8' }}
                >
                  Demo vereinbaren
                </a>

                <a
                  href="#"
                  className="text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Mehr erfahren →
                </a>
              </div>
            </motion.div>

            {/* IMAGE WITH REAL 3D TILT */}
            <div
              style={{
                perspective: "1400px",
                transformStyle: "preserve-3d",
              }}
              className="mt-16 sm:mt-24"
            >
              <motion.img
                alt="App screenshot"
                src="/img/nexoro.png"
                width={2432}
                height={1442}
                className="rounded-md bg-gray-50 shadow-xl ring-1 ring-gray-900/10"
                style={{
                  rotateX: tiltX,
                  transformOrigin: "top center",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
              />
            </div>

          </div>
        </div>

        {/* BOTTOM GRADIENT
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#00abb8] to-[#00abb8] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
          />
        </div> */}

      </div>
    </div>
  )
}
