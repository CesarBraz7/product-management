import { prisma } from '../config/prismaClient'
import { Movimentacao } from '@prisma/client'

export const findAll = async (): Promise<Movimentacao[]> => {
  return await prisma.movimentacao.findMany()
}