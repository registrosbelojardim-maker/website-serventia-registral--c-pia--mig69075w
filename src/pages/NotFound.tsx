import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-heading font-bold text-primary mb-4 drop-shadow-sm">404</h1>
      <h2 className="text-2xl font-semibold text-slate-800 mb-6 font-heading">
        Página não encontrada
      </h2>
      <p className="text-slate-600 max-w-md mb-8">
        Desculpe, a página que você está procurando não existe, foi movida ou está temporariamente
        indisponível.
      </p>
      <Button asChild size="lg">
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  )
}
