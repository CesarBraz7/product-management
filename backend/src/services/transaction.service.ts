import * as transactionRepository from '../repositories/transaction.repository';
import { CreateMovimentacaoDTO } from '../schemas/transaction.schema';

export const getAll = async () => {
    const transactions = await transactionRepository.findAll()

    if (transactions.length === 0) {
        throw new Error('nenhum produto encontrado')
    }

    return
}

export const create = async (transaction: CreateMovimentacaoDTO) => {
    return await transactionRepository.create(transaction)
}

export const getById = async (id: string) => {
    const transaction = await transactionRepository.findById(id)

    if (!transaction) {
        throw new Error('transação não encontrado')
    }

    return transaction
}

export const getByProductId = async (id: string) => {
    const transaction = await transactionRepository.findByProductId(id)

    if (transaction.length === 0) {
        throw new Error('nenhuma movimentação encontrado')
    }

    return transaction
}

export const getByDate = async (data: Date) => {
    const transaction = await transactionRepository.findByDate(data)

    if (transaction.length === 0) {
        throw new Error('nenhuma movimentação encontrado')
    }

    return transaction
}
