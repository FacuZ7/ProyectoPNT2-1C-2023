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
        console.log(err)
    }
}

export default categorySeed;