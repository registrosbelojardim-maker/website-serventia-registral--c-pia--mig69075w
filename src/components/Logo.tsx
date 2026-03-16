import { cn } from '@/lib/utils'
import logoImg from '../assets/logo-belo-jardim_page-0001-1-f1674.jpg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'relative mix-blend-multiply flex-shrink-0 flex items-center justify-center',
        className,
      )}
    >
      <img
        src={logoImg}
        alt="Emblema Oficial da Serventia Registral de Belo Jardim"
        className="w-full h-full object-contain pointer-events-none"
        style={{ aspectRatio: 'auto' }}
      />
    </div>
  )
}
