import { Outlet } from 'react-router-dom'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import WhatsAppChat from '@/components/layout/WhatsAppChat'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-slate-50">
      <Header />
      <div className="flex-1 mt-[105px] md:mt-[145px] lg:mt-[170px]">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppChat />
      <Toaster />
      <Sonner />
    </div>
  )
}
