import { Router } from 'express'
import User from './../Models/User.js'
const userRoutes = Router();

userRoutes.get("/",(req,res)=>{
    res.send("holaaaaa!!")
})

userRoutes.get("/:id",(req,res)=>{
    res.send("get con ID!!")
})

userRoutes.post("/create",(req,res)=>{
    console.log("llegue")
    console.log(req.body)
    const { login, name, lastName, email, contraseña } = req.body

    
    
    res.send(`desde el back end: Login: ${login}, Nombre: ${name}, Ap: ${lastName}, ${email}, pass: ${contraseña}`)
})

userRoutes.post("/:id",(req,res)=>{

    res.send("post con ID!!")
})

userRoutes.put("/:id",(req,res)=>{
    res.send("put con ID!!")
})

userRoutes.delete("/:id",(req,res)=>{
    res.send("delete!!")
})

export default userRoutes