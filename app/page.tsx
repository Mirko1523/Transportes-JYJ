"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Menu, X, Phone, Mail, Instagram, Truck, MapPin, Clock } from "lucide-react"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const homeRef = useRef<HTMLDivElement>(null)
  const servicesRef = useRef<HTMLDivElement>(null)
  const portfolioRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

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

  const scrollToSection = (sectionRef: React.RefObject<HTMLDivElement | null>) => {
      setIsMenuOpen(false)
      sectionRef.current?.scrollIntoView({ behavior: "smooth" })
    }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/56985033753"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl"
        aria-label="Contactar por WhatsApp"
      >
        <div className="relative h-10 w-10">
          <Image src="/images/whatsapp.png" alt="WhatsApp" fill sizes="40px" className="object-contain" />
        </div>
      </a>

      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center overflow-hidden mr-2">
                <div className="h-9 w-9 relative">
                  <Image
                    src="/images/logo.png"
                    alt="Transportes JYJ Logo"
                    fill
                    sizes="36px"
                    className="object-contain"
                  />
                </div>
              </div>
              <span className="text-xl font-bold text-white">Transportes JYJ</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection(homeRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "home" ? "text-white" : "text-gray-400"}`}
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "services" ? "text-white" : "text-gray-400"}`}
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection(portfolioRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "portfolio" ? "text-white" : "text-gray-400"}`}
              >
                Portafolio
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "contact" ? "text-white" : "text-gray-400"}`}
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
                  onClick={() => scrollToSection(homeRef)}
                  className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "home" ? "text-white" : "text-gray-400"}`}
                >
                  Inicio
                </button>
                <button
                  onClick={() => scrollToSection(servicesRef)}
                  className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "services" ? "text-white" : "text-gray-400"}`}
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection(portfolioRef)}
                  className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "portfolio" ? "text-white" : "text-gray-400"}`}
                >
                  Portafolio
                </button>
                <button
                  onClick={() => scrollToSection(contactRef)}
                  className={`text-sm font-medium hover:text-white transition-colors ${activeSection === "contact" ? "text-white" : "text-gray-400"}`}
                >
                  Contacto
                </button>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section ref={homeRef} className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                Especialistas en Transporte de Carga Pesada
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Ofrecemos soluciones de transporte confiables y seguras para sus necesidades de carga pesada, con
                equipos modernos y personal certificado.
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
                  src="/images/proyecto1.jpg"
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

      {/* Services Section */}
      <section ref={servicesRef} className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestros Servicios</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ofrecemos una amplia gama de servicios de transporte especializado para satisfacer sus necesidades
              logísticas más exigentes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-yellow-600 transition-colors">
              <div className="bg-yellow-600/20 p-3 rounded-full w-fit mb-4">
                <Truck className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Transporte de Carga Pesada</h3>
              <p className="text-gray-300">
                Especialistas en el transporte de maquinaria pesada, equipos industriales y cargas de gran volumen.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-yellow-600 transition-colors">
              <div className="bg-yellow-600/20 p-3 rounded-full w-fit mb-4">
                <MapPin className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Servicios de Grúas</h3>
              <p className="text-gray-300">
                Contamos con grúas de diferentes capacidades para el izaje y movimiento de cargas en sitios de
                construcción e industriales.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 hover:border-yellow-600 transition-colors">
              <div className="bg-yellow-600/20 p-3 rounded-full w-fit mb-4">
                <Clock className="h-6 w-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Logística Especializada</h3>
              <p className="text-gray-300">
                Planificación y ejecución de operaciones logísticas complejas, incluyendo permisos especiales y estudios
                de ruta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Nuestro Portafolio</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Conozca algunos de nuestros proyectos más destacados y la calidad de nuestro trabajo.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/proyecto1.jpg"
                  alt="Proyecto 1"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Proyecto 1</h3>
                  <p className="text-gray-200 text-sm">Transporte de módulos prefabricados</p>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/proyecto2.jpg"
                  alt="Proyecto 2"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Proyecto 2</h3>
                  <p className="text-gray-200 text-sm">Servicios de grúa para carga pesada</p>
                </div>
              </div>
            </div>
            <div className="aspect-square rounded-lg overflow-hidden group relative">
              <div className="absolute inset-0">
                <Image
                  src="/images/proyecto3.jpg"
                  alt="Proyecto 3"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="text-center p-4">
                  <h3 className="text-xl font-semibold text-white mb-2">Proyecto 3</h3>
                  <p className="text-gray-200 text-sm">Transporte de carga especial por carretera</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Contáctenos</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Estamos listos para ayudarle con sus necesidades de transporte. Complete el formulario y nos pondremos en
              contacto con usted a la brevedad.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Formulario de Contacto</h3>

              <form className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-1">
                    Nombre y Apellido *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-white"
                    placeholder="Ingrese su nombre completo"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-white"
                    placeholder="Ingrese su correo electrónico"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Número de Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-white"
                    placeholder="Ingrese su número de teléfono"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:border-transparent text-white"
                    placeholder="Describa su consulta o requerimiento"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
                >
                  Enviar Mensaje
                </button>
              </form>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold mb-6 text-white">Información de Contacto</h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-yellow-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Correo Electrónico</p>
                    <a
                      href="mailto:operaciones@transportesjyj.cl"
                      className="text-white hover:text-yellow-500 transition-colors"
                    >
                      operaciones@transportesjyj.cl
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-yellow-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Teléfono</p>
                    <a href="tel:+56985033753" className="text-white hover:text-yellow-500 transition-colors">
                      +56 9 8503 3753
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <Instagram className="h-5 w-5 text-yellow-500 mt-1 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-gray-300">Instagram</p>
                    <a
                      href="https://www.instagram.com/operacionesgruasjyj/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500 transition-colors"
                    >
                      @operacionesgruasjyj
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-5 w-5 mt-1 mr-3 relative">
                    <Image src="/images/whatsapp.png" alt="WhatsApp" fill sizes="20px" className="object-contain" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-300">WhatsApp</p>
                    <a
                      href="https://wa.me/56985033753"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-500 transition-colors"
                    >
                      +56 9 8503 3753
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4 text-white">Horario de Atención</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden mr-3">
                <div className="h-11 w-11 relative">
                  <Image
                    src="/images/logo.png"
                    alt="Transportes JYJ Logo"
                    fill
                    sizes="44px"
                    className="object-contain"
                  />
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-white">Transportes JYJ</span>
                <p className="text-gray-400 mt-2">Especialistas en transporte de carga pesada</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://www.instagram.com/operacionesgruasjyj/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="https://wa.me/56985033753"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <div className="relative h-6 w-6">
                  <Image src="/images/whatsapp.png" alt="WhatsApp" fill sizes="24px" className="object-contain" />
                </div>
                <span className="sr-only">WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Transportes JYJ. Todos los derechos reservados.</p>
             <a
             href= "https://www.instagram.com/_mkmagency/"
             >

             <p>created with Mkm Agency.</p>
             </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
