'use client';

import { motion } from 'framer-motion';

export default function LeadMagnet() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="w-full flex justify-center px-6 py-20"
    >
      <div className="max-w-6xl w-full bg-[#f6fbfc] rounded-3xl shadow-md p-10 md:p-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT TEXT */}
        <div className="">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002b33] leading-snug">
            Entdecke, wie Nexoro dein<br />
            Auftragsmanagement<br />
            einfacher macht.
          </h2>

          <p className="text-gray-700 mt-6 text-base md:text-lg">
            Unser Team unterstützt dich gerne und zeigt dir,
            wie Nexoro deine täglichen Abläufe automatisiert
            und dein Unternehmen effizienter macht.
          </p>

          <p className="mt-10 text-sm text-gray-500">Du möchtest nicht warten?</p>

          <p className="mt-2 text-xl font-semibold text-[#002b33]">
            Kontaktiere uns direkt
          </p>

          <div className="mt-6 space-y-3">

            {/* Email */}
            <a
              href="mailto:office@nexoro.net"
              className="flex items-center gap-2 text-[#002b33] hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#00a0ae"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.02 1.89l-7.5 4.875a2.25 2.25 0 01-2.46 0L3.27 8.883A2.25 2.25 0 012.25 6.993V6.75"
                />
              </svg>

              office@nexoro.net
            </a>

          </div>
        </div>

        {/* RIGHT FORM */}
        <div>
          <div className="space-y-4">

            <input
              type="text"
              placeholder="Dein Name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aebe] bg-white"
            />

            <div className="grid grid-cols-3 gap-3">
              <select
                className="col-span-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00aebe] bg-white"
              >
                <option>Österreich (+43)</option>
                <option>Deutschland (+49)</option>
                <option>Schweiz (+41)</option>
              </select>

              <input
                type="text"
                placeholder="Telefonnummer"
                className="col-span-2 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#00aebe] bg-white"
              />
            </div>

            <input
              type="email"
              placeholder="E-Mail"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00aebe] bg-white"
            />

            <button
              disabled
              className="
                w-full py-3 mt-4 rounded-lg text-white font-semibold 
                bg-[#00abb8] hover:bg-[#00abb8]/80 transition 
                shadow-md cursor-pointer
              "
            >
              Demo anfragen
            </button>

          </div>
        </div>

      </div>
    </motion.section>
  );
}
