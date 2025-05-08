import * as productRepository from '../repositories/product.repository';
import { CreateProductDTO, UpdateProductDTO } from '../schemas/product.schema';
import { validateProduct } from '../utils/validateProduct';

export const getAll = async () => {
    const products = await productRepository.findAll()
    
    if (products.length === 0) {
        throw new Error('nenhum produto encontrado')
    }

    return products
}

export const create = async (product: CreateProductDTO) => {
    validateProduct(product)

    const existingProduct = await productRepository.findByName(product.nome)

    if (existingProduct) {
        throw new Error('este produto já existe')
    }

    return await productRepository.create(product)
}

export const getById = async (id: string) => {
    const product = await productRepository.findById(id)

    if (!product) {
        throw new Error('produto não encontrado')
    }

    return product
}

export const update = async (id: string, product: UpdateProductDTO) => {
    const existingProduct = await productRepository.findById(id)
    
    if (!existingProduct) {
        throw new Error('produto não encontrado')
    }

    return await productRepository.update(id, product)
}