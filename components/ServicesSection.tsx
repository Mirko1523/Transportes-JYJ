import type React from "react"
import { Truck, MapPin, Clock } from "lucide-react"

interface ServicesSectionProps {
  servicesRef: React.RefObject<HTMLDivElement>
}

export default function ServicesSection({ servicesRef }: ServicesSectionProps) {
  return (
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
  )
}
