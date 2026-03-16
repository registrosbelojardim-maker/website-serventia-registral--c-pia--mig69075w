import { Link } from 'react-router-dom'
import { Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=law%20library%20books&color=black')] bg-cover bg-center opacity-30 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 to-navy/70" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 text-gold font-medium text-sm mb-8 animate-fade-in-up border border-gold/20 backdrop-blur-sm">
            <Shield className="w-4 h-4" />
            <span>Segurança Jurídica e Fé Pública</span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 animate-fade-in-up font-heading"
            style={{ animationDelay: '100ms' }}
          >
            Tradição e Modernidade <br className="hidden md:block" /> em Belo Jardim
          </h1>
          <p
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed animate-fade-in-up max-w-2xl mx-auto"
            style={{ animationDelay: '200ms' }}
          >
            Serviços oficiais de Registro de Imóveis, Registro de Títulos e Documentos e Registro
            Civil das Pessoas Jurídicas com excelência e estrito cumprimento das normas do CNJ e
            TJPE.
          </p>
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: '300ms' }}
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base rounded-full bg-gold text-navy hover:bg-gold/90 font-semibold"
              asChild
            >
              <Link to="/servicos">Conhecer Serviços</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base rounded-full border-gold text-gold hover:bg-gold hover:text-navy font-semibold"
              asChild
            >
              <a href="https://wa.me/5581999990000" target="_blank" rel="noopener noreferrer">
                Agendar Atendimento
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
