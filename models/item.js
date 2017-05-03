var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
  name: String,
  price: Number,
  size: String,
  stock: Number,
  note: String,
  image: String
})

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
