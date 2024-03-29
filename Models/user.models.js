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
  role: String,
  location: String,
  fbLink: String,
  linkdinLink: String,
  githubLink: String,
});

module.exports = mongoose.model("Users", UserSchema);
