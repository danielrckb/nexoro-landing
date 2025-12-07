export default function FeaturesCards() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">

        <h2 className="text-base/7 font-semibold" style={{ color: "#00abb8" }}>
          Schneller zum Erfolg
        </h2>

        <p className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-pretty text-black sm:text-5xl">
          Alles für dein<br />
          Auftragsmanagement System
        </p>

        {/* GRID – jetzt nur noch 2 Cards, ohne leeren Raum */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-2">

          {/* CARD 1 */}
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
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
                  Mit Nexoro verbindest du alle wichtigen Tools, die du täglich nutzt – 
                  von E-Mail über Telefonie bis zu Kalender- und Kommunikationstools.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>

          {/* CARD 2 */}
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
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
                  Die strukturierte Auftragserfassung von Nexoro sorgt dafür, 
                  dass alle relevanten Daten sofort sichtbar sind.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
          </div>

        </div>
      </div>
    </div>
  )
}
