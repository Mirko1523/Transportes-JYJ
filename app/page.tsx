"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"

// Import components

import Footer from "@/components/Footer"
import WhatsAppButton from "@/components/WhatsAppButton"
import Navbar from "@/components/Navbar"
import HeroSection from "@/components/HeroSection"
import ServicesSection from "@/components/ServicesSection"
import PortfolioSection from "@/components/PortfolioSection"
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

 const homeRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
 const servicesRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
 const portfolioRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>
 const contactRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      const sections = [
        { id: "home", ref: homeRef },
        { id: "services", ref: servicesRef },
        { id: "portfolio", ref: portfolioRef },
        { id: "contact", ref: contactRef },
      ]

      for (const section of sections) {
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop
          const offsetHeight = section.ref.current.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <WhatsAppButton />

      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        servicesRef={servicesRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
      />

      <HeroSection
        homeRef={homeRef}
        scrollToSection={scrollToSection}
        servicesRef={servicesRef}
        contactRef={contactRef}
      />

      <ServicesSection servicesRef={servicesRef} />

      <PortfolioSection portfolioRef={portfolioRef} />

      <ContactSection contactRef={contactRef} />

      <Footer />
    </div>
  )
}
