import {Router} from 'express'
import CategoryController from '../Controllers/categoryController.js'
const categoryRoutes = Router();

const categoryController = new CategoryController();

categoryRoutes.get("/", categoryController.getAllCategories)


export default categoryRoutes