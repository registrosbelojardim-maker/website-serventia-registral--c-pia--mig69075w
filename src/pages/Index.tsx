import { Link } from 'react-router-dom'
import { ArrowRight, Building, FileText, CheckCircle2, Shield, Clock, BookOpen } from 'lucide-react'
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
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-[url('https://img.usecurling.com/p/1920/1080?q=modern%20architecture%20office&color=gray')] bg-cover bg-center opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in-up">
              <Shield className="w-4 h-4" />
              <span>Segurança Jurídica e Fé Pública</span>
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-tight mb-6 animate-fade-in-up"
              style={{ animationDelay: '100ms' }}
            >
              Tradição e Modernidade <br className="hidden md:block" /> em Belo Jardim
            </h1>
            <p
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '200ms' }}
            >
              Serviços oficiais de Registro de Imóveis, Registro de Títulos e Documentos e Registro
              Civil das Pessoas Jurídicas com excelência e agilidade.
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
                className="w-full sm:w-auto text-base rounded-full"
                asChild
              >
                <Link to="/contato">Agendar Atendimento</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Áreas de Atuação</h2>
            <p className="text-slate-600 text-lg">
              Oferecemos serviços registrais fundamentais para garantir a segurança jurídica dos
              seus bens e documentos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-primary/5 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to={service.link}
                  className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Saber mais{' '}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Compromisso com a Excelência e Transparência
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Nossa serventia está comprometida em prestar um serviço público de qualidade, unindo
                o rigor técnico da lei com a modernidade tecnológica, visando sempre o melhor
                atendimento ao cidadão de Belo Jardim.
              </p>

              <ul className="space-y-4">
                {[
                  'Atendimento ágil e desburocratizado',
                  'Equipe altamente capacitada e atualizada',
                  'Instalações modernas e acessíveis',
                  'Estrito cumprimento das normas do CNJ e TJPE',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary" />
                    <span className="text-slate-200">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform translate-x-4 translate-y-4" />
              <img
                src="https://img.usecurling.com/p/800/600?q=modern%20clean%20office%20desk&color=blue"
                alt="Escritório moderno da Serventia"
                className="relative rounded-2xl object-cover shadow-2xl w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-6 rounded-xl shadow-xl flex items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full text-primary">
                  <Clock className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                    Atendimento
                  </p>
                  <p className="font-bold text-lg">Seg - Sex, 08h às 17h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
