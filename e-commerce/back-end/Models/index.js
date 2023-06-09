import Category from './Category.js'
import Product from './Product.js' 
import User from './User.js'

Category.hasMany(Product);
Product.belongsTo(Category);


export {Category,Product,User}