import {Product} from '../Models/index.js'

const productSeed = async() => {
    try {
        await Product.bulkCreate([{
            Name:"Zapatillas Adidas",
            Description:"Zapatillas adidas talle 41",
            UnitPrice:"25000",
            Image:"zapatillas_adidas.jpg",
            CategoryId:1
        },
        {
            Name:"Guitarra",
            Description:"Guitarra + combo instrumentos",
            UnitPrice:"150000",
            Image:"guitarra_combo.jpg",
            CategoryId:2
        },
        {
            Name:"Bateria de auto",
            Description:"Bateria de auto repuesto",
            UnitPrice:"45000",
            Image:"bateria_auto.jpg",
            CategoryId:3
        },
        {
            Name:"Bicicleta Venzo",
            Description:"Bicicleta Venzo R29",
            UnitPrice:"170000",
            Image:"bicicleta_venzo.jpg",
            CategoryId:4 
        }])
    } catch (err) {
        console.log(err)
    }
}

export default productSeed;