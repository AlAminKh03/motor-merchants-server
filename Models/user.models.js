const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  isVerified: Boolean,
});

module.exports = mongoose.model("Users", UserSchema);
