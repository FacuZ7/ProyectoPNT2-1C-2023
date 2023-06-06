import {Router} from 'express'
import ProductController from '../Controllers/productController.js';
const productRoutes = Router();

const productController = new ProductController();

productRoutes.get("/", productController.getAllProducts)
productRoutes.get("/:id", productController.getProductById)
productRoutes.post("/",productController.createProduct)
productRoutes.put("/:id",productController.updateProduct)

export default productRoutes