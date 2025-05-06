import { Request, Response } from 'express'
import * as transactionService from '../services/transaction.service'

export const getAllTransactions = async (_req: Request, res: Response) => {
    const transactions = await transactionService.getAll()
    res.status(200).json(transactions)
}