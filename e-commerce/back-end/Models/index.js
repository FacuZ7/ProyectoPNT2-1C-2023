import Category from './Category.js'
import Product from './Product.js' 
import Role from './Role.js'
import User from './User.js'

Category.hasMany(Product);
Product.belongsTo(Category);

Role.hasMany(User); 
User.belongsTo(Role); 

export {Category,Product,User,Role}