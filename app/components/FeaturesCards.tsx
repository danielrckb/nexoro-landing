export default function FeaturesCards() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-base/7 font-semibold" style={{ color: "#00abb8" }}>
          Schneller zum Erfolg
        </h2>

        <p className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
Alles für dein
Auftragsmanagement System
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">

          {/* CARD 1 */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <img
                alt=""
                src="img/integrations.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold" style={{ color: "#00abb8" }}>
                  Integrationen
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Nahtlos vernetzt – alles an einem Ort
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Mit Nexoro verbindest du alle wichtigen Tools, die du täglich nutzt – von E-Mail über Telefonie bis zu Kalender- und Kommunikationstools.
{/* Alle Informationen fließen zentral zusammen, damit du schneller arbeitest und nichts mehr übersiehst. */}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>

          {/* CARD 2 */}
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <img
                alt=""
                src="img/auftrag.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold" style={{ color: "#00abb8" }}>
                  Auftragsverwaltung
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Aufträge schneller und intuitiver bearbeiten
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Die strukturierte Auftragserfassung von Nexoro sorgt dafür, dass alle relevanten Daten sofort sichtbar sind.
{/* Von Kundendaten bis Statusverfolgung – alles ist klar organisiert, leicht erfassbar und in Sekunden aktualisiert. */}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
          </div>

          {/* CARD 3
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
              <img
                alt=""
                src="img/integrations.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold" style={{ color: "#00abb8" }}>
                  Speed
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Built for power users
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Sed congue eros non finibus molestie. Vestibulum euismod augue.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
          </div>

          {/* CARD 4 */}
          {/* <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <img
                alt=""
                src="/img/integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold" style={{ color: "#00abb8" }}>
                  Integrations
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Connect your favorite tools
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Maecenas at augue sed elit dictum vulputate, in nisi aliquam maximus arcu.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div> */}

          {/* CARD 5 */}
          {/* <div className="relative lg:col-span-2">
            <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
              <img
                alt=""
                src="img/integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold" style={{ color: "#00abb8" }}>
                  Network
                </h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                  Globally distributed CDN
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  Aenean vulputate justo commodo auctor vehicula in malesuada semper.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
          </div>  */}

        </div>
      </div>
    </div>
  )
}
