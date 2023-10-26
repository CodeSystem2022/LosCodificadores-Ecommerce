const express = require('express')
const productController = require('../controllers/ProductController.js')

const router = express.Router()

router.get('/products', productController.getAllProducts)

module.exports = router