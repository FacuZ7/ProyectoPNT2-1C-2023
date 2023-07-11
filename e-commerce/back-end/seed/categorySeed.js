import {Category} from '../Models/index.js'

const categorySeed = async() => {
    try {
        await Category.bulkCreate([{
            Description:"Calzado"
        },
        {
            Description:"Musica"
        },
        {
            Description:"Repuestos"
        },
        {
            Description:"Medio de transporte"
        }])
    } catch (err) {
        throw new Error(err.message)
    }
}

export default categorySeed;