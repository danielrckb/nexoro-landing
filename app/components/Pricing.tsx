'use client'

import { CheckIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-hobby',
    href: '#',
    priceMonthly: '€79',
    description: "Perfekt für kleine und mittlere Unternehmen",
    features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
    featured: false,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    priceMonthly: 'Individuell',
    description: 'Für große Unternehmen mit speziellen Anforderungen',
    features: [
      'Unlimited products',
      'Unlimited subscribers',
      'Advanced analytics',
      'Dedicated support representative',
      'Marketing automations',
      'Custom integrations',
    ],
    featured: true,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <div className="relative isolate bg-gray-50 px-6 py-24 sm:py-32 lg:px-8">

      {/* 🔵 GRADIENT mit Nexoro-Blau */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="mx-auto aspect-1155/678 w-288.75 bg-gradient-to-tr from-[#00abb8] to-[#7ce7f0] opacity-30"
        />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-[#00abb8]">Unsere Preise</h2>

        <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-black sm:text-6xl">
          Transparente Preise für jedes Unternehmen
        </p>
      </div>

      <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Wähle den Plan, der am besten zu deinem Unternehmen passt. Alle Pläne enthalten wichtige Funktionen für effizientes Auftragsmanagement
      </p>

      {/* ⭐ F A D E  I N  A N I M A T I O N  W I E  B E I  F E A T U R E S ⭐ */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2"
      >
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? 'relative bg-[#E4FAFC] shadow-2xl border border-[#b6eef3]'
                : 'bg-white/60 sm:mx-8 lg:mx-0',

              tier.featured
                ? ''
                : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl'
                  : 'sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none',

              'rounded-3xl p-8 ring-1 ring-gray-200 sm:p-10'
            )}
          >
            <h3
              id={tier.id}
              className={classNames(
                'text-[#00abb8]',
                'text-base/7 font-semibold'
              )}
            >
              {tier.name}
            </h3>

            <p className="mt-4 flex items-baseline gap-x-2">
              <span className="text-gray-900 text-5xl font-semibold tracking-tight">
                {tier.priceMonthly}
              </span>

              {/* ❗ Nur beim Starter steht /Monat ❗ */}
              {tier.name !== 'Enterprise' && (
                <span className="text-gray-500 text-base">/Monat</span>
              )}
            </p>

            <p className="mt-6 text-gray-600 text-base">
              {tier.description}
            </p>

            <ul
              role="list"
              className="mt-8 space-y-3 text-sm/6 text-gray-700 sm:mt-10"
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-[#00abb8]"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={tier.href}
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? 'bg-[#00abb8] text-white hover:bg-[#00919e]'
                  : 'text-[#00abb8] border border-[#00abb8] hover:bg-[#e0f8fa]',
                'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold sm:mt-10'
              )}
            >
              Demo vereinbaren
            </a>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
