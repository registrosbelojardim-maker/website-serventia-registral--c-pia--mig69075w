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
  }, [location.pathname, location.hash])

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Instituição', path: '/#sobre' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Localização', path: '/#localizacao' },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : 'bg-white py-5 lg:py-8 shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4 md:gap-8">
          {/* Logo and Sub-text Section */}
          <div className="flex flex-col items-center relative z-10 shrink-0">
            <Link to="/" className="group inline-block">
              <Logo
                className={`transition-all duration-300 group-hover:scale-[1.02] origin-center ${
                  isScrolled
                    ? 'h-[60px] sm:h-[75px] md:h-[90px] lg:h-[100px] w-auto max-w-[200px] sm:max-w-[260px] md:max-w-[320px] lg:max-w-[380px]'
                    : 'h-[120px] sm:h-[160px] md:h-[200px] lg:h-[250px] w-auto max-w-[280px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[620px]'
                }`}
              />
            </Link>
            <p
              className={`text-slate-600 font-medium tracking-tight text-center transition-all duration-300 ${
                isScrolled
                  ? 'text-[9px] sm:text-[10px] md:text-xs mt-1 max-w-[200px] sm:max-w-[260px] md:max-w-[320px] leading-tight'
                  : 'text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 max-w-[260px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[580px] leading-snug'
              }`}
            >
              Registro de Imóveis, Registro de Títulos e Documentos e Registro Civil das Pessoas
              Jurídicas
            </p>
          </div>

          {/* Navigation Section */}
          <div className="flex items-center justify-end flex-1">
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <ul className="flex items-center gap-8">
                {navLinks.map((link) => {
                  const isActive =
                    location.pathname === link.path.split('#')[0] &&
                    (link.path.includes('#')
                      ? location.hash === '#' + link.path.split('#')[1]
                      : location.hash === '')
                  return (
                    <li key={link.path}>
                      <Link
                        to={link.path}
                        className={`text-sm font-bold uppercase tracking-wider transition-colors hover:text-primary ${
                          isActive
                            ? 'text-primary border-b-2 border-primary pb-1'
                            : 'text-slate-600'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </li>
                  )
                })}
              </ul>
              <Button
                asChild
                className="rounded-full shadow-sm hover:shadow-md transition-all h-11 px-7 text-sm font-semibold shrink-0"
              >
                <a href="https://wa.me/5581999990000" target="_blank" rel="noopener noreferrer">
                  Agendar via WhatsApp
                </a>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md transition-colors shrink-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Alternar menu"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl animate-fade-in-down max-h-[calc(100vh-80px)] overflow-y-auto">
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-6">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="block py-3 px-4 rounded-xl text-sm font-bold uppercase tracking-wider text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="w-full h-12 text-base rounded-xl">
              <a href="https://wa.me/5581999990000" target="_blank" rel="noopener noreferrer">
                Agendar via WhatsApp
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
