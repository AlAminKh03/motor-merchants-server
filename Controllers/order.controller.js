const OrderModel = require("../Models/order.model");

exports.postOrder = async (req, res, next) => {
  const body = req.body;
  try {
    const order = await OrderModel(body);
    order.save();
    res.status(201).send(order);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
exports.getPersonOrder = async (req, res, next) => {
  const email = req.params.email;
  const filter = { email: email };
  try {
    const orderByEmail = await OrderModel.find(filter);
    res.status(201).send(orderByEmail);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
exports.getSingleOrder = async (req, res, next) => {
  const id = req.params.id;
  const filter = { _id: id };

  try {
    const orderById = await OrderModel.findOne(filter);

    res.status(201).send(orderById);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

exports.getOrders = async (req, res, next) => {
  const query = {};

  try {
    const orders = await OrderModel.find(query);

    res.status(201).send(orders);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};

exports.deleteOrder = async (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteOrder = await OrderModel.findByIdAndDelete(id);
    res.status(201).send(deleteOrder);
  } catch (error) {
    console.log(error);
    res.status(404).send(error);
  }
};
