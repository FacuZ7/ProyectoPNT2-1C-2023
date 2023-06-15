import { DataTypes as DT,Model} from 'sequelize'
import connection from '../connection/connection.js'

class Category extends Model {}

Category.init({
    Description:{
        type:DT.STRING,
        allowNull: false,
    }
},
{
    sequelize: connection,
    modelName:"Category",
    timestamps: false
})

export default Category