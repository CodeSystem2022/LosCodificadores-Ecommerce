const express = require('express')
const productController = require('../controllers/ProductController.js')

const router = express.Router()
//Obtener todos los productos
router.get('/', (req, res) => res.json("API CODIFICADORES"))

//Obtener todos los productos
router.get('/products', productController.getAllProducts)

//Obtener un solo producto especifico
router.get('/product/:id', productController.getOneProduct)

//Obtener productos de categoria
router.get('/products/:categoria', productController.getProductsByCategory)

//Obtener los productos en oferta
router.get('/get-offered', productController.getOfferedProducts)

//Obtener los productos en oferta
router.get('/product/get-random', productController.getRandomProduct)

//Buscar producto
router.get('/search/product', productController.searchProduct)


module.exports = router