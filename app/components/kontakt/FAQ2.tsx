export default function FAQ2() {
  const faqs = [
    {
      question: "Was macht Nexoro genau?",
      answer:
        "Nexoro ist eine All-in-One-Lösung für Auftragsmanagement, die den gesamten Prozess von der ersten Kundenanfrage bis zur Rechnung abdeckt. Sie können Angebote erstellen, Kommunikation verwalten, Aufträge bearbeiten und Rechnungen schreiben – alles in einer zentralen Plattform.",
    },
    {
      question: "Wie unterscheidet sich Nexoro von anderen Lösungen?",
      answer:
        "Nexoro bietet eine vollständig integrierte Lösung, die alle Aspekte des Auftragsmanagements in einer Plattform vereint. Im Gegensatz zu anderen Lösungen müssen Sie nicht zwischen verschiedenen Programmen wechseln – alles ist an einem Ort gespeichert und jederzeit verfügbar.",
    },
    {
      question: "Kann ich meine bestehende Kommunikation mit Nexoro verwalten?",
      answer:
        "Ja, Nexoro unterstützt verschiedene Kommunikationskanäle wie Telefon, E-Mail, SMS und WhatsApp. Alle Kommunikation wird automatisch im jeweiligen Auftrag gespeichert, sodass Sie nie wieder wichtige Informationen suchen müssen.",
    },
    {
      question: "Wie kann ich Dokumente und Fotos verwalten?",
      answer:
        "Mit Nexoro können Sie Dokumente und Fotos direkt in den jeweiligen Auftrag hochladen. Alle Dateien bleiben mit dem Auftrag verknüpft und sind jederzeit griffbereit. Kein lästiges Suchen in verschiedenen Ordnern mehr.",
    },
    {
      question: "Ist Nexoro für mein Unternehmen geeignet?",
      answer:
        "Nexoro ist speziell für Dienstleistungsbetriebe und Handwerker entwickelt, die Wert auf effizientes Auftragsmanagement legen. Die Lösung passt sich individuell an Ihr Unternehmen an – Ihre Arbeit, Ihre Regeln.",
    },
    {
      question: "Wie kann ich mit Nexoro starten?",
      answer:
        "Der Einstieg in Nexoro ist einfach. Kontaktieren Sie uns, und wir zeigen Ihnen, wie Nexoro Sie optimal unterstützen kann. Sie können direkt loslegen und Ihre Aufträge effizienter verwalten.",
    },
  ];

  return (
    <section className="py-24 bg-[#f6f9fb]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADLINE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#008fa1]">
            Häufig gestellte Fragen
          </h2>
          <p className="text-gray-600 mt-3">
            Finden Sie schnelle Antworten auf die häufigsten Fragen zu Nexoro
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-[#00abb8]">
                {faq.question}
              </h3>
              <p className="text-gray-700 mt-2 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
