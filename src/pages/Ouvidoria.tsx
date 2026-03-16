import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { MessageSquare, ThumbsUp, AlertCircle, Info } from 'lucide-react'

const ouvidoriaFormSchema = z.object({
  tipo: z.string().min(1, 'Selecione o tipo de manifestação'),
  nome: z.string().optional(),
  contato: z.string().optional(),
  mensagem: z.string().min(10, 'A mensagem deve conter ao menos 10 caracteres'),
})

export default function Ouvidoria() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof ouvidoriaFormSchema>>({
    resolver: zodResolver(ouvidoriaFormSchema),
    defaultValues: {
      tipo: '',
      nome: '',
      contato: '',
      mensagem: '',
    },
  })

  function onSubmit(data: z.infer<typeof ouvidoriaFormSchema>) {
    console.log(data)
    const protocolo = `OUV-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, '0')}/${new Date().getFullYear()}`
    toast({
      title: 'Manifestação registrada',
      description: `Sua manifestação foi recebida com sucesso. Protocolo: ${protocolo}`,
    })
    form.reset()
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-3xl">
      <div className="text-center mb-10">
        <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4">
          <MessageSquare className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
          Ouvidoria Interna
        </h1>
        <p className="text-lg text-slate-600">
          Este é o seu canal direto para enviar reclamações, sugestões, elogios ou tirar dúvidas
          sobre o atendimento da Serventia.
        </p>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="tipo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Manifestação *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo..." />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="reclamacao">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="h-4 w-4 text-red-500" /> Reclamação
                        </div>
                      </SelectItem>
                      <SelectItem value="sugestao">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="h-4 w-4 text-blue-500" /> Sugestão
                        </div>
                      </SelectItem>
                      <SelectItem value="elogio">
                        <div className="flex items-center gap-2">
                          <ThumbsUp className="h-4 w-4 text-green-500" /> Elogio
                        </div>
                      </SelectItem>
                      <SelectItem value="duvida">
                        <div className="flex items-center gap-2">
                          <Info className="h-4 w-4 text-amber-500" /> Dúvida
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome (Opcional - Pode ser anônimo)</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contato"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-mail ou Telefone (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Para recebermos retorno" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mensagem *</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva sua manifestação com o máximo de detalhes..."
                      className="min-h-[150px] resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex justify-end pt-4 border-t border-slate-100 mt-6">
              <Button type="submit" size="lg" className="w-full md:w-auto">
                Enviar Manifestação
              </Button>
            </div>
          </form>
        </Form>
      </div>

      <div className="mt-8 text-center text-sm text-slate-500 max-w-2xl mx-auto">
        <p>
          Caso prefira, você também pode acionar a Corregedoria-Geral de Justiça do Estado de
          Pernambuco (TJ PE) através dos canais oficiais listados no rodapé da página.
        </p>
      </div>
    </div>
  )
}
