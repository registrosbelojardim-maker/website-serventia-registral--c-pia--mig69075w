import { MapPin, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function LocationSection() {
  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-navy mb-6 tracking-tight">
              Localização e Atendimento
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Estamos localizados no centro de Belo Jardim, em instalações modernas e acessíveis,
              projetadas para oferecer o melhor e mais seguro atendimento ao cidadão.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-5">
                <div className="bg-navy/10 p-3.5 rounded-xl text-navy mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-slate-900 text-lg mb-1">Endereço</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Praça Floriano Peixoto
                    <br />
                    Centro, Belo Jardim - PE
                    <br />
                    CEP: 55150-010
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="bg-navy/10 p-3.5 rounded-xl text-navy mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold font-heading text-slate-900 text-lg mb-1">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Segunda a Sexta-feira
                    <br />
                    08:00 às 17:00
                    <br />
                    <span className="text-sm font-medium text-slate-500">
                      (Sem intervalo para almoço)
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="mt-10 rounded-full text-base px-8 h-12 bg-navy text-white hover:bg-navy/90"
              asChild
            >
              <a href="https://wa.me/5581999990000" target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </Button>
          </div>

          <div className="h-[400px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-slate-50 relative">
            <img
              src="https://img.usecurling.com/p/800/800?q=map%20location%20pin&color=blue"
              alt="Mapa de Localização"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
