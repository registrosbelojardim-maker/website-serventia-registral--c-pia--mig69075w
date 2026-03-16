import { cn } from '@/lib/utils'
import logoImg from '../assets/logo-belo-jardim_page-0001-1-f1674.jpg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <img
      src={logoImg}
      alt="Logo Oficial da Serventia Registral de Belo Jardim"
      className={cn(
        'object-contain object-center pointer-events-none mix-blend-multiply',
        className,
      )}
    />
  )
}
