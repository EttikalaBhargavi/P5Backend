const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    id:Number,
    title:String,
    price: Number,
    description: String,
    category:String,
    image: String,
    rating:{
        rate:Number,
        count:Number,
    },      
  });
  
const Product = mongoose.model("Product", productSchema);
module.exports=Product;