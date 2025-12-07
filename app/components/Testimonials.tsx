export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">

          {/* LEFT TESTIMONIAL */}
          <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">

            {/* LOGO – wie im Original */}
            <img
              alt=""
              src="/img/logos/powersales.png"
              className="h-12 self-start"
            />

            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Nexoro hat unseren gesamten Arbeitsalltag vereinfacht. Prozesse laufen schneller,
                  übersichtlicher und wir sparen täglich wertvolle Zeit – ein echter Produktivitätsboost!”
                </p>
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Max Mustermann</div>
                  <div className="mt-1 text-gray-500">Geschäftsführer — RW Powersales GmbH</div>
                </div>
              </figcaption>
            </figure>
          </div>

          {/* RIGHT TESTIMONIAL */}
          <div className="flex flex-col border-t border-gray-200 pt-10 sm:pt-16 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8 xl:pl-20">

            {/* LOGO – wie im Original */}
            <img
              alt=""
              src="/img/logos/npos.png"
              className="h-12 self-start"
            />

            <figure className="mt-10 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-gray-900">
                <p>
                  “Die zentrale Datenverwaltung und automatische Dokumentation sind ein Game-Changer.
                  Dank Nexoro ist unser Team deutlich effizienter und verliert keine Informationen mehr.”
                </p>
              </blockquote>

              <figcaption className="mt-10 flex items-center gap-x-6">
                <div className="text-base">
                  <div className="font-semibold text-gray-900">Max Mustermann</div>
                  <div className="mt-1 text-gray-500">Inhaber — NPOS GmbH</div>
                </div>
              </figcaption>

            </figure>
          </div>

        </div>
      </div>
    </section>
  );
}
