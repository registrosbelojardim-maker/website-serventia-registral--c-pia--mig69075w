import { Building, FileText, BookOpen, FileCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Servicos() {
  const services = [
    {
      id: 'imoveis',
      title: 'Registro de Imóveis',
      icon: <Building className="w-8 h-8" />,
      description:
        'O Registro de Imóveis é essencial para garantir o direito de propriedade e assegurar a publicidade e segurança dos negócios imobiliários.',
      features: [
        'Matrícula de Imóveis',
        'Registro de Compra e Venda',
        'Registro de Hipotecas e Alienação Fiduciária',
        'Averbação de Construção e Demolição',
        'Loteamentos e Incorporações',
        'Usucapião Extrajudicial',
      ],
    },
    {
      id: 'titulos',
      title: 'Registro de Títulos e Documentos',
      icon: <FileText className="w-8 h-8" />,
      description:
        'Garante publicidade, conservação e autenticidade para documentos variados, tornando-os válidos perante terceiros (erga omnes).',
      features: [
        'Registro de Contratos em Geral',
        'Notificações Extrajudiciais',
        'Conservação de Documentos',
        'Registro de Contratos de Locação',
        'Registro de Atas e Recibos',
        'Microfilmagem e Digitalização Oficial',
      ],
    },
    {
      id: 'pessoas-juridicas',
      title: 'Registro Civil de Pessoas Jurídicas',
      icon: <BookOpen className="w-8 h-8" />,
      description:
        'Responsável pelo registro dos atos constitutivos de entidades, garantindo sua personalidade jurídica e regularidade legal.',
      features: [
        'Registro de Associações',
        'Registro de Fundações',
        'Sociedades Simples',
        'Organizações Religiosas',
        'Averbação de Atas e Estatutos',
        'Certidões de Regularidade',
      ],
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-slate-50 py-16 lg:py-24 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Nossos Serviços Registrais
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Atuamos com estrito rigor técnico e agilidade para garantir a segurança jurídica de
              seus bens e documentos, com competência nas áreas de Imóveis, Títulos e Documentos e
              Pessoas Jurídicas.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={`flex flex-col ${
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                } gap-12 lg:gap-20 items-center scroll-mt-32`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                    {service.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                    <h3 className="font-semibold text-slate-900 mb-6 uppercase text-sm tracking-wider">
                      Principais Atos
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-4">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600">
                          <FileCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm font-medium leading-tight">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] border-[6px] border-slate-50">
                    <img
                      src={`https://img.usecurling.com/p/800/600?q=${encodeURIComponent(
                        service.title.split(' ')[2] + ' office document',
                      )}&color=gray`}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent flex flex-col justify-end p-8 md:p-10">
                      <Button
                        asChild
                        variant="default"
                        size="lg"
                        className="w-fit bg-white text-slate-900 hover:bg-slate-100 rounded-full font-semibold px-8"
                      >
                        <a
                          href="https://wa.me/5581999990000"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Solicitar {service.title}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6 tracking-tight">
            Precisa de informações sobre custas ou certidões?
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Nossa equipe está preparada para orientá-lo sobre procedimentos, documentação necessária
            e valores de emolumentos tabelados.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              variant="secondary"
              className="rounded-full px-8 h-14 text-base"
              asChild
            >
              <a href="https://wa.me/5581999990000" target="_blank" rel="noopener noreferrer">
                Falar com Atendimento
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
