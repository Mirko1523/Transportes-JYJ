"use client"

import type React from "react"

import Image from "next/image"

interface HeroSectionProps {
  homeRef: React.RefObject<HTMLDivElement>
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void
  servicesRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function HeroSection({ homeRef, scrollToSection, servicesRef, contactRef }: HeroSectionProps) {
  return (
    <section ref={homeRef} className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Especialistas en Transporte de Carga Pesada para todo Chile
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              Ofrecemos soluciones de transporte confiables y seguras para sus necesidades de carga pesada, con equipos
              modernos y personal certificado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollToSection(contactRef)}
                className="bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Solicitar Cotización
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="border border-gray-600 hover:border-gray-500 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Nuestros Servicios
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative h-64 md:h-96 w-full rounded-lg overflow-hidden">
              <Image
                src="/images/home.jpg"
                alt="Transporte de carga pesada"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
