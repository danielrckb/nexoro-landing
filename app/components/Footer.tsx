const navigation = {
  support: [
    { name: 'FAQ', href: '#' },
    { name: 'Kontakt', href: '#' },
    { name: 'QuickSupport', href: '#' },
  ],
  company: [
    { name: 'Funktionen', href: '#' },
    { name: 'Vorteile', href: '#' },
    { name: 'Preise', href: '#' },
    { name: 'Demo buchen', href: '#' },
  ],
  legal: [
    { name: 'Impressum', href: '#' },
    { name: 'Datenschutz', href: '#' },
    { name: 'AGB', href: '#' },
  ],
};

export default function Example() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 sm:pt-24 lg:px-8 lg:pt-32">

        {/* GRID WRAPPER */}
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">

          {/* LEFT SECTION */}
          <div className="space-y-8">
            <img
              alt="Nexoro"
              src="/img/logos/logo.png"
              className="h-14"
            />

            <p className="text-sm text-gray-600">
              Die smarte Komplettlösung für digitales Auftragsmanagement.
              Einfach. Übersichtlich. Für dich gemacht.
            </p>
          </div>

          {/* RIGHT GRID – MOBILE STACKS, DESKTOP STAYS 3 COLUMNS */}
          <div className="
            mt-16 
            grid grid-cols-1 gap-12      /* MOBILE: alles untereinander */
            sm:grid-cols-2               /* Tablet: 2 Spalten */
            xl:col-span-2 xl:mt-0 
            xl:grid-cols-3 xl:gap-8      /* Desktop: 3 Spalten */
          ">

            {/* SUPPORT */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Support</h3>
              <ul className="mt-6 space-y-4">
                {navigation.support.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Unternehmen</h3>
              <ul className="mt-6 space-y-4">
                {navigation.company.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* LEGAL */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900">Rechtliches</h3>
              <ul className="mt-6 space-y-4">
                {navigation.legal.map(item => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-600 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-16 border-t border-gray-200 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-sm text-gray-600">
            &copy; Nexoro. Alle Rechte vorbehalten.
          </p>
        </div>

      </div>
    </footer>
  );
}
