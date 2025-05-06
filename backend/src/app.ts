import express from 'express'
import cors from 'cors'
import * as productRoutes from './routes/product.routes'
import * as transactionRoutes from './routes/transaction.routes'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes.default)
app.use('/api/transactions', transactionRoutes.default)

app.get('/ping', (req, res) => {
  res.send('pong')
})

export default app