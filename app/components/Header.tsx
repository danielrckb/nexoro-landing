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
  PlayCircleIcon,
  PhoneIcon,
  RectangleGroupIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

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

  const headerStyle = scrolled || dropdownOpen ? "bg-white shadow-sm" : "bg-gray-50"

  return (
    <header className={`sticky top-0 z-10 transition-all duration-300 ${headerStyle}`}>
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">

        {/* Logo */}
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img src="/img/logos/logo.png" alt="Nexoro" className="h-11 w-auto" />
          </a>
        </div>

        {/* MOBILE BUTTON ONLY */}
        <div className="flex items-center gap-3 lg:hidden">

          {/* 🔥 Small CTA Button next to Logo (mobile only) */}
          <a
            href="#"
            className="text-xs font-semibold text-white px-2 py-2 rounded-lg"
            style={{ backgroundColor: '#00abb8' }}
          >
            Demo vereinbaren
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="size-6" />
          </button>
        </div>

        {/* DESKTOP NAVIGATION */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Popover>
            {({ open }) => {
              if (open !== dropdownOpen) setDropdownOpen(open)

              return (
                <>
                  <PopoverButton
                    className="flex items-center gap-x-1 text-sm font-semibold text-gray-900 focus:outline-none"
                  >
                    Funktionen
                    <ChevronDownIcon className="size-5 text-gray-400" />
                  </PopoverButton>

                  <PopoverPanel className="absolute inset-x-0 top-full bg-white z-20 transition">
                    <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-white shadow-lg ring-1 ring-gray-900/5" />

                    <div className="relative bg-white">
                      <div className="mt-4 mx-auto grid max-w-7xl grid-cols-4 gap-x-4 px-6 py-10">
                        {products.map((item) => (
                          <div key={item.name} className="group relative p-6 rounded-lg hover:bg-gray-50">
                            <div className="flex size-11 items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100">
                              <item.icon className="size-6 text-gray-600 group-hover:text-[#00abb8]" />
                            </div>
                            <a href={item.href} className="mt-6 block font-semibold text-gray-900">
                              {item.name}
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

        {/* DESKTOP CTA */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold text-white px-6 py-2 rounded-lg"
            style={{ backgroundColor: '#00abb8' }}
          >
            Demo vereinbaren
          </a>
        </div>

      </nav>

      {/* Overlay for dropdown */}
      {dropdownOpen && (
        <div className="absolute inset-x-0 top-full h-16 bg-white z-0 hidden lg:block"></div>
      )}

      {/* MOBILE MENU PANEL */}
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm" />

        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full sm:max-w-sm bg-white p-6 overflow-y-auto ring-1 ring-gray-200">

          {/* Mobile Header Row */}
          <div className="flex items-center justify-between">
            <img src="/img/logos/logo.png" className="h-11 w-auto" alt="Nexoro" />

            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-gray-700">
              <XMarkIcon className="size-6" />
            </button>
          </div>

          {/* MENU CONTENT */}
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-200">

              <div className="space-y-2 py-6">

                <Disclosure>
                  <DisclosureButton className="flex w-full justify-between rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Funktionen
                    <ChevronDownIcon className="size-5" />
                  </DisclosureButton>

                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Features
                </a>

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Vorteile
                </a>

                <a href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Kontakt
                </a>
              </div>

              {/* MOBILE FULL CTA BUTTON */}
              <div className="py-6">
                <a
                  href="#"
                  className="block w-full text-center text-sm font-semibold text-white px-6 py-3 rounded-lg"
                  style={{ backgroundColor: '#00abb8' }}
                >
                  Demo vereinbaren
                </a>
              </div>

            </div>
          </div>

        </DialogPanel>
      </Dialog>

    </header>
  )
}
