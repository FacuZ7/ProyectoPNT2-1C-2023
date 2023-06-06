import Product from '../Models/Product.js'

class ProductController{
    constructor(){}

    getAllProducts = async (req,res)=>{
        try{
            const respuesta = await Product.findAll({
                attributes: ['id','name','description']
            });

            if (result.length === 0) throw new Error("No hay ningun producto cargado")

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
                attributes: ['id','name','description'],
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
                success:true,
                message: 'Producto NO encontrado'
            })
        }
    }   

    createProduct = async (req,res) => {
        try{
            const {name, description, category} = req.body;
            const result = await Product.create({name,description,category})

            if (!result) throw new Error("No se pudo crear el producto")

            res.status(200).send({
                success: true,
                message: 'Se creó el producto'
            });

        }catch(err){
            res.status(400).send({
                success: false,
                message: error.message
            })
        }
    }   

    updateProduct = async (req,res) =>{
        try {
            const {id} = req.params  //agarra el ID de la url !!!
            const {name,description,category} = req.body;
            const result = await Product.update(
                {name,description,category},
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

    deleteProductById = async(res,req)=>{
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

