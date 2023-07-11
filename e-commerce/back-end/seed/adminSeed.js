import {User} from '../Models/index.js'

const adminSeed = async() => {
    try {
        await User.bulkCreate([{
            Login:"Admin",
            Name:"Administrador",
            LastName:"Administrador",
            Email:"admin@admin.com",
            Password:"admin",
            RoleId: 1  //admin
        }])
    } catch (err) {
        throw new Error(err.message)
    }
}

export default adminSeed;