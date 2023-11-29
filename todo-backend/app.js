const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const express = require("express");
const app = express();
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 8000;
const User = require("./models/todos");
const PasswordModel = require("./models/userdata"); 

mongoose.connect("mongodb://localhost:27017/ToDo").then(() => console.log("MongoDB Connected")).catch((err) => console.log("MongoDb connection error", err));

app.use(express.json());
app.use(cors());

// console.log(app.json());

// app.get("/",cors(),(req, res) => {
//   console.log(req);
// });
app.get("/getdata",(req,res)=>{
  User.find()
  .then((users) => {
    res.json(users);})
  .catch((err) => res.status(400).json("Error: " + err));
});

app.post("/",async(req, res) => {
  console.log(req.body);
  const {text} = req.body;
  const data={
    text:text
  }
  // await User.create(data);
  await User.insertMany([data]);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


// app.get("/",cors(),(rer,res))=>({

// })

// async function insert(){
//    const result = await User.create({
//         username:'Raj',
//         password:'djskfandc'
//     })
// }
// insert();

// const result = await user.create({
//     username:"Raj",
//     password:"radkhvjb"
// })
// return result.status(201).json({msg :"success"})
