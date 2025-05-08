import { CreateProductDTO } from "../schemas/product.schema";

export function validateProduct(product: CreateProductDTO) {

    if (!product.precoCusto || product.precoCusto <= 0) {
        throw new Error("preço de custo do produto deve ser um número positivo.")
    }

    if (!product.precoVenda || product.precoVenda <= product.precoCusto) {
        throw new Error("preço de venda do produto deve ser maior que o preço de custo.")
    }

}