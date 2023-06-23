import { verifyToken } from "../utils/token.js";

const validateLogin = (req,res,next) => {
    try {
        const {token} = req.cookies
        if(!token){throw new Error('falta token')}
        const {payload} = verifyToken(token);
        if(!payload){throw new Error('falta payload')}
        req.user=payload
        next()
    } catch (err) {
        //next(err)
        res.status(400).send(err.message)
    }
}

export default validateLogin