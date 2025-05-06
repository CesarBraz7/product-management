import { Request, Response } from 'express'
import * as productService from '../services/product.service'

export const getAllProducts = async (_req: Request, res: Response) => {
    const products = await productService.getAll()
    res.status(200).json(products)
}