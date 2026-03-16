import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg',
        'bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-all duration-300 hover:scale-110',
        'flex items-center justify-center',
      )}
      aria-label="Atendimento via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
