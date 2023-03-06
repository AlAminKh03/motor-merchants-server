const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./db/dbConnection");
const PORT = process.env.port || 8000;

const userRoutes = require("./Routes/user.routes");
const productRoutes = require("./Routes/products.routes");

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.use(userRoutes);
app.use(productRoutes);

app.listen(PORT, () => {
  console.log("Running in port 8000");
});
