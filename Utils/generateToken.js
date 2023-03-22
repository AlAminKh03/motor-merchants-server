const jwt = require("jsonwebtoken");

exports.generateToken = (email) => {
  const token = jwt.sign({ email }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
  return token;
};
