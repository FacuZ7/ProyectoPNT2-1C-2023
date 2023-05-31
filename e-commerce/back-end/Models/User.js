import { DataTypes as DT,Model} from 'sequelize'
import connection from '../connection/connection.js'

class User extends Model {}

User.init({
    login:{
        type:DT.STRING,
        allowNull: false,
    },
    name:{
        type:DT.STRING,
        allowNull: false,
    },
    lastName:{
        type:DT.STRING,
        allowNull: false
    },
    email:{
        type:DT.STRING,
        allowNull: false
    }
    ,password:{
        type:DT.STRING,
        allowNull: false
    }
},
{
    sequelize: connection,
    modelName:"User"

})

export default User