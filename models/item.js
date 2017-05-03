var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  price: String,
  size: String,
  stock: Number,
  image: String
})

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
