import Image from "next/image"

export default function WhatsAppButton() {
  return (
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
  )
}
