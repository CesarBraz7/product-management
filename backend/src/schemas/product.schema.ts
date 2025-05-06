import { z } from 'zod'

export const TamanhoEnum = z.enum(['PADRAO', 'PEQUENO', 'MEDIO', 'EXTRA', 'JUMBO'])
export const TipoEnum = z.enum(['BRANCO', 'VERMELHO', 'CODORNA'])

export const ProdutoSchema = z.object({
    nome: z.string().min(1, { message: 'Nome é obrigatório' }),
    tipo: TipoEnum,
    tamanho: TamanhoEnum,
    unidadeMedida: z.string().default('DUZIA'),
    precoCusto: z.coerce.number().min(0, { message: 'Preço de custo deve ser maior que 0' }),
    precoVenda: z.coerce.number().min(0, { message: 'Preço de venda deve ser maior que 0' }),
    estoque: z.coerce.number().min(0, { message: 'Estoque deve ser maior que 0' }),
})

export type CreateProductDTO = z.infer<typeof ProdutoSchema>

export const UpdateProductDTO = ProdutoSchema.partial()
export type UpdateProductDTO = z.infer<typeof UpdateProductDTO>