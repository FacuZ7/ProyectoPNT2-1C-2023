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
    const { name, lastName, password, email} = req.body
    // esto era si uso mysql2 derecho en mi connection pero aca ya tengo sequelize! 
    // connection.query(
    //     `INSERT INTO USERS (name,lastName,password,email) VALUES(${name},${lastName},${password},${email})`
    // ).then(()=>{
    //     result = "Usuario creado exitosamente!"
    // }).catch(()=>{
    //     result = "error en base de datos"
    // })

    const newUser = User.create({
        name: "Facundo",
        lastName:"Zapata",
        password:"1234",
        email:"fzapata@gmail.com" 
    }, {fields: [name,lastName,password,email]
    })
    
    res.send("Todo ok")
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