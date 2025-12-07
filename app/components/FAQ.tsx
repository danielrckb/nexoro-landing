'use client'

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: "Was ist Nexoro?",
    answer:
      "Nexoro ist eine cloudbasierte All-in-One-Plattform für effizientes Auftragsmanagement, speziell für Dienstleistungsbetriebe und Handwerker. Die Software digitalisiert den gesamten Arbeitsprozess von der ersten Kundenanfrage bis zur finalen Rechnung.",
  },
  {
    question: 'Wie sicher sind meine Daten?',
    answer:
      'Ihre Daten sind bei uns in sicheren Händen. Nexoro verwendet die neuesten Sicherheitsstandards, einschließlich SSL-Verschlüsselung, regelmäßigen Backups und ISO-zertifizierten Rechenzentren in der EU. Ihre Daten werden niemals an Dritte weitergegeben.',
  },
  {
    question: 'Was passiert nach der kostenlosen Testphase?',
    answer:
      'Nach der 14-tägigen kostenlosen Testphase können Sie Nexoro ohne Unterbrechung weiter nutzen. Sie wählen einfach den passenden Tarif und zahlen monatlich. Keine versteckten Kosten, keine langfristigen Verträge.',
  },
]

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">

        {/* FADE-IN WRAPPER */}
        <motion.div
          className="mx-auto max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* HEADLINE */}
          <h2 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Häufig gestellte Fragen
          </h2>

          {/* FAQ LIST */}
          <dl className="mt-16 divide-y divide-gray-200">
            {faqs.map((faq) => (
              <Disclosure key={faq.question} as="div" className="py-6 first:pt-0 last:pb-0">
                
                {/* QUESTION */}
                <dt>
                  <DisclosureButton className="group flex w-full items-start justify-between text-left text-gray-900 hover:text-[#00abb8] transition-colors">
                    <span className="text-base font-semibold">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <PlusSmallIcon aria-hidden="true" className="size-6 group-data-open:hidden text-gray-500" />
                      <MinusSmallIcon aria-hidden="true" className="size-6 group-not-data-open:hidden text-[#00abb8]" />
                    </span>
                  </DisclosureButton>
                </dt>

                {/* ANSWER */}
                <DisclosurePanel as="dd" className="mt-2 pr-12">
                  <p className="text-base text-gray-600">
                    {faq.answer}
                  </p>
                </DisclosurePanel>

              </Disclosure>
            ))}
          </dl>

        </motion.div>
      </div>
    </div>
  )
}
