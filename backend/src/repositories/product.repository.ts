import { prisma } from '../config/prismaClient'
import { Produto } from '@prisma/client'

export const findAll = async (): Promise<Produto[]> => {
  return await prisma.produto.findMany()
}