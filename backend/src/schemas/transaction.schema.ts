import { z } from 'zod'

export const TipoMovimentacaoEnum = z.enum(['ENTRADA', 'SAIDA'])

export const MovimentacaoSchema = z.object({
    tipo: TipoMovimentacaoEnum,
    produtoId: z.string().uuid({ message: 'ID do produto inválido' }),
    tipoMovimentacao: TipoMovimentacaoEnum,
    quantidade: z.coerce.number().min(1, { message: 'Quantidade deve ser maior que 0' }),
    precoUnitario: z.coerce.number().min(0, { message: 'Preço unitário deve ser maior que 0' })
})

export type CreateMovimentacaoDTO = z.infer<typeof MovimentacaoSchema>