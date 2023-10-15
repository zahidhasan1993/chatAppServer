const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = 5000;
const app = express();

//middle ware
app.use(cors());
app.use(express.json());

//mongodb connect
const connectDB = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB successfully!');
    } catch (error) {
      console.log('Error connecting to MongoDB:', error);
      process.exit(1);
    }
  };

app.get("/", (req,res) => {
    res.send("WELCOME TO CHAT APP SERVER")
});

connectDB();

app.listen(port, () => {
    console.log("app running on server :",port);
})