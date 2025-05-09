import { Request, Response } from 'express'
import * as productService from '../services/product.service'
import { CreateProductDTO, UpdateProductDTO } from '../schemas/product.schema'

export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await productService.getAll()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'falha ao buscar produtos' })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    const product: CreateProductDTO = req.body

    try {
        const newProduct = await productService.create(product)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: 'falha ao criar produto' })
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const product = await productService.getById(id)
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({ error: 'falha ao buscar produto' })
    }
}

export const updateProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const updateProduct: UpdateProductDTO = req.body

    try {
        const updatedProduct = await productService.update(id, updateProduct)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(400).json({ error: 'falha ao atualizar produto' })
    }
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        await productService.deleteById(id)
        res.status(204).send()
    } catch (error) {
        res.status(400).json({ error: 'falha ao deletar produto' })
    }
}