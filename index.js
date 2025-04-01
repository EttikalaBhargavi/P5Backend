const express = require('express');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3000;

const Product = require("./Models/Product");
const Signup = require("./Models/Signup");
const Signin = require("./Models/Signin");

app.post("/addproducts", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.json(product);
      console.log("Data inserted");
    } catch (error) {
      res.send("Data not inserted");
    }
  });

  app.get("/getproducts", async (req, res) => {
    try {
      const product = await Product.find({});
      res.json(product);
      console.log("Data fetched");
    } catch (error) {
      res.send("Data not fetched");
    }
  });
  
  app.post("/signup", async (req, res) => {
    try {
      const signup = await Signup.create(req.body);
      res.json(signup);
      console.log("User Created");
    } catch (error) {
      res.send("User not Created");
    }
  });

  app.get("/signin", async (req, res) => {
    try {
      const signin = await Signin.find({});
      res.json(signin);
      console.log("User logged in");
    } catch (error) {
      res.send("User not Found");
    }
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})

mongoose
  .connect(
    "mongodb+srv://BhargaviP5:UZWk6AS6vZv4QzZs@p5ecommerce.pcf0oqq.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to MongoDB Successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });