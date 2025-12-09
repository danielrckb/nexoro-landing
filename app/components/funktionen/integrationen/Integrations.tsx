"use client";

import { motion } from "framer-motion";

interface IntegrationItem {
  title: string;
  category: string;
  description: string;
  icon: string; // image path (PNG/SVG)
}

const items: IntegrationItem[] = [
  {
    title: "Microsoft",
    category: "E-Mail & Kalender",
    description: "Synchronisiere E-Mails und Kalenderereignisse automatisch mit Nexoro.",
    icon: "/img/integrations/microsoft.png",
  },
  {
    title: "Google",
    category: "E-Mail & Kalender",
    description: "Verbinde Gmail und Google Kalender nahtlos mit deinen Aufträgen.",
    icon: "/img/integrations/google.png",
  },
  {
    title: "3CX",
    category: "Telefonie",
    description: "Telefonate automatisch protokollieren und direkt im Auftrag speichern.",
    icon: "/img/integrations/3cx.png",
  },
  {
    title: "WhatsApp",
    category: "Messaging",
    description: "Empfange und sende WhatsApp-Nachrichten zentral in Nexoro.",
    icon: "/img/integrations/whatsapp.png",
  },
  {
    title: "SMS",
    category: "Nachrichten",
    description: "Sende automatische Erinnerungen und SMS direkt aus deinen Aufträgen.",
    icon: "/img/integrations/sms.png",
  },
  {
    title: "Powrbook",
    category: "Spezialtool",
    description: "Importiere und synchronisiere Leads, Kontakte und Aufträge aus Powrbook.",
    icon: "/img/integrations/powrbook.png",
  },
];

export default function Integrations() {
  return (
    <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT COLUMN */}
        <div className="space-y-10">
          {items.slice(0, 3).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <img src={item.icon} alt="" className="w-12 h-12 object-contain" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>

                  <p className="text-gray-600 mt-4">{item.description}</p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#00abb8] font-semibold mt-4"
                  >
                    Mehr erfahren →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className="space-y-10">
          {items.slice(3, 6).map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white shadow-md rounded-2xl p-8 border border-gray-100"
            >
              <div className="flex items-start gap-6">
                <img src={item.icon} alt="" className="w-12 h-12 object-contain" />

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>

                  <p className="text-gray-600 mt-4">{item.description}</p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-[#00abb8] font-semibold mt-4"
                  >
                    Mehr erfahren →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
