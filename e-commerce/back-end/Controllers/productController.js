import {Product,Category} from '../Models/index.js'

class ProductController{
    constructor(){}

    getAllProducts = async (req,res)=>{
        try{
            const respuesta = await Product.findAll({
                attributes: ['id','Name','Description','UnitPrice','Image','CategoryId'],
                include: [
                    {
                    model:Category,
                    attributes: ['Description']
                    }
                ]
            });

            if (respuesta.length === 0) throw new Error("No hay ningun producto cargado")

            res.status(200).send({
                success: true,
                message: "Productos encontrados",
                respuesta
            });
        }catch (error){
            res.status(400).send({
                success:false,
                message: error.message
            })
        }
    }

    getProductById = async (req,res) =>{
        try {
            const {id} = req.params; //agarra el ID de la url !!!

            const result = await Product.findAll({
                attributes: ['id','Name','Description','UnitPrice','Image','CategoryId'],
                where:{
                    id: id
                }
            });

            if(result.length === 0) throw new Error("Producto no encontrado.");

            res.status(200).send({
                success:true,
                message: 'Producto encontrado',
                result: result[0].dataValues
            })
        } catch (error) {
            res.status(400).send({
                success:false,
                message: 'Producto NO encontrado'
            })
        }
    }   

    createProduct = async (req,res) => {
        try{
            const {Name, Description, UnitPrice,Image, CategoryId } = req.body;
           
            const result = await Product.create({Name,Description,UnitPrice,Image,CategoryId})

            if (!result) throw new Error("No se pudo crear el producto")

            res.status(200).send({
                success: true,
                message: 'Se creó el producto'
            });

        }catch(err){
            console.log(err)
            res.status(400).send({
                success: false,
                message: err.message
            })
        }
    }   

    updateProduct = async (req,res) =>{
        try {
            const {id} = req.params  //agarra el ID de la url !!!
            const {Name, Description, UnitPrice, CategoryId, Image} = req.body;
            const result = await Product.update(
                {Name, Description, UnitPrice, CategoryId, Image},
                { 
                    where: {
                        id: id
                    }
                }    
            );

            if (result[0] === 0) throw new Error("No se pudo modificar el producto")

            res.status(200).send({
                success:true,
                message: 'Producto modificado!'
            })

        } catch (error) {
            res.status(400).send({
                success:false,
                message: error.message
            })
        }
    }

    deleteProductById = async(req,res)=>{
        try {
            const {id} = req.params
            const result = await Product.destroy({
                where: {
                    id : id
                }
            });

            res.status(200).send({
                success: true,
                message: 'Se borro el producto'
            })

        } catch (error) {
            res.status(400).send({
                success: false,
                message: 'NO Se borro el producto'
            })
        }
    }

    
}

export default ProductController

