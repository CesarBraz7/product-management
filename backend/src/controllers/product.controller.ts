import { Request, Response } from 'express'
import * as productService from '../services/product.service'
import { CreateProductDTO } from '../schemas/product.schema'

export const getAllProducts = async (_req: Request, res: Response) => {
    try {
        const products = await productService.getAll()
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' })
    }
}

export const createProduct = async (req: Request, res: Response) => {
    try {
        const product: CreateProductDTO = req.body
        const newProduct = await productService.create(product)
        res.status(201).json(newProduct)
    } catch (error) {
        res.status(400).json({ error: 'Failed to create product' })
    }
}

export const getProductById = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await productService.getById(id)
    if (!product) {
        return res.status(404).json({ error: 'Product not found' })
    }
    res.status(200).json(product)
}