import * as transactionRepository from '../repositories/transaction.repository';

export const getAll = async () => {
    return await transactionRepository.findAll();
}