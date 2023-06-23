import {Role} from '../Models/index.js'

const roleSeed = async() => {
    try {
        await Role.bulkCreate([{
            Description:"Admin"
        },
        {
            Description:"User"
        }])
    } catch (err) {
        console.log(err)
    }
}

export default roleSeed;