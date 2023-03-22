const express = require("express");
const router = express.Router();
const reviewController = require("../Controllers/reviews.controller");
const { VerifyJwt } = require("../middleware/VerifyJwt");

router.post("/review", VerifyJwt, reviewController.postReview);
router.get("/review", reviewController.getReview);

module.exports = router;
