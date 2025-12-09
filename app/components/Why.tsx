import { CheckIcon } from '@heroicons/react/24/solid'

const features = [
  {
    name: 'Mehr Zeit für das Wesentliche',
    description:
      'Reduziere den Verwaltungsaufwand um bis zu 40% und konzentriere dich auf dein Kerngeschäft und deine Kunden.',
    icon: CheckIcon,
  },
  {
    name: 'Nie wieder Information verlieren',
    description:
      'Alle Dokumente, Notizen und die gesamte Kommunikation sind zentral gespeichert und jederzeit auffindbar.',
    icon: CheckIcon,
  },
  {
    name: 'Professioneller Kundenauftritt',
    description:
      'Einheitliche Dokumente, schnelle Reaktionszeiten und lückenlose Dokumentation beeindrucken Ihre Kunden.',
    icon: CheckIcon,
  },
]

export default function Example() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32" id="benefits">
      <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">

          {/* LEFT TEXT */}
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">

              {/* Section Tag */}
              <h2 className="text-base/7 font-semibold" style={{ color: '#00abb8' }}>
                Warum Nexoro?
              </h2>

              {/* Main Title */}
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Warum Unternehmen auf Nexoro setzen
              </p>

              {/* Subtitel (neu, kurz & professionell) */}
              <p className="mt-6 text-lg/8 text-gray-600">
                Entdecken Sie, wie Nexoro Ihren Arbeitsalltag effizienter, strukturierter und stressfreier macht.
              </p>

              {/* FEATURES */}
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5"
                        style={{ color: '#00abb8' }}
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>

            </div>
          </div>

          {/* RIGHT IMAGE (UNVERÄNDERT außer Dark entfernt & unsere Farbe gesetzt) */}
          <div className="sm:px-6 lg:px-0">
            <div
              className="relative isolate overflow-hidden px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none"
              style={{ backgroundColor: '#00abb8' }}
            >
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] opacity-20 ring-1 ring-white ring-inset"
                style={{ backgroundColor: '#7ce7f0' }}
              />

              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <img
                  alt="Product screenshot"
                  src="/img/auftrag2.png"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-228 max-w-none rounded-tl-xl bg-white ring-1 ring-gray-300"
                />
              </div>

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
