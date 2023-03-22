const express = require("express");
require("dotenv").config();
const cors = require("cors");
const dbConnection = require("./db/dbConnection");
const PORT = process.env.port || 8000;

const userRoutes = require("./Routes/user.routes");
const productRoutes = require("./Routes/products.routes");
const orderRoutes = require("./Routes/order.routes");
const paymentRoutes = require("./Routes/payment.routes");
const reviewRoutes = require("./Routes/review.routes");

const app = express();
app.use(cors());
app.use(express.json());
dbConnection();

app.use(userRoutes);
app.use(productRoutes);
app.use(orderRoutes);
app.use(paymentRoutes);
app.use(reviewRoutes);

app.listen(PORT, () => {
  console.log("Running in port 8000");
});
