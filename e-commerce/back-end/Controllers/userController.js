import User from "../Models/User";

class UserController{
    constructor(){};

    getAllUsers = async (res,req)=>{
        try {
            const result = await User.findAll({
                attributes: ['id','login','lastName','email','password']
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
    
    getUserById = async (res,req) =>{
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
            const {login, name, lastName, email, contraseña} = req.body;
            const result = await User.create({login,name,lastName,email,contraseña})

            if (!result) throw new Error("No se pudo crear el usuario")

            res.status(200).send({
                success: true,
                message: 'Se creó el usuario'
            });

        }catch(err){
            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }
}

export default UserController