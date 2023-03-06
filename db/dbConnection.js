const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

module.exports = db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Databse connected");
  } catch (error) {
    console.log(error);
  }
};
