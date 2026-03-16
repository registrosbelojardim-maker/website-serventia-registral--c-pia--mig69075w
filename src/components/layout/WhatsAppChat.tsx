import { MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function WhatsAppChat() {
  return (
    <a
      href="https://wa.me/5581999990000"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl',
        'bg-[#25D366] hover:bg-[#1ebe5d] text-white transition-all duration-300 hover:scale-110',
        'flex items-center justify-center group',
      )}
      aria-label="Atendimento via WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
      <span className="absolute right-full mr-4 bg-white text-slate-800 text-sm font-semibold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-slate-100">
        Fale conosco via WhatsApp
      </span>
    </a>
  )
}
