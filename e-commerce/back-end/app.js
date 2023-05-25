import express from 'express'
import routerMaster from './routes/index.js'
import connection from './connection/connection.js'
const app = express();

//middleware

app.use(routerMaster)

app.listen(8081,()=>{
    console.log("http://localhost:8081")
})