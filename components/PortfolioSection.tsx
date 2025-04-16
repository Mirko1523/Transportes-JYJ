import type React from "react"
import Image from "next/image"

interface PortfolioSectionProps {
  portfolioRef: React.RefObject<HTMLDivElement>
}

export default function PortfolioSection({ portfolioRef }: PortfolioSectionProps) {
  return (
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
  )
}
