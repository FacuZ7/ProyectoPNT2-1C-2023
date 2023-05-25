import { Router } from 'express'
const userRoutes = Router();

userRoutes.get("/",(req,res)=>{
    res.send("holaaaaa!!")
})

userRoutes.get("/:id",(req,res)=>{
    res.send("get con ID!!")
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