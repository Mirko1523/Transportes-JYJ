"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  activeSection: string
  scrollToSection: (sectionRef: React.RefObject<HTMLDivElement>) => void
  homeRef: React.RefObject<HTMLDivElement>
  servicesRef: React.RefObject<HTMLDivElement>
  portfolioRef: React.RefObject<HTMLDivElement>
  contactRef: React.RefObject<HTMLDivElement>
}

export default function Navbar({
  activeSection,
  scrollToSection,
  homeRef,
  servicesRef,
  portfolioRef,
  contactRef,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    setIsMenuOpen(false)
    scrollToSection(sectionRef)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden mr-2">
              <div className="h-9 w-9 relative">
                <Image src="/images/logo.png" alt="Transportes JYJ Logo" fill sizes="36px" className="object-contain" />
              </div>
            </div>
            <span className="text-xl font-bold text-white">Transportes JYJ</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => handleScrollToSection(homeRef)}
              className={`text-sm font-medium hover:text-white transition-colors ${
                activeSection === "home" ? "text-white" : "text-gray-400"
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => handleScrollToSection(servicesRef)}
              className={`text-sm font-medium hover:text-white transition-colors ${
                activeSection === "services" ? "text-white" : "text-gray-400"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => handleScrollToSection(portfolioRef)}
              className={`text-sm font-medium hover:text-white transition-colors ${
                activeSection === "portfolio" ? "text-white" : "text-gray-400"
              }`}
            >
              Portafolio
            </button>
            <button
              onClick={() => handleScrollToSection(contactRef)}
              className={`text-sm font-medium hover:text-white transition-colors ${
                activeSection === "contact" ? "text-white" : "text-gray-400"
              }`}
            >
              Contacto
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 border-b border-gray-700">
          <div className="container mx-auto px-4 py-2">
            <nav className="flex flex-col space-y-4 py-4">
              <button
                onClick={() => handleScrollToSection(homeRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${
                  activeSection === "home" ? "text-white" : "text-gray-400"
                }`}
              >
                Inicio
              </button>
              <button
                onClick={() => handleScrollToSection(servicesRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${
                  activeSection === "services" ? "text-white" : "text-gray-400"
                }`}
              >
                Servicios
              </button>
              <button
                onClick={() => handleScrollToSection(portfolioRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${
                  activeSection === "portfolio" ? "text-white" : "text-gray-400"
                }`}
              >
                Portafolio
              </button>
              <button
                onClick={() => handleScrollToSection(contactRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${
                  activeSection === "contact" ? "text-white" : "text-gray-400"
                }`}
              >
                Contacto
              </button>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
