require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route");
const app = express();

console.log(process.env.MONGODB_KEY);

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

mongoose
  .connect(process.env.MONGODB_KEY)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("app is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
