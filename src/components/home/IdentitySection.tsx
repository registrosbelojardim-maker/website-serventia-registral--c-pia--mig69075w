import { Leaf, Church, Building2, Factory } from 'lucide-react'

export function IdentitySection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-forest text-white">
      <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=landscape%20nature%20mountains&color=green')] bg-cover bg-center opacity-10 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-b from-forest/90 to-forest/70" />
      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-gold mb-6 tracking-tight">
            A Força e a Fé de Belo Jardim
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Nossa serventia se inspira na rica identidade do nosso município, unindo tradição,
            espiritualidade e o forte potencial de crescimento econômico.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-emerald-500/20 text-emerald-300 rounded-xl flex items-center justify-center mb-6">
              <Leaf className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">Belezas Naturais</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Inspirados pelas ricas paisagens do agreste, valorizamos e preservamos o patrimônio
              local com dedicação.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-gold/20 text-gold rounded-xl flex items-center justify-center mb-6">
              <Church className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">Reino de Jesus</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Guiados pela fé e pelos princípios cristãos, atuamos com retidão, ética e profundo
              respeito ao próximo.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-blue-500/20 text-blue-300 rounded-xl flex items-center justify-center mb-6">
              <Building2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">
              Potencial Imobiliário
            </h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Acompanhamos o desenvolvimento urbano, garantindo a segurança jurídica necessária para
              novos investimentos e moradias.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm hover:bg-white/10 transition-colors">
            <div className="w-12 h-12 bg-slate-500/20 text-slate-300 rounded-xl flex items-center justify-center mb-6">
              <Factory className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-heading text-white mb-3">Polo Industrial</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Apoiamos a vocação manufatureira da cidade, registrando e protegendo as pessoas
              jurídicas que movem nossa economia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
