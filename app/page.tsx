"use client";

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDownIcon } from "lucide-react"
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon } from "lucide-react" // New icons for contact info
import React, { useState } from "react";

export default function Component() {
  const leistungen = [
    {
      key: "prophylaxe",
      titel: "Prophylaxe",
      beschreibungKurz: "Professionelle Zahnreinigung und Vorsorge.",
      beschreibungLang: "Unsere professionelle Zahnreinigung entfernt gründlich Zahnbelag und beugt Karies sowie Zahnfleischerkrankungen vor. Wir beraten Sie individuell für Ihre optimale Mundgesundheit.",
      bild: "/images/placeholder1.jpg",
      highlight: true,
    },
    {
      key: "aesthetik",
      titel: "Ästhetik",
      beschreibungKurz: "Für ein strahlendes und schönes Lächeln.",
      beschreibungLang: "Mit modernen ästhetischen Behandlungen wie Bleaching, Veneers und unsichtbaren Zahnkorrekturen sorgen wir für Ihr schönstes Lächeln.",
      bild: "/images/placeholder_aesthetic.jpg",
    },
    {
      key: "implantologie",
      titel: "Implantologie",
      beschreibungKurz: "Feste Zähne für mehr Lebensqualität.",
      beschreibungLang: "Unsere hochwertigen Zahnimplantate bieten Ihnen festen Halt und ein natürliches Gefühl – für mehr Lebensqualität und Sicherheit beim Kauen und Sprechen.",
      bild: "/images/placeholder_implantologie.jpg",
    },
    {
      key: "endodontie",
      titel: "Endodontie",
      beschreibungKurz: "Wurzelkanalbehandlungen zur Zahnerhaltung.",
      beschreibungLang: "Mit modernen Methoden retten wir entzündete Zähne und erhalten Ihre natürliche Zahnsubstanz – schonend und schmerzarm.",
      bild: "/images/placeholder1.jpg",
    },
    {
      key: "kinderzahnheilkunde",
      titel: "Kinderzahnheilkunde",
      beschreibungKurz: "Sanfte Behandlung für unsere kleinen Patienten.",
      beschreibungLang: "Wir nehmen uns Zeit für Kinder und gestalten die Behandlung spielerisch und einfühlsam – für gesunde Kinderzähne von Anfang an.",
      bild: "/images/placeholder_kinderzahn.jpg",
    },
  ];
  const [selected, setSelected] = useState("prophylaxe");

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Header */}
      <header className="px-4 lg:px-6 h-20 flex items-center bg-white border-b">
        <Link href="#" className="flex items-center justify-center text-2xl font-bold text-blue-800">
          Zahnarzt Praxis
        </Link>
        <nav className="ml-auto hidden lg:flex gap-4">
          <Link
            href="#leistungen"
            className="text-base font-medium rounded-md px-6 py-3 flex items-center justify-center hover:underline underline-offset-4 text-gray-700 hover:text-blue-600 transition-all h-12"
            style={{ minHeight: '48px' }}
          >
            Leistungen
          </Link>
          <Link
            href="#team"
            className="text-base font-medium rounded-md px-6 py-3 flex items-center justify-center hover:underline underline-offset-4 text-gray-700 hover:text-blue-600 transition-all h-12"
            style={{ minHeight: '48px' }}
          >
            Team
          </Link>
          <Link
            href="#kontakt"
            className="text-base font-medium bg-blue-700 text-white rounded-md px-6 py-3 flex items-center justify-center shadow hover:bg-blue-800 transition-colors h-12"
            style={{ minHeight: '48px' }}
          >
            Kontakt
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center justify-center mx-auto">
            <div className="space-y-4 text-center lg:text-left mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 text-center lg:text-left">
                Ihr Lächeln ist unsere Leidenschaft
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto lg:mx-0 text-center lg:text-left">
                Moderne Zahnmedizin für die ganze Familie. Wir bieten umfassende Behandlungen in einer entspannten und
                freundlichen Atmosphäre.
              </p>
              <div className="flex flex-col gap-2 sm:flex-row justify-center lg:justify-start mx-auto">
                <Button
                  asChild
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  <Link href="#kontakt">Jetzt Termin vereinbaren &rarr;</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block mx-auto">
              <Image
                src="/images/placeholder1.jpg"
                width={600}
                height={400}
                alt="Happy family at dentist"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Feature Steps Section - Leistungen im Überblick */}
        <section id="leistungen" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
              Unsere Leistungen im Überblick
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center mx-auto">
              {leistungen.map((leistung) => (
                <button
                  key={leistung.key}
                  onClick={() => setSelected(leistung.key)}
                  className={`space-y-2 focus:outline-none transition-colors duration-200 ${selected === leistung.key ? "text-blue-700" : "text-gray-800"}`}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <h3 className={`text-xl font-semibold ${selected === leistung.key ? "text-blue-700" : "text-gray-800"}`}>{leistung.titel}</h3>
                  <p className="text-gray-500 text-sm">{leistung.beschreibungKurz}</p>
                </button>
              ))}
            </div>
            {/* Preview Bereich */}
            <div className="mt-12 flex flex-col items-center justify-center">
              {(() => {
                const leistung = leistungen.find((l) => l.key === selected);
                if (!leistung) return null;
                return (
                  <div
                    key={selected}
                    className="w-full max-w-2xl bg-blue-50 rounded-xl shadow p-8 flex flex-col md:flex-row items-center gap-8 fade-in"
                    style={{ animation: 'fadeIn 0.5s' }}
                  >
                    <img
                      src={leistung.bild}
                      alt={leistung.titel}
                      className="w-full md:w-1/2 rounded-lg object-cover"
                      style={{ maxWidth: 300, minWidth: 200 }}
                    />
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl font-bold text-blue-700 mb-2">{leistung.titel}</h3>
                      <p className="text-gray-700 text-lg">{leistung.beschreibungLang}</p>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* Modern Practice Section */}
        <section id="team" className="w-full py-12 md:py-24 lg:py-32 bg-blue-900 text-white">
          <div className="container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12 items-center justify-center mx-auto">
            <div className="relative w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-lg lg:order-first mx-auto">
              <Image
                src="/images/placeholder_team.jpg"
                width={600}
                height={400}
                alt="Teamfoto der Zahnarztpraxis"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-6 lg:order-last text-center mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center">
              Unser Team – Für Ihr Lächeln
              </h2>
              <p className="max-w-[600px] text-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto text-center">
              Wir sind ein erfahrenes, herzliches Team aus Zahnärzt:innen, Fachpersonal und Verwaltung, das sich mit Leidenschaft für Ihre Zahngesundheit einsetzt. 
              <br />
              <br />
              Unser gemeinsames Ziel: Ihnen ein gesundes, strahlendes Lächeln zu schenken – mit moderner Zahnmedizin und individueller Betreuung.
              <br />
              <br />
              Dabei legen wir großen Wert auf Qualität, Einfühlungsvermögen und eine angenehme Atmosphäre. Ihre Zufriedenheit steht für uns an erster Stelle.              </p>
            </div>
          </div>
        </section>

        {/* Wo wir sind Section */}
        <section id="kontakt" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 mb-12 text-center">
              Wo Sie uns finden
            </h2>
            <div className="flex flex-col md:flex-row gap-12 items-center md:items-center justify-center">
              <div className="relative w-full md:w-1/2 h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/images/placeholder_map.png"
                  width={600}
                  height={400}
                  alt="Map showing dental clinic location"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 space-y-6 text-left">
                <div className="flex items-center gap-3">
                  <MapPinIcon className="h-6 w-6 text-blue-700" />
                  <p className="text-lg text-gray-700">Musterstraße 123, 12345 Musterstadt</p>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="h-6 w-6 text-blue-700" />
                  <p className="text-lg text-gray-700">+49 123 456789</p>
                </div>
                <div className="flex items-center gap-3">
                  <MailIcon className="h-6 w-6 text-blue-700" />
                  <p className="text-lg text-gray-700">info@zahnarztpraxis.de</p>
                </div>
                <div className="space-y-2 mt-6">
                  <h3 className="text-xl font-semibold text-gray-800">Öffnungszeiten:</h3>
                  <ul className="text-gray-600 space-y-1">
                    <li className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-blue-600" />
                      Montag - Freitag: 08:00 - 18:00 Uhr
                    </li>
                    <li className="flex items-center gap-2">
                      <ClockIcon className="h-5 w-5 text-blue-600" />
                      Samstag: Nach Vereinbarung
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Entferne die Section 'Vereinbaren Sie jetzt Ihren Termin' komplett */}
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-100 text-gray-600">
        <p className="text-xs">&copy; 2024 Zahnarzt Praxis. Alle Rechte vorbehalten.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Impressum
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Datenschutz
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4">
            Kontakt
          </Link>
        </nav>
      </footer>
    </div>
  )
}