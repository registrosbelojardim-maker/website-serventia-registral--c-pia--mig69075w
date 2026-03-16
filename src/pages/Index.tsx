import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Building,
  FileText,
  CheckCircle2,
  Shield,
  Clock,
  BookOpen,
  MapPin,
  Scale,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Index() {
  const services = [
    {
      title: 'Registro de Imóveis',
      description:
        'Garantia de propriedade, segurança jurídica e publicidade dos atos relativos a bens imóveis em nossa jurisdição.',
      icon: <Building className="w-6 h-6" />,
      link: '/servicos#imoveis',
    },
    {
      title: 'Registro de Títulos e Documentos',
      description:
        'Conservação, validade contra terceiros e data certa para qualquer documento, garantindo sua perpetuidade.',
      icon: <FileText className="w-6 h-6" />,
      link: '/servicos#titulos',
    },
    {
      title: 'Registro Civil de Pessoas Jurídicas',
      description:
        'Constituição, alteração e extinção de associações, fundações, sociedades simples e organizações religiosas.',
      icon: <BookOpen className="w-6 h-6" />,
      link: '/servicos#pessoas-juridicas',
    },
  ]

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=law%20library%20books&color=black')] bg-cover bg-center opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 to-slate-900/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm mb-8 animate-fade-in-up border border-white/20 backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>Segurança Jurídica e Fé Pública</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 animate-fade-in-up"
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
              <Button size="lg" className="w-full sm:w-auto text-base rounded-full" asChild>
                <Link to="/servicos">Conhecer Serviços</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base rounded-full border-white text-white hover:bg-white hover:text-slate-900"
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

      {/* About Section */}
      <section id="sobre" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform -translate-x-4 translate-y-4" />
              <img
                src="https://img.usecurling.com/p/800/600?q=classic%20courthouse%20architecture&color=gray"
                alt="Instituição"
                className="relative rounded-3xl object-cover shadow-xl w-full h-[450px]"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl hidden sm:flex items-center gap-5 border border-slate-100 z-10">
                <div className="bg-primary/10 p-4 rounded-xl text-primary">
                  <Scale className="w-8 h-8" />
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg">Fé Pública</p>
                  <p className="text-sm text-slate-500 font-medium">Garantia de Autenticidade</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Nossa Instituição
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                A Serventia Registral de Belo Jardim é uma instituição dotada de fé pública,
                delegada pelo Poder Público para garantir a autenticidade, segurança e eficácia dos
                atos jurídicos relativos a bens imóveis, títulos, documentos e pessoas jurídicas.
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
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Áreas de Atuação
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Oferecemos serviços registrais fundamentais para garantir a segurança jurídica dos
              seus bens e documentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors mt-auto"
                >
                  Saber mais{' '}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="localizacao" className="py-20 lg:py-28 bg-white scroll-mt-32">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                Localização e Atendimento
              </h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                Estamos localizados no centro de Belo Jardim, em instalações modernas e acessíveis,
                projetadas para oferecer o melhor e mais seguro atendimento ao cidadão.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3.5 rounded-xl text-primary mt-1">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Endereço</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Av. Deputado José Mendonça Bezerra, 255
                      <br />
                      Centro, Belo Jardim - PE
                      <br />
                      CEP: 55150-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="bg-primary/10 p-3.5 rounded-xl text-primary mt-1">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">
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

              <Button size="lg" className="mt-10 rounded-full text-base px-8 h-12" asChild>
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
    </div>
  )
}
