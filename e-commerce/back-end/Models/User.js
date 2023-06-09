import { DataTypes as DT,Model} from 'sequelize'
import connection from '../connection/connection.js'
import bcrypt from 'bcrypt'

class User extends Model {}

User.init({
    Login:{
        type:DT.STRING,
        allowNull: false,
    },
    Name:{
        type:DT.STRING,
        allowNull: false,
    },
    LastName:{
        type:DT.STRING,
        allowNull: false
    },
    Email:{
        type:DT.STRING,
        allowNull: false
    },
    Password:{
        type:DT.STRING,
        allowNull: false
    },
    Salt:{
        type: DT.STRING    
    }
},
{
    sequelize: connection,
    modelName:"User"

})

User.beforeCreate(async(user)=>{
    const salt = await bcrypt.genSalt();
    user.Salt = salt

    const passwordHash = await bcrypt.hash(user.Password, salt)
    
    user.Password = passwordHash
})

export default User