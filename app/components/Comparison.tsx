'use client'

import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"

export default function Comparison() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        
        {/* HEADLINE */}
        <h2 className="text-base font-semibold" style={{ color: "#00abb8" }}>
          Dein Alltag im Vergleich
        </h2>

        <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
          Ohne Nexoro vs. mit Nexoro
        </p>

        <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
          Entdecke, wie Nexoro deinen Arbeitsalltag revolutioniert und dir jeden Tag wertvolle Zeit zurückgibt.
        </p>

        {/* MAIN GRID */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CARD – WITHOUT NEXORO */}
          <div className="bg-white rounded-3xl p-10 shadow-md border border-gray-200">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-red-100 text-red-500 p-3 rounded-full">
                <XMarkIcon className="w-7 h-7" />
              </div>

              <h3 className="mt-4 text-2xl font-semibold text-gray-800">
                Ohne Nexoro
              </h3>

              <p className="mt-2 italic text-gray-500 text-sm max-w-sm">
                “Ich verliere zu viel Zeit mit Suchen, Abstimmen und Organisieren.”
              </p>
            </div>

            <ul className="space-y-6 text-left mx-auto max-w-md">
              <li className="flex gap-3">
                <XMarkIcon className="w-6 h-6 text-red-500 flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Verstreute Informationen</p>
                  <p className="text-gray-600 text-sm">
                    Kundendaten, Mails und Notizen überall verteilt. Keine Übersicht.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <XMarkIcon className="w-6 h-6 text-red-500 flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Zeitfressende Suche</p>
                  <p className="text-gray-600 text-sm">
                    Stundenlanges Suchen nach Dokumenten & Infos.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <XMarkIcon className="w-6 h-6 text-red-500 flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Chaotische Kommunikation</p>
                  <p className="text-gray-600 text-sm">
                    Mails, Telefon, WhatsApp – nichts ist zentral dokumentiert.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <XMarkIcon className="w-6 h-6 text-red-500 flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Manuelle Arbeit</p>
                  <p className="text-gray-600 text-sm">
                    Fehleranfälliges Kopieren, Suchen und Übertragen.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* RIGHT CARD – WITH NEXORO */}
          <div className="bg-white rounded-3xl p-10 shadow-md border border-[#b6eef3]">
            <div className="flex flex-col items-center mb-6">
              <div className="bg-[#e0f8fa] text-[#00abb8] p-3 rounded-full">
                <CheckIcon className="w-7 h-7" />
              </div>

              <h3 className="mt-4 text-2xl font-semibold" style={{ color: "#00abb8" }}>
                Mit Nexoro
              </h3>

              <p className="mt-2 italic text-gray-500 text-sm max-w-sm">
                “Alles an einem Ort – schneller, übersichtlich und komplett automatisiert.”
              </p>
            </div>

            <ul className="space-y-6 text-left mx-auto max-w-md">
              <li className="flex gap-3">
                <CheckIcon className="w-6 h-6 text-[#00abb8] flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Zentrale Datenverwaltung</p>
                  <p className="text-gray-600 text-sm">
                    Alle Dokumente, Kunden & Kommunikation an einem Ort.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckIcon className="w-6 h-6 text-[#00abb8] flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Sofortiger Zugriff</p>
                  <p className="text-gray-600 text-sm">
                    Nie mehr suchen – alles in Sekunden verfügbar.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckIcon className="w-6 h-6 text-[#00abb8] flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Vollständige Dokumentation</p>
                  <p className="text-gray-600 text-sm">
                    Jede Kommunikation automatisch festgehalten.
                  </p>
                </div>
              </li>

              <li className="flex gap-3">
                <CheckIcon className="w-6 h-6 text-[#00abb8] flex-none" />
                <div>
                  <p className="font-semibold text-gray-800">Automatische Synchronisation</p>
                  <p className="text-gray-600 text-sm">
                    Keine manuelle Übertragung mehr nötig – alles aktuell.
                  </p>
                </div>
              </li>
            </ul>

            <div className="mt-10 flex justify-center">
              <a
                href="#"
                className="px-6 py-3 rounded-lg text-white font-semibold hover:bg-[#00abb8]/80"
                style={{ backgroundColor: "#00abb8" }}
              >
                Demo vereinbaren
              </a>
            </div>
          </div>

        </div>

      </div>
    </motion.section>
  )
}
