import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react'
import { Logo } from '@/components/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl w-fit border border-gold/20">
              <div className="bg-white p-2 rounded-lg flex shrink-0 items-center justify-center">
                <Logo className="h-12 w-auto mix-blend-normal" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-white text-base uppercase leading-tight tracking-wider font-heading">
                  Serventia Registral
                </span>
                <span className="font-bold text-gold text-sm uppercase leading-tight font-heading">
                  de Belo Jardim
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              A Serventia Registral de Belo Jardim atua prestando serviços essenciais de Registro de
              Imóveis, Registro de Títulos e Documentos e Registro Civil das Pessoas Jurídicas,
              garantindo segurança jurídica e eficácia em todos os atos praticados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold font-heading text-lg mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              {[
                { name: 'Página Inicial', path: '/' },
                { name: 'Nossa Instituição', path: '/#sobre' },
                { name: 'Nossos Serviços', path: '/servicos' },
                { name: 'Localização e Contato', path: '/#localizacao' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm hover:text-gold transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold/50 group-hover:bg-gold transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold font-heading text-lg mb-6">Atendimento</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" />
                <span>
                  Praça Floriano Peixoto
                  <br />
                  Centro, Belo Jardim - PE
                  <br />
                  CEP: 55150-010
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold shrink-0" />
                <span>(81) 3726-0000 / (81) 99999-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold shrink-0" />
                <span>contato@registrosbelojardim.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-gold shrink-0" />
                <span>Segunda a Sexta, 08:00 às 17:00</span>
              </li>
            </ul>
          </div>

          {/* Official Seals */}
          <div>
            <h3 className="text-white font-semibold font-heading text-lg mb-6">
              Segurança e Validade
            </h3>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center gap-4">
              <Shield className="w-10 h-10 text-gold" />
              <div>
                <p className="text-sm font-medium text-white mb-1 font-heading">Fiscalização</p>
                <p className="text-xs text-slate-300">
                  Atos sob fiscalização do Poder Judiciário - Corregedoria Geral da Justiça de
                  Pernambuco (TJPE).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 text-center md:text-left">
            © {currentYear} Serventia Registral de Belo Jardim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
