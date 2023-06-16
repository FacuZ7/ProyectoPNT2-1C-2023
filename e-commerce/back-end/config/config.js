import 'dotenv/config'

export const database = process.env.DATABASE
export const username = process.env.DB_USERNAME
export const password = process.env.DB_PASSWORD
export const dialect = process.env.DB_DIALECT
export const host = process.env.DB_HOST
export const port = process.env.DB_PORT
export const serverPort = process.env.SERVER_PORT
export const serverPortFront = process.env.SERVER_PORT_FRONT
export const secret = process.env.JWT_SECRET