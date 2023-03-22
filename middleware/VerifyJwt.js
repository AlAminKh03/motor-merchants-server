const jwt = require("jsonwebtoken");

exports.VerifyJwt = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res.status(403).send({ message: "Not Authorized" });
  }
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(404).send({ message: "Forbidden access" });
    }
    req.decoded = decoded;
    next();
  });
};
