const mongoose = require("mongoose");
const Product = mongoose.model("Product");

exports.getOneProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    if (product) return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().lean();
    if (products) return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};

exports.getOfferedProducts = async (req, res) => {
  try {
    const products = await Product.find({ offer: true }).lean();
    const count = await Product.countDocuments({ offer: true });
    if (products) return res.status(200).json({ products, count });
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};

exports.getRandomProduct = async (req, res, next) => {
  try {
    const totalDocs = await Product.countDocuments().lean();
    const random = Math.floor(Math.random() * totalDocs);

    const randomProduct = await Product.findOne().skip(random).lean();

    if (randomProduct) return res.status(200).json(randomProduct);
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};

exports.searchProduct = async (req, res) => {
  const { q } = req.query;
  try {
    const products = await Product.find({
      $text: {
        $search: q,
      },
    }).lean();
    const count = await Product.countDocuments({
      $text: {
        $search: q,
      },
    });
    if (products) return res.status(200).json({ products, count });
  } catch (error) {
    console.log(error);
    return res.status(error.code).send(error.message);
  }
};
