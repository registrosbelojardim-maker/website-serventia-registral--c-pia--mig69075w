import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Logo } from '@/components/Logo'

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location.pathname])

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Tabela de Emolumentos', path: '/emolumentos' },
    { name: 'Contato', path: '/contato' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-2'
          : 'bg-white py-3 lg:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-3 md:gap-6">
          <Link to="/" className="shrink-0 group">
            <Logo
              className={`transition-all duration-300 group-hover:scale-105 ${
                isScrolled
                  ? 'w-[65px] h-[65px] sm:w-[75px] sm:h-[75px] md:w-[85px] md:h-[85px]'
                  : 'w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px]'
              }`}
            />
          </Link>

          <div className="flex flex-col items-end flex-1 justify-center gap-3 lg:gap-5 min-w-0">
            <div className="text-right">
              <h1 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-slate-900 uppercase tracking-tight leading-tight">
                Serventia Registral <br className="sm:hidden" /> de Belo Jardim
              </h1>
              <p className="text-[9px] sm:text-xs md:text-sm text-slate-600 italic font-medium mt-0.5 md:mt-1 leading-snug max-w-[190px] sm:max-w-[300px] md:max-w-[450px] lg:max-w-[650px] ml-auto">
                Registro de Imóveis, Registro de Títulos e Documentos e Registro Civil das Pessoas
                Jurídicas
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-sm font-medium transition-colors hover:text-primary ${
                        location.pathname === link.path
                          ? 'text-primary border-b-2 border-primary pb-1'
                          : 'text-slate-600'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button
                asChild
                className="rounded-full shadow-sm hover:shadow-md transition-all h-9 px-6 text-sm"
              >
                <Link to="/contato">Agendar Atendimento</Link>
              </Button>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors shrink-0 self-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Alternar menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-lg animate-fade-in-down">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`block py-3 px-4 rounded-md text-sm font-medium transition-colors ${
                      location.pathname === link.path
                        ? 'bg-primary/5 text-primary'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-primary'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full mt-2">
              <Link to="/contato">Agendar Atendimento</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
