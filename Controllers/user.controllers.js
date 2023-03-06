const userModels = require("../Models/user.models");
const UserModel = require("../Models/user.models");

exports.postUser = async (req, res, next) => {
  try {
    const body = req.body;
    const user = await UserModel(body);
    user.save();
    res.status(201).send({ user });
  } catch (error) {
    console.log(error);
    res.send(404).status({ error });
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
    const email = req.params.email;
    const user = await userModels.find({ email });
    res.status(300).send(user);
  } catch (error) {
    console.log(error);
    res.send(404).status({ error });
  }
};
