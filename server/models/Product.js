const mongoose = require('mongoose') //importa la biblioteca Mongoose
mongoose.Promise = global.Promise //configura Mongoose para utilizar el objeto Promise global para manejar operaciones asíncronas.

//definimos la estructura del Producto
const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
        default: 0,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true
    },
    offer:{
        type: Boolean
    },
    images: [String],
    stock: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    createdAt:{
        type: String
    }
})

productSchema.index({title: 'text'})//permite realizar operaciones de busqueda basado en sus titulos

module.exports = mongoose.model('Product', productSchema)// al exportar podemas crear, actualizar leer y eliminar productos en la BD