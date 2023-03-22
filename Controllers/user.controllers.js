const userModels = require("../Models/user.models");
const UserModel = require("../Models/user.models");
const { generateToken } = require("../Utils/generateToken");

exports.postUser = async (req, res, next) => {
  try {
    const body = req.body;
    const filter = body.email;
    const filteringUser = await UserModel.findOne({ email: filter });
    if (!filteringUser) {
      const user = await UserModel(body);
      user.save();
      return res.status(201).send({ user });
    }
    res.status(409).send({ message: "User already exist" });
  } catch (error) {
    console.log(error);
    res.status(404).send({ error });
  }
};

exports.updateStatusOfEmail = async (req, res, next) => {
  const Email = req.params.email;
  const filter = { email: Email };
  const updatedDoc = { isVerified: true };
  try {
    const verifiedUser = await userModels.findOneAndUpdate(filter, updatedDoc);
    res.status(201).send(verifiedUser);
  } catch (error) {
    console.log(error);
    res.status(404).send({ error });
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const query = {};
    const user = await userModels.find(query);
    console.log(user);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.send(404).status({ error });
  }
};

exports.getJwt = async (req, res, next) => {
  const email = req.query.email;
  const query = { email: email };
  try {
    const user = await UserModel.find(query);
    if (user) {
      const token = generateToken(email);
      return res.status(201).send({ accessToken: token });
    }
  } catch (error) {
    res.status(404).send({ accessToken: "" });
  }
};

exports.getAdmin = async (req, res, next) => {
  const email = req.params.email;
  const query = { email: email };
  try {
    const user = await UserModel.findOne(query);
    res.status(201).send({ isAdmin: user?.role === "admin" });
  } catch (err) {
    console.log(err);
    req.status(404).send(err);
  }
};

exports.updateRole = async (req, res, next) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = { role: "admin" };
  const decodedEmail = req.decoded.email;
  try {
    const user = await UserModel.findOne({ email: decodedEmail });
    if (user?.role !== "admin") {
      return res.status(403).send({ message: "unauthorized access" });
    }
    const updatedRole = await UserModel.findOneAndUpdate(filter, updatedDoc);
    res.status(200).send(updatedRole);
  } catch (err) {
    console.log(err);
    req.status(404).send(err);
  }
};
