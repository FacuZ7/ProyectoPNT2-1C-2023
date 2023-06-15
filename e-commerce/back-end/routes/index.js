//el maestro de RUTAS!!!!
import {Router} from 'express'
import userRoutes from './userRoutes.js'
import productRoutes from './productRoutes.js'
import categoryRoutes from './categoryRoutes.js'
const routerMaster = Router()  //en este caso esta bien no nombrarlo igual que el archivo

routerMaster.use("/user", userRoutes)
routerMaster.use('/product', productRoutes)
routerMaster.use('/category', categoryRoutes)

export default routerMaster
