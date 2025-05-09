import { prisma } from '../config/prismaClient'
import { Produto } from '@prisma/client'
import { CreateProductDTO, UpdateProductDTO } from '../schemas/product.schema'

export const findAll = async (): Promise<Produto[]> => {
  return await prisma.produto.findMany()
}

export const findById = async (id: string): Promise<Produto | null> => {
  return await prisma.produto.findUnique({
    where: { id }
  })
}

export const findByName = async (nome: string): Promise<Produto | null> => {
  return await prisma.produto.findFirst({
    where: { nome }
  })
}

export const create = async (product: CreateProductDTO): Promise<Produto> => {
  return await prisma.produto.create({
    data: product
  })
}

export const update = async (id: string, product: UpdateProductDTO): Promise<Produto> => {
  return await prisma.produto.update({
    where: { id },
    data: product
  })
}