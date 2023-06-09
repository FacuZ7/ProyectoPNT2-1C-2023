import express from 'express'
import routerMaster from './routes/index.js'
import connection from './connection/connection.js'
import cors from 'cors'
import categorySeed from './seed/categorySeed.js'
//import Product from './Models/Product.js'
import {serverPort, serverPortFront} from './config/config.js'
import productSeed from './seed/productSeed.js'
const app = express();


//---------------- middleware --------------------//
app.use(express.urlencoded({ extended : true}))
app.use(cors({
    origin:`http://localhost:${serverPortFront}`
}))
app.use(express.json())
app.use(routerMaster)

//-------------- sincronización con la BD -------------//
// tengo que importar en este archivo las tablas que voy a tocar 
// connection.sync() esta forma de sincronizar no mira cambios, si las tablas existen no hace nada. 
// connection.sync({ force: true }) tira todas las tablas de mi base de datos y las vuelve a crear segun modelos 
// connection.sync({ alter: true }) mira todas las tablas y comprueba cambios, de encontrar cambios los actualiza sin tirar la tabla

await connection
    .sync({ force:true })
    .then(() => {
    app.listen(serverPort,()=>{
        console.log(`http://localhost:${serverPort}`)
    })
    })
    .then(()=>{
        categorySeed()
        productSeed()
    })

