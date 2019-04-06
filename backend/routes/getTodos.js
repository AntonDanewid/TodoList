var express = require('express');
var router = express.Router();
var user = require('../models/users');
const withAuth = require('../middleware/authentication');

/* GET users listing. */
router.get('/', withAuth, function (req, res, next) {

    user.findOne({ 'username': req.username }, 'todos', function (err, user) {
        if (err) {
            console.log("does not exist");
            return handleError(err);
        }
        console.log(user);
        res.json(user.todos, 200);
    });

});

module.exports = router;
