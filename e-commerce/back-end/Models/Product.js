import { DataTypes as DT,Model} from 'sequelize'
import connection from '../connection/connection.js'

class Product extends Model{}

Product.init({
    Name:{
        type:DT.STRING,
        allowNull: false
    },
    Description:{
        type:DT.STRING,
        allowNull: true
    },
    UnitPrice:{
        type:DT.DOUBLE,
        allowNull:false
    },
    Image:{
        type:DT.STRING,
        allowNull:true
    }

},{
    sequelize: connection,
    modelName:"Product",
    timestamps: false
})

export default Product