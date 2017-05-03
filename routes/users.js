var express = require('express');
const passport = require('passport');

var router = express.Router();
var user_controller = require('../controllers/userController');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create user
router.post('/signup', user_controller.signup);
// router.post('/signin', user_controller.signin);
router.post('/signin', passport.authenticate('local', {session: false}) ,user_controller.signin_passport);

module.exports = router;
