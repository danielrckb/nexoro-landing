'use client'

import { useState, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, RectangleGroupIcon } from '@heroicons/react/20/solid'

const products = [
  { name: 'Analytics', description: 'Get a better understanding where your traffic is coming from', href: '#', icon: ChartPieIcon },
  { name: 'Engagement', description: 'Speak directly to your customers with our engagement tool', href: '#', icon: CursorArrowRaysIcon },
  { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#', icon: FingerPrintIcon },
  { name: 'Integrations', description: 'Your customers’ data will be safe and secure', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
  { name: 'Contact sales', href: '#', icon: PhoneIcon },
  { name: 'View all products', href: '#', icon: RectangleGroupIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  /* ----------------------------------------------------------
     🔥 HEADER STYLING MODI — WÄHLE HIER DEINEN STYLE 🔥
     ----------------------------------------------------------

     1️⃣ TRANSPARENT HEADER oben → Weiß beim Scrollen
     const headerStyle = scrolled || dropdownOpen ? "bg-white shadow-sm" : "bg-transparent";

     2️⃣ FARBE HEADER oben → Weiß beim Scrollen
     const headerStyle = scrolled || dropdownOpen ? "bg-white shadow-sm" : "bg-[#f8fafa]";

     3️⃣ GRADIENT HEADER oben → Weiß beim Scrollen
     const headerStyle = scrolled || dropdownOpen 
        ? "bg-white shadow-sm" 
        : "bg-gradient-to-b from-[#00abb8]/20 to-transparent";

     👉 Einfach die gewünschte Variante freischalten!
     ---------------------------------------------------------- */

  //  Aktive Variante (gerne ändern!)
  const headerStyle = scrolled || dropdownOpen
    ? "bg-white shadow-sm"
    : "bg-gray-50" // <— HIER kannst du z. B. bg-[#f8fafa] ODER gradient einsetzen


  return (
    <header className={`sticky top-0 z-10 transition-all duration-300 ${headerStyle}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img alt="" src="/img/logos/logo.png" className="h-11 w-auto" />
          </a>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            {({ open }) => {
              if (open !== dropdownOpen) setDropdownOpen(open)

              return (
                <>
                  <PopoverButton
                    className="flex items-center gap-x-1 text-sm font-semibold text-gray-900
                    focus:outline-none focus:ring-0"
                  >
                    Funktionen
                    <ChevronDownIcon aria-hidden="true" className="size-5 text-gray-400" />
                  </PopoverButton>

                  <PopoverPanel
                    className="absolute inset-x-0 top-full bg-white z-20 transition 
                    data-closed:-translate-y-1 data-closed:opacity-0"
                  >
                    <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />

                    <div className="relative bg-white">
                      <div className="mt-4 mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10">
                        {products.map((item) => (
                          <div key={item.name} className="group relative rounded-lg p-6 text-sm hover:bg-gray-50">
                            <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100">
                              <item.icon className="size-6 text-gray-600 group-hover:text-[#00abb8]" />
                            </div>
                            <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="bg-gray-50">
                        <div className="mx-auto max-w-7xl px-6">
                          <div className="grid grid-cols-3 divide-x divide-gray-200 border-x border-gray-200">
                            {callsToAction.map((item) => (
                              <a key={item.name} href={item.href} className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold text-gray-900 hover:bg-gray-100">
                                <item.icon className="size-5 text-gray-400" />
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </PopoverPanel>
                </>
              )
            }}
          </Popover>

          <a href="#" className="text-sm font-semibold text-gray-900">Features</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Vorteile</a>
          <a href="#" className="text-sm font-semibold text-gray-900">Kontakt</a>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a href="#" className="text-sm font-semibold text-white px-6 py-2 rounded-lg" style={{ backgroundColor: '#00abb8' }}>
            Demo vereinbaren
          </a>
        </div>
      </nav>

      {dropdownOpen && (
        <div className="absolute inset-x-0 top-full h-16 bg-white z-0 hidden lg:block"></div>
      )}

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm ring-1 ring-gray-200">

          <div className="flex items-center justify-between">
            <img alt="Nexoro" src="/img/logos/logo.png" className="h-11 w-auto" />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="size-6" />
            </button>
          </div>

          {/* MOBILE NAV ... unchanged */}
        </DialogPanel>
      </Dialog>
    </header>
  )
}
