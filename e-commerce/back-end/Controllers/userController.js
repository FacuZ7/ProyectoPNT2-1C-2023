import User from "../Models/User.js";
import { generateToken, verifyToken } from "../utils/token.js";
class UserController{
    constructor(){};

    getAllUsers = async (req,res)=>{
        try {
            const result = await User.findAll({
                attributes: ['id','Login','LastName','Email','Password']
            })

            if (result.length === 0) throw new Error("No existen usuarios")

            res.status(200).send({
                success: true,
                message: "Todo ok",
                result
            });
            
        } catch (error) {
            res.status(400).send({
                success: false,
                message: "Todo mal",    
            })
        }
    }
    
    getUserById = async (req,res) =>{
        try {
            const {id} = req.params
            const result = await User.findByPk(id)

            if(result.length === 0) throw new Error('No se encontro el usuario')

            res.status(200).send({
                success: true,
                message: 'usuario encontrado',
                result
            })
            
        } catch (error) {
            res.status(400).send({
                success: false,
                message: 'usuario NO encontrado'
            })
        }
    }

    createUser = async (req,res)=>{
        try{
            const {Login, Name, LastName, Email, Password} = req.body;
            const result = await User.create({Login,Name,LastName,Email,Password})

            if (!result) throw new Error("No se pudo crear el usuario")

            res.status(200).send({
                success: true,
                message: 'Se creó el usuario'
            });

        }catch(err){
            res.status(400).send({
                success: false,
                message: err.message
            })
        }
    }

    loginUser = async (req,res,next)=>{
        try {
            const {Login,Password} = req.body;
            const resp = await User.findOne({
                where:{
                    Login  
                }
            });

            if (!resp){
                throw new Error("no se encontro usuario con este login")
            }
            
            const comparePassword = await resp.validatePassword(Password)

            if (!comparePassword){
                throw new Error('Las credenciales estan chukus')
            }

            const payload = {
                id:resp.id,
                login:resp.Login
            }

            const token = generateToken(payload)
            res.cookie('token',token)

            res.status(200).send({
                success:true,
                message: "Usuario encontrado",
                resp
            })

        } catch (err) {
            res.status(400).send({
                success:false,
                message: "Usuario NO encontrado",
                
            })
        }
    }
    
    me = (req,res,next)=>{
        try {
            const {user}=req

            res.status(200).send({
                success: true,
                message: "Usuario ok",
                result: user
            }) 
        } catch (err) {
            console.log(err)
        }  
    }

    logoutUser = (req,res,next) =>{
        //res.cookie('token',null) con esto ya estoy cambiandole la cookie y no va a coincidir
        res.clearCookie('token');
        res.status(200).send({
            success:true,
            message:'Usuario deslogeado'
        })
    }
}

export default UserController