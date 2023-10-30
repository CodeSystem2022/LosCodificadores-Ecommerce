const mongoose = require('mongoose')
mongoose.Promise = global.Promise

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

productSchema.index({title: 'text'})

module.exports = mongoose.model('Product', productSchema)