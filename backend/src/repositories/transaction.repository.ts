import { prisma } from '../config/prismaClient'
import { Movimentacao } from '@prisma/client'
import { CreateMovimentacaoDTO } from '../schemas/transaction.schema'

export const findAll = async (): Promise<Movimentacao[]> => {
  return await prisma.movimentacao.findMany()
}

export const findById = async (id: string): Promise<Movimentacao | null> => {
  return await prisma.movimentacao.findUnique({
    where: { id },
  })
}

export const findByProductId = async (id: string): Promise<Movimentacao[]> => {
  return await prisma.movimentacao.findMany({
    where: { produtoId: id },
  })
}

export const findByDate = async (data: Date): Promise<Movimentacao[]> => {
  return await prisma.movimentacao.findMany({
    where: { data }
  })
}

export const create = async (movimentacao: CreateMovimentacaoDTO): Promise<Movimentacao> => {
  return await prisma.movimentacao.create({
    data: movimentacao
  })
}