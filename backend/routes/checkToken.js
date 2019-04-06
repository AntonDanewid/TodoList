var express = require('express');
var router = express.Router();
const User = require('../models/users');
const withAUth = require('../middleware/authentication')


router.get('/', withAUth, function (req, res, next) {
    res.send(200);

});

module.exports = router;
