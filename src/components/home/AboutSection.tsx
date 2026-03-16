import { CheckCircle2, Scale } from 'lucide-react'

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-white scroll-mt-32">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-navy/5 rounded-3xl transform -translate-x-4 translate-y-4" />
            <img
              src="https://img.usecurling.com/p/800/600?q=classic%20courthouse%20architecture&color=gray"
              alt="Instituição"
              className="relative rounded-3xl object-cover shadow-xl w-full h-[450px]"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden sm:flex items-center gap-5 border border-slate-100 z-10">
              <div className="bg-navy/10 p-4 rounded-xl text-navy">
                <Scale className="w-8 h-8" />
              </div>
              <div>
                <p className="font-bold font-heading text-slate-900 text-lg">Fé Pública</p>
                <p className="text-sm text-slate-500 font-medium">Garantia de Autenticidade</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold font-heading text-navy mb-6 tracking-tight">
              Nossa Instituição
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              A Serventia Registral de Belo Jardim é uma instituição dotada de fé pública, delegada
              pelo Poder Público para garantir a autenticidade, segurança e eficácia dos atos
              jurídicos relativos a bens imóveis, títulos, documentos e pessoas jurídicas.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Atuamos em estrita observância aos princípios legais e às normativas do Conselho
              Nacional de Justiça (CNJ) e do Tribunal de Justiça de Pernambuco (TJPE), buscando
              sempre a modernização dos nossos processos para oferecer um atendimento ágil e
              transparente à população.
            </p>
            <ul className="space-y-4">
              {[
                'Atendimento ágil e desburocratizado',
                'Equipe altamente capacitada e atualizada',
                'Instalações modernas e acessíveis',
                'Estrito cumprimento das normas do CNJ e TJPE',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
