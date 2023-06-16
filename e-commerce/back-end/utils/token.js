import { secret } from '../config/config.js'
import jwt from 'jsonwebtoken'

export const generateToken = (payload) => {
    const token = jwt.sign({payload}, secret)
    
    return token
}

export const verifyToken = (token)=>{
    return jwt.verify(token,secret)
}



