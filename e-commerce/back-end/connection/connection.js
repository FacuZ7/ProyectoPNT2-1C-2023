import { Sequelize } from 'sequelize'
import 'dotenv/config'
import {database, username, password, dialect, port, host } from './../config/config.js'

const connection = new Sequelize(database,username,password,{
    host,
    dialect,
    port
});

try{
    await connection.authenticate()
    console.log("todo bien")
}catch(err){
    console.log(err);
}

export default connection