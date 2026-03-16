import { Link } from 'react-router-dom'
import { ArrowRight, Building, FileText, BookOpen } from 'lucide-react'

export function ServicesSection() {
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
    <section className="py-20 lg:py-28 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold font-heading text-navy mb-4 tracking-tight">
            Áreas de Atuação
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Oferecemos serviços registrais fundamentais para garantir a segurança jurídica dos seus
            bens e documentos.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-6 group-hover:bg-navy group-hover:text-gold transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-8 leading-relaxed">{service.description}</p>
              <Link
                to={service.link}
                className="inline-flex items-center text-navy font-semibold hover:text-navy/80 transition-colors mt-auto"
              >
                Saber mais{' '}
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
