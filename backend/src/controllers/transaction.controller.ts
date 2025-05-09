import { Request, Response } from 'express'
import * as transactionService from '../services/transaction.service'
import { CreateMovimentacaoDTO } from '../schemas/transaction.schema'

export const getAllTransactions = async (_req: Request, res: Response) => {
    try {
        const transactions = await transactionService.getAll()
        res.status(200).json(transactions)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const createTransaction = async (req: Request, res: Response) => {
    const transaction: CreateMovimentacaoDTO = req.body

    try {
        const newTransaction = await transactionService.create(transaction)
        res.status(201).json(newTransaction)
    } catch (error) {
        res.status(400).json({ message: error })
    }
}

export const getTransactionById = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const transaction = await transactionService.getById(id)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getTransactionByProductId = async (req: Request, res: Response) => {
    const { id } = req.params

    try {
        const transaction = await transactionService.getByProductId(id)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getTransactionByDate = async (req: Request, res: Response) => {
    const { date } = req.params
    const newDate = new Date(date)

    try {
        const transaction = await transactionService.getByDate(newDate)
        res.status(200).json(transaction)
    } catch (error) {
        res.status(404).json({ message: error })
    }
}