import { Category } from "../Models/index.js";

class CategoryController{
    constructor(){}

    getAllCategories = async (req,res) =>{
        try {
            const resp = await Category.findAll({
                attributes: ['id','Description']
            });

            if (resp.length === 0) throw new Error("No hay ningun producto cargado")

            res.send({
                success: true,
                message: "Categorias encontrados",
                resp
            });
            
        } catch (err) {
            res.send({
                success:false,
                message: error.message
            })
        }
    }
}

export default CategoryController

