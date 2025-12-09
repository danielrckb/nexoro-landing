'use client';

import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Download() {
  
  // AUTO-DOWNLOAD nach 3 Sekunden
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "/downloads/Nexoro-QuickSupport.exe";
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen w-full bg-[#f4f7f9] flex items-center justify-center px-6">
      <div className="text-center">

        {/* Logo */}
        <motion.img
          src="/img/logos/logo.png"
          alt="Nexoro Logo"
          className="mx-auto w-36 sm:w-40"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        />

        {/* Headline */}
        <motion.h1
          className="mt-10 text-2xl sm:text-3xl font-semibold text-[#008fa1]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <strong>Jetzt QuickSupport erhalten</strong>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mt-3 text-gray-600 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Der Download startet automatisch in <strong>3 Sekunden…</strong>
        </motion.p>

        {/* Button */}
        <motion.a
          href="/downloads/Nexoro-QuickSupport.exe"
          download
          className="inline-block mt-8 px-8 py-4 bg-[#00abb8] text-white font-semibold rounded-lg shadow-md hover:bg-[#009aa6] transition"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          Manueller Download
        </motion.a>

      </div>
    </section>
  );
}
