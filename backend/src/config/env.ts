import { config } from 'dotenv'
config() // carrega variaveis de ambiente do arquivo .env

export const env = {
  PORT: process.env.PORT || '3000',
  DATABASE_URL: process.env.DATABASE_URL || '',
}
