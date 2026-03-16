import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ShieldCheck, Search, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Autenticidade() {
  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-4xl">
      <div className="text-center mb-12">
        <div className="mx-auto bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck className="h-10 w-10 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
          Autenticidade de Documentos
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Valide a autenticidade de certidões e atos praticados utilizando o Selo Digital de
          Fiscalização do TJ PE.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="shadow-md border-slate-200">
          <CardHeader className="bg-slate-50 border-b">
            <CardTitle className="font-heading text-xl">Consulta Rápida</CardTitle>
            <CardDescription>
              Insira o código alfanumérico do selo impresso no seu documento.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 pt-6">
            <div className="space-y-2">
              <Label htmlFor="selo">Código do Selo Digital</Label>
              <Input
                id="selo"
                placeholder="Ex: ABC12345-DEF"
                className="font-mono uppercase text-lg tracking-widest"
              />
            </div>
            <Button className="w-full flex items-center gap-2" size="lg">
              <Search className="h-4 w-4" /> Consultar Autenticidade
            </Button>
            <p className="text-xs text-slate-500 text-center">
              *A validação é realizada diretamente no sistema do Tribunal de Justiça de Pernambuco.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-slate-50 border-dashed border-2 border-slate-300 flex flex-col">
          <CardHeader>
            <CardTitle className="font-heading text-xl">Portal do TJ PE</CardTitle>
            <CardDescription>
              Acesse o portal oficial do Tribunal para consultas avançadas.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-center flex-1">
            <p className="text-sm text-slate-600 mb-8 leading-relaxed">
              O Selo Digital de Fiscalização Eletrônica garante a publicidade, autenticidade,
              segurança e eficácia dos atos jurídicos extrajudiciais, prevenindo fraudes e
              falsificações.
            </p>
            <Button
              variant="outline"
              className="w-full flex items-center gap-2 bg-white"
              size="lg"
              asChild
            >
              <a
                href="https://www.tjpe.jus.br/selo-digital"
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar Portal do Selo <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
