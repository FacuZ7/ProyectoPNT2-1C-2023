import { secret } from '../config/config.js'
import jwt from 'jsonwebtoken'

export const generarToken = (payload) => {
    const token = jwt.sign(payload, secret)

    return token
}



