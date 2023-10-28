const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    if (products) return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};

