import { Router } from 'express'
import * as transactionController from '../controllers/transaction.controller'

const router = Router()

router.get('/', transactionController.getAllTransactions)
router.post('/', transactionController.createTransaction)
router.get('/:id', transactionController.getTransactionById)
router.get('/product/:id', transactionController.getTransactionByProductId)
router.get('/date/:date', transactionController.getTransactionByDate)

export default router