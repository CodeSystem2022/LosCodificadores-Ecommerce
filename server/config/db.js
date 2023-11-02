const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://codificadores:X7gItYWJGmAEX8G1@ecommerce.pcytvzz.mongodb.net/', {useNewUrlParser: true})

mongoose.connection.on('error', (error)=>{
    console.log(`Ha ocurrido un problema al intentar conectar con la base de datos: ${error}`)
})

require('../models/Product')