const mongoose = require("mongoose");

const signupSchema = mongoose.Schema({
  name: String,
  fname: String,
  dob:String,
  rollno:Number,
  Branch:String,
  Mobileno:Number,
  Address:String,
  password:String,
});

const Signup = mongoose.model("Signup", signupSchema);
module.exports=Signup;