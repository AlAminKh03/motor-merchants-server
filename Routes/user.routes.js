const express = require("express");
const router = express.Router();
const userController = require("../Controllers/user.controllers");
const { VerifyJwt } = require("../middleware/VerifyJwt");

router.post("/user", userController.postUser);
router.get("/users", userController.getUser);
router.get("/user/getJwt", userController.getJwt);
router.get("/user/admin/:email", userController.getAdmin);
router.patch("/user/email", userController.updateStatusOfEmail);
router.patch("/user/admin/:id", VerifyJwt, userController.updateRole);

module.exports = router;
