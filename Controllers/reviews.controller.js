const reviewModel = require("../Models/review.model");

exports.postReview = async (req, res, next) => {
  const body = req.body;
  console.log(body);
  try {
    const reviews = await reviewModel(body);
    reviews.save();
    res.status(201).send(reviews);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};

exports.getReview = async (req, res, next) => {
  const query = {};
  try {
    const reviews = await reviewModel.find(query);
    res.status(201).send(reviews);
  } catch (err) {
    console.log(err);
    res.status(404).send(err);
  }
};
