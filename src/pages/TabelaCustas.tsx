import { Button } from '@/components/ui/button'
import { Download, FileSpreadsheet } from 'lucide-react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export default function TabelaCustas() {
  const emolumentos = [
    { id: 1, ato: 'Certidão de Ônus Reais', valor: 'R$ 75,40' },
    { id: 2, ato: 'Certidão de Inteiro Teor da Matrícula', valor: 'R$ 75,40' },
    { id: 3, ato: 'Registro de Imóvel (Valor Declarado até R$ 50.000)', valor: 'R$ 380,50' },
    { id: 4, ato: 'Registro de Imóvel (Valor Declarado até R$ 100.000)', valor: 'R$ 650,20' },
    { id: 5, ato: 'Averbação com valor declarado (até R$ 50.000)', valor: 'R$ 150,00' },
    { id: 6, ato: 'Averbação sem valor declarado', valor: 'R$ 85,30' },
  ]

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b pb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
            Tabela de Custas e Emolumentos
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl">
            Valores oficiais estabelecidos pelo Tribunal de Justiça do Estado de Pernambuco (TJ PE)
            para a prática de atos extrajudiciais.
          </p>
        </div>
        <Button size="lg" className="shrink-0 flex items-center gap-2 shadow-md">
          <Download className="h-4 w-4" />
          Baixar PDF Atualizado
        </Button>
      </div>

      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 bg-slate-50 border-b flex items-center gap-3">
          <FileSpreadsheet className="h-6 w-6 text-primary" />
          <h2 className="text-xl font-heading font-semibold text-slate-800">
            Tabela Resumida - Vigência Atual
          </h2>
        </div>

        <Table>
          <TableCaption className="pb-4 pt-4 text-slate-500">
            Valores sujeitos a alteração conforme provimentos do TJ PE.
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-slate-100/50 hover:bg-slate-100/50">
              <TableHead className="w-[100px] font-semibold text-slate-700">Código</TableHead>
              <TableHead className="font-semibold text-slate-700">Descrição do Ato</TableHead>
              <TableHead className="text-right font-semibold text-slate-700">Valor (R$)</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {emolumentos.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="font-medium text-slate-500">
                  {item.id.toString().padStart(4, '0')}
                </TableCell>
                <TableCell className="text-slate-800">{item.ato}</TableCell>
                <TableCell className="text-right font-medium text-slate-900">
                  {item.valor}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-8 p-5 bg-yellow-50 text-yellow-800 rounded-lg text-sm border border-yellow-200 leading-relaxed">
        <strong className="block mb-1 text-yellow-900">Nota Explicativa:</strong> Os valores
        integrais incluem os repasses aos fundos institucionais determinados por lei (Fundo de
        Reaparelhamento do Judiciário, entre outros). Para consultar a tabela integral e detalhada
        com as notas explicativas, faça o download do documento oficial.
      </div>
    </div>
  )
}
