import type React from "react"
import Image from "next/image"
import { Mail, Phone, Instagram } from "lucide-react"

interface ContactSectionProps {
  contactRef: React.RefObject<HTMLDivElement>
}

export default function ContactSection({ contactRef }: ContactSectionProps) {
  return (
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
  )
}
