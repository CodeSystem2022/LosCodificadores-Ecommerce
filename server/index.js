const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./config/db.js')
const routes = require('./routes/index.js')
const mercadopago = require('mercadopago')

//importamos y configuramos dotenv
require('dotenv').config({path: '.env'})

mercadopago.configure({
  access_token: process.env.MP_TOKEN,
});

const app = express()

const PORT = 5000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(routes)

app.listen(PORT, err => {
    if(err) return console.log(err)
    console.log(`Server corriendo desde el puerto: ${PORT}`)
})