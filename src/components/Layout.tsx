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
      <main className="flex-1 mt-[170px] sm:mt-[200px] md:mt-[230px] lg:mt-[250px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppChat />
      <Toaster />
      <Sonner />
    </div>
  )
}
