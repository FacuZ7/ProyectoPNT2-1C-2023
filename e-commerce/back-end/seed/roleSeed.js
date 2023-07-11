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
        throw new Error(err.message)
    }
}

export default roleSeed;