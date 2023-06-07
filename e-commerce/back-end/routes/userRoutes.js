import { Router } from 'express'
import UserController from './../Controllers/userController.js'
const userRoutes = Router();

const userController = new UserController

userRoutes.get("/",userController.getAllUsers)

//userRoutes.get("/create",) este deberia llevarme solamente al formulario
userRoutes.post("/create",userController.createUser)

userRoutes.get("/:id",userController.getUserById)
//userRoutes.post("/:id",userController.updateUser) IMPLEMENTAAAAAAR

userRoutes.put("/:id",(req,res)=>{
    res.send("put con ID!!")
})

userRoutes.delete("/:id",(req,res)=>{
    res.send("delete!!")
})

export default userRoutes