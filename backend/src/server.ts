import app from './app'
import { env } from './config/env'

const PORT = Number(env.PORT) || 3000

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})