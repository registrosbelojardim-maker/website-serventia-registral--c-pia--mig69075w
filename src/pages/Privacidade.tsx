import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ShieldAlert } from 'lucide-react'

const lgpdFormSchema = z.object({
  nome: z.string().min(3, 'Nome deve ter no mínimo 3 caracteres'),
  cpf: z.string().min(11, 'CPF inválido'),
  email: z.string().email('E-mail inválido'),
  solicitacao: z.string().min(20, 'Por favor, detalhe sua solicitação (mínimo 20 caracteres)'),
})

export default function Privacidade() {
  const { toast } = useToast()
  const form = useForm<z.infer<typeof lgpdFormSchema>>({
    resolver: zodResolver(lgpdFormSchema),
    defaultValues: {
      nome: '',
      cpf: '',
      email: '',
      solicitacao: '',
    },
  })

  function onSubmit(data: z.infer<typeof lgpdFormSchema>) {
    console.log(data)
    toast({
      title: 'Solicitação enviada com sucesso',
      description: 'O Encarregado de Dados (DPO) analisará seu pedido e responderá em até 15 dias.',
    })
    form.reset()
  }

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8 max-w-5xl">
      <div className="mb-12 border-b pb-8">
        <h1 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">
          Privacidade e LGPD
        </h1>
        <p className="text-lg text-slate-600">
          A Serventia Registral de Belo Jardim está comprometida com a proteção dos seus dados
          pessoais, em conformidade com a Lei nº 13.709/2018 (LGPD) e o Provimento CNJ nº 134/2022.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="prose prose-slate max-w-none">
          <h3 className="font-heading text-xl text-primary font-semibold mt-0">
            Política de Privacidade
          </h3>
          <p className="text-slate-600">
            Os dados pessoais coletados nesta Serventia têm a finalidade estrita de cumprimento de
            obrigação legal e regulatória, exercício regular de direitos e, quando aplicável,
            execução de contrato, não havendo tratamento para fins discriminatórios, ilícitos ou
            abusivos.
          </p>
          <h4 className="font-heading font-semibold text-slate-800">1. Agente de Tratamento</h4>
          <p className="text-slate-600">
            <strong>Controlador:</strong> Alexandre Alliprandino Medeiros, Titular da Serventia
            Registral de Belo Jardim.
          </p>
          <h4 className="font-heading font-semibold text-slate-800">2. Direitos do Titular</h4>
          <ul className="text-slate-600">
            <li>Confirmação da existência de tratamento;</li>
            <li>Acesso aos dados;</li>
            <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
            <li>Anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>
              Portabilidade dos dados a outro fornecedor de serviço, mediante requisição expressa.
            </li>
          </ul>
          <h4 className="font-heading font-semibold text-slate-800">3. Compartilhamento</h4>
          <p className="text-slate-600">
            O compartilhamento de dados ocorre exclusivamente com os órgãos do Poder Judiciário
            (CNJ, TJ PE), centrais eletrônicas obrigatórias (ONR, CRC) e entes governamentais por
            força de lei.
          </p>
        </div>

        <div>
          <Card className="sticky top-28 shadow-lg border-slate-200">
            <CardHeader className="bg-slate-50 border-b rounded-t-xl">
              <div className="flex items-center gap-2 mb-2">
                <ShieldAlert className="h-6 w-6 text-primary" />
                <CardTitle className="font-heading text-xl">Canal do Titular de Dados</CardTitle>
              </div>
              <CardDescription>
                Exerça seus direitos previstos na LGPD. Preencha o formulário abaixo para enviar sua
                solicitação ao nosso Encarregado de Dados (DPO).
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="cpf"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>CPF</FormLabel>
                          <FormControl>
                            <Input placeholder="000.000.000-00" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>E-mail</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="seu@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="solicitacao"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Solicitação (Art. 18 LGPD)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Descreva qual direito deseja exercer ou sua dúvida sobre o tratamento de seus dados..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button type="submit" className="w-full" size="lg">
                    Enviar Solicitação
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
