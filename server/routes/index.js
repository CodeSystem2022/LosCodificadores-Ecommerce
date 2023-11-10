const express = require('express')
const productController = require('../controllers/ProductController.js')
const mercadoPagoController = require('../controllers/MercadoPagoController.js')
//Importamos el controlador de productos

const router = express.Router()
//inicializamos el routes con express

//Obtener todos los productos
router.get('/', (req, res) => res.json("API CODIFICADORES"))

//Obtener todos los productos
router.get('/products', productController.getAllProducts)

//Obtener un solo producto especifico
router.get('/product/:id', productController.getOneProduct)

//Obtener productos de categoria
router.get('/products/:categoria', productController.getProductsByCategory)

//Obtener los productos en oferta
router.get('/product/get-offered', productController.getOfferedProducts)

//Obtener los productos en oferta
router.get('/product/get-random', productController.getRandomProduct)

//Buscar producto
router.get('/product/search', productController.searchProduct)

//Crea la preferencia usando la libreria de mercadopago y devuelve el id de la preferencia creada
router.post('/create_preference', mercadoPagoController.createPreference)

module.exports = router
//Exportamos el router