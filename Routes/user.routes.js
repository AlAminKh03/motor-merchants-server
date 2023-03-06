const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controllers");

router.post("/user", userController.postUser);
router.get("/user/email", userController.getUser);
router.patch("/user/email", userController.updateStatusOfEmail);

module.exports = router;
