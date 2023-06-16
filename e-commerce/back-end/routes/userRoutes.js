import { Router } from 'express'
import UserController from './../Controllers/userController.js'
import validateLogin from '../middlewares/validateLogin.js';
const userRoutes = Router();

const userController = new UserController

userRoutes.get('/me',validateLogin,userController.me)
userRoutes.get('/',userController.getAllUsers)
userRoutes.get('/:id',userController.getUserById)


userRoutes.post("/create",userController.createUser)
userRoutes.post('/login',userController.loginUser)
userRoutes.post('/logout',userController.logoutUser)

userRoutes.put("/:id",(req,res)=>{
    res.send("put con ID!!")
})

userRoutes.delete("/:id",(req,res)=>{
    res.send("delete!!")
})

export default userRoutes