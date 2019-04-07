var express = require('express');
var router = express.Router();
const User = require('../models/users');

/* GET users listing. */

router.post('/', function (req, res, next) {
  console.log("creating..........");
  console.log(req.body);
  const { email, password } = req.body;
  console.log("GOT IT");
  const user = new User({ username: req.body.username, password: req.body.password });
  console.log(user);
  user.save(function (err) {
    if (err) {
      res.status(500)
        .send("Error registering new user please try again.");
      console.log(err);
    } else {
      res.status(200).send("Welcome to the club!");
      console.log("worked");
    }
  });

});

module.exports = router;
