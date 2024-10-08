var mongoose = require("mongoose");
let productSchema = mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});
// collection name
module.exports=mongoose.model('Product',productSchema)
