import express from 'express'
import routerMaster from './routes/index.js'
import connection from './connection/connection.js'
import User from './Models/User.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express();

//  const rickAndMortyAPI = fetch("https://rickandmortyapi.com/api/episode?page=3")
//                              .then((response)=>response.json())
//                              .then((data)=>console.log(data))

//---------------- middleware --------------------//
app.use(bodyParser.json());
app.use(express.urlencoded({ extended : false}))
app.use(cors({
    origin:'http://localhost:5173'
}))
app.use(routerMaster)


//-------------- sincronización con la BD -------------//
// tengo que importar en este archivo las tablas que voy a tocar 
// connection.sync() esta forma de sincronizar no mira cambios, si las tablas existen no hace nada. 
// connection.sync({ force: true }) tira todas las tablas de mi base de datos y las vuelve a crear segun modelos 
// connection.sync({ alter: true }) mira todas las tablas y comprueba cambios, de encontrar cambios los actualiza sin tirar la tabla

await connection.sync({ force:false }).then(() => {
    app.listen(8081,()=>{
        console.log("http://localhost:8081")
    })
})

