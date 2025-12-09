'use client'

import { InboxIcon, DocumentIcon, DocumentCurrencyEuroIcon, UserIcon, PhotoIcon, CheckCircleIcon, } from '@heroicons/react/24/outline'
import { motion } from "framer-motion"

const features = [
  // Original 3
  {
    name: 'Erstkontakt',
    description:
      'Ein neuer Kunde meldet sich? Alles startet hier. Erstelle sofort einen Auftrag und speichere alle Informationen zentral.',
    href: '#',
    icon: UserIcon,
  },
  {
    name: 'Angebotslegung',
    description:
      'Erstelle Angebote schnell und klar. Alle Dokumente bleiben im Auftrag und sind jederzeit griffbereit.',
    href: '#',
    icon: DocumentIcon,
  },
  {
    name: 'Kommunikation',
    description:
      'Telefonate, Mails, SMS oder WhatsApp - alles wird automatisch im richtigen Auftrag gespeichert.',
    href: '#',
    icon: InboxIcon,
  },

  // Duplicate 3
  {
    name: 'Auftrag',
    description:
      'Der Kunde sagt Ja? Der Auftrag ist direkt fertig. Alle Informationen sind bereits vorhanden und müssen nicht neu eingegeben werden.',
    href: '#',
    icon: CheckCircleIcon,
  },
  {
    name: 'Rechnung',
    description:
      'Am Ende steht die Rechnung - einfach und zentral. Erstelle sie direkt im Auftrag, ohne Daten neu einzugeben.',
    href: '#',
    icon: DocumentCurrencyEuroIcon,
  },
  {
    name: 'Foto-Dokumentation',
    description:
      'Fotos von Projekten direkt zum Auftrag hinzufügen für lückenlose Dokumentation und Kundenkommunikation.',
    href: '#',
    icon: PhotoIcon,
  },
]

export default function Features() {
  return (
    <motion.div
      className="bg-white py-24 sm:py-32"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="features">

        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-black sm:text-5xl">
            Dein kompletter Arbeitsprozess aus einer Hand
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
             Nexoro bringt Ordnung in deinen Prozess - von der ersten Kundenanfrage bis zur finalen Rechnung. 
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

            {features.map((feature, i) => (
              <motion.div
                key={i}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div
                    className="mb-6 flex size-10 items-center justify-center rounded-lg"
                    style={{ backgroundColor: '#00abb8' }}
                  >
                    <feature.icon aria-hidden="true" className="size-6 text-white" />
                  </div>
                  {feature.name}
                </dt>

                <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>

                  <p className="mt-6">
                    <a
                      href={feature.href}
                      className="text-sm/6 font-semibold hover:opacity-80"
                      style={{ color: '#00abb8' }}
                    >
                      Erfahre mehr <span aria-hidden="true">→</span>
                    </a>
                  </p>
                </dd>
              </motion.div>
            ))}

          </dl>
        </div>

      </div>
    </motion.div>
  )
}
