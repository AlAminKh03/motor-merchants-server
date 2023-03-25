const ProductsModel = require("../Models/products.models");

exports.postProducts = async (req, res, next) => {
  const body = req.body;
  try {
    const products = await ProductsModel(body);
    products.save();
    res.status(201).send(products);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};

exports.getProducts = async (req, res, next) => {
  const query = {};
  try {
    const products = await ProductsModel.find(query);
    res.status(200).send(products);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  const id = req.params.id;
  const filter = { _id: id };
  try {
    const product = await ProductsModel.findOne(filter);
    res.status(201).send(product);
  } catch (err) {
    console.log(err);
    res.status(404).send({ err });
  }
};
