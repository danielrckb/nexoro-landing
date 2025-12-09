"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Form() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const json = Object.fromEntries(formData.entries());

    await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(json),
    });

    setLoading(false);
    setSuccess(true);
  }

  return (
    <section className="w-full bg-[#f6f9fb] py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#008fa1]">
            Kontaktieren Sie uns
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Haben Sie Fragen zu Nexoro oder benötigen Sie Unterstützung?  
            Wir sind für Sie da und helfen Ihnen gerne weiter.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* LEFT (FORM) */}
          <div className="lg:col-span-2 bg-white p-10 rounded-3xl shadow-sm border border-gray-200">

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Vorname + Nachname */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  name="vorname"
                  placeholder="Vorname *"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00abb8] outline-none"
                />
                <input
                  required
                  name="nachname"
                  placeholder="Nachname *"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#00abb8] outline-none"
                />
              </div>

              {/* Email + Telefonnummer */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="E-Mail *"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-[#00abb8] focus:ring-2 outline-none"
                />
                <input
                  type="text"
                  name="telefon"
                  placeholder="Telefonnummer"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-[#00abb8] focus:ring-2 outline-none"
                />
              </div>

              {/* Unternehmen */}
              <input
                name="unternehmen"
                placeholder="Unternehmen"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-[#00abb8] focus:ring-2 outline-none"
              />

              {/* Betreff */}
              <input
                required
                name="betreff"
                placeholder="Betreff *"
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-[#00abb8] focus:ring-2 outline-none"
              />

              {/* Nachricht */}
              <textarea
                required
                name="nachricht"
                placeholder="Ihre Nachricht *"
                rows={6}
                className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:ring-[#00abb8] focus:ring-2 outline-none"
              />

              {/* Datenschutz */}
              <label className="flex items-center gap-3 text-gray-600 text-sm">
                <input
                  type="checkbox"
                  required
                  className="w-4 h-4 border-gray-400"
                />
                Ich habe die{" "}
                <a href="/datenschutz" className="underline text-[#00abb8]">
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="px-8 py-4 rounded-xl text-white font-semibold bg-[#00abb8] hover:bg-[#0097a3] transition shadow-md"
              >
                {loading ? "Senden..." : "Nachricht senden"}
              </button>

              {success && (
                <p className="text-green-600 font-semibold pt-2">
                  Ihre Nachricht wurde erfolgreich gesendet!
                </p>
              )}
            </form>
          </div>

          {/* RIGHT INFO BOXES */}
          <div className="space-y-8">

            {/* Kontaktinformationen */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-[#008fa1] mb-4">
                Kontaktinformationen
              </h3>

              <div className="flex items-start gap-4 mb-4">
                <Phone className="text-[#00abb8] w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">Telefon</p>
                  <p className="text-gray-600 text-sm">nach Rücksprache</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="text-[#00abb8] w-6 h-6" />
                <div>
                  <p className="text-sm font-semibold">E-Mail</p>
                  <p className="text-gray-600 text-sm">office@nexoro.net</p>
                </div>
              </div>
            </div>

            {/* Bürozeiten */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-[#008fa1] mb-4">
                Bürozeiten
              </h3>

              <div className="flex items-start gap-4">
                <Clock className="text-[#00abb8] w-6 h-6" />
                <div>
                  <p className="text-sm">Montag – Freitag</p>
                  <p className="text-sm font-semibold">9:00 – 18:00 Uhr</p>
                </div>
              </div>
            </div>

            {/* Adresse */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-[#008fa1] mb-4">
                Adresse
              </h3>

              <div className="flex items-start gap-4">
                <MapPin className="text-[#00abb8] w-6 h-6" />
                <div className="text-sm text-gray-700">
                  <p>DAR LEAN DACH GmbH</p>
                  <p>Siezenheimer Straße 35</p>
                  <p>5020 Salzburg</p>
                  <p>Österreich</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
