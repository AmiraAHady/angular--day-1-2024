// server side
// Express
var express = require("express");
var server = express();
var cors = require('cors')
var mongoose = require("mongoose");
var productRoutes=require('./routes/product')
var movieRoutes=require('./routes/movies')
// var Product = require("./models/product");
mongoose
  .connect(
    `mongodb+srv://meangiti60:t36fYo41435lMUSq@cluster0.tu9t8.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error,can not connect");
  });

server.use(cors())
server.use(express.urlencoded({ extended: true }));
server.use(express.json());


server.use('/movie',movieRoutes)
server.use('/product',productRoutes)
//server
server.listen(3003, () => {
  console.log("Server Connected");
});
