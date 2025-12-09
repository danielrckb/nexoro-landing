"use client";

import Link from "next/link";
import { ArrowLeft, Ghost } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-[#f6f9fb] flex items-center justify-center px-6">
      <div className="text-center max-w-xl">

        <div className="flex justify-center mb-6">
          <Ghost className="w-20 h-20 text-[#00a4b4]" />
        </div>

        <h1 className="text-5xl font-extrabold text-[#008fa1] mb-4">
          404 – Seite nicht gefunden
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#00a4b4] text-white font-medium px-6 py-4 rounded-xl shadow-md hover:bg-[#0095a3] transition"
        >
          <ArrowLeft className="w-5 h-5" />
          Zurück zur Startseite
        </Link>
      </div>
    </section>
  );
}
