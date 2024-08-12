var express = require("express");
var Product = require("../models/product");

var router = express.Router();

router.get("/getAllProducts", (req, res) => {
  var pageNumber = +req.query.page;
  var pageSize = 5;
  let myQuery = Product.find();
  let productList;
  if (pageSize && pageNumber) {
    myQuery.skip(pageSize * (pageNumber - 1)).limit(pageSize);
  }
  myQuery
    .then((data) => {
      productList = data;
      return Product.countDocuments({})
    })
    .then((procuctCount) => {
      res.status(200).json({
        totalCount: procuctCount,
        productsData: productList,
      });
    })
    .catch((err) => {
      console.log("error getting products");
      //   console.log(err);
    });
});

router.post("/addProduct", (req, res) => {
  var data = req.body;
  var newProduct = new Product({
    id: data.id,
    title: data.title,
    price: data.price,
    description: data.description,
    category: data.category,
    image: data.image,
    rating: { rate: data.rating.rate, count: data.rating.count },
  });

  try {
    newProduct.save().then(() => {
      console.log("product added sussfully");
      res.send({ mse: "product added sucssfully" });
    });
  } catch (error) {
    console.log("Error adding Product");
    res.send({ mse: "Error adding Product" });
  }
});

// getById/:id
router.get("/getById/:id", (req, res) => {
  var prodId = +req.params.id;
  console.log(req.params.id);
  Product.findOne({ id: prodId })
    .then((product) => {
      if (product) {
        res.json(product);
      } else {
        res.json({ msg: "No Product with this id" });
      }
    })
    .catch((err) => {
      console.log(err);
    });
});

// get all products

module.exports = router;
