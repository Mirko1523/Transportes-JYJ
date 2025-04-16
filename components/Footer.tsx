import Image from "next/image"
import { Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center">
            <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center overflow-hidden mr-3">
              <div className="h-11 w-11 relative">
                <Image src="/images/logo.png" alt="Transportes JYJ Logo" fill sizes="44px" className="object-contain" />
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
          <a href="https://www.instagram.com/_mkmagency/">
            <p>created with Mkm Agency.</p>
          </a>
        </div>
      </div>
    </footer>
  )
}
