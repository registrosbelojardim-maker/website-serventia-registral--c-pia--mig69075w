import { cn } from '@/lib/utils'
import logoImg from '../assets/logo-belo-jardim_page-0001-1-f1674.jpg'

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden flex-shrink-0 flex items-center justify-center rounded-full bg-white shadow-lg border-[3px] border-white',
        className,
      )}
    >
      {/* Scaling the image inside an overflow-hidden container isolates the central icon and removes surrounding text */}
      <img
        src={logoImg}
        alt="Ícone Oficial da Serventia Registral de Belo Jardim"
        className="w-full h-full object-cover scale-[1.65] object-center pointer-events-none mix-blend-multiply"
      />
    </div>
  )
}
