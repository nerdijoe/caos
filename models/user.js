var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  address: String,
  zipcode: String,
  phone: String
})

var User = mongoose.model('User', userSchema);

module.exports = User;
