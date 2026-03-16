import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Shield } from 'lucide-react'
import { Logo } from '@/components/Logo'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl w-fit border border-white/10">
              <Logo className="w-16 h-16 opacity-95" />
              <div className="flex flex-col">
                <span className="font-bold text-white text-base uppercase leading-tight tracking-wider">
                  Serventia Registral
                </span>
                <span className="font-bold text-slate-300 text-sm uppercase leading-tight">
                  de Belo Jardim
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              A Serventia Registral de Belo Jardim atua prestando serviços essenciais de Registro de
              Imóveis, Registro de Títulos e Documentos e Registro Civil das Pessoas Jurídicas,
              garantindo segurança jurídica e eficácia em todos os atos praticados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Links Rápidos</h3>
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
                    className="text-sm hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-primary/50 group-hover:bg-primary transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Atendimento</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Av. Deputado José Mendonça Bezerra, 255
                  <br />
                  Centro, Belo Jardim - PE
                  <br />
                  CEP: 55150-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(81) 3726-0000 / (81) 99999-0000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>contato@registrosbelojardim.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0" />
                <span>Segunda a Sexta, 08:00 às 17:00</span>
              </li>
            </ul>
          </div>

          {/* Official Seals */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Segurança e Validade</h3>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700/50 flex flex-col items-center text-center gap-4">
              <Shield className="w-10 h-10 text-slate-400" />
              <div>
                <p className="text-sm font-medium text-white mb-1">Fiscalização</p>
                <p className="text-xs text-slate-400">
                  Atos sob fiscalização do Poder Judiciário - Corregedoria Geral da Justiça de
                  Pernambuco (TJPE).
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 text-center md:text-left">
            © {currentYear} Serventia Registral de Belo Jardim. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
