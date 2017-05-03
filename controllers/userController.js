var User = require("../models/user");

exports.create = (req, res, next) => {
  var newUser = User({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    address: req.body.address,
    zipcode: req.body.zipcode,
    phone: req.body.phone
  })

  newUser.save( (err, user) => {
    if(err) res.send(err);

    res.send(user)
  })

}
