var express = require('express');
var router = express.Router();
var user = require('../models/users');
const jwt = require('jsonwebtoken');
const secret = 'draganTheGreat';



/* GET users listing. */
router.get('/', function (req, res, next) {
    console.log(req.query.username);
    console.log(req.query.password);
    const username = req.query.username;

    user.findOne({ 'username': req.query.username }, 'username password', function (err, user) {
        if (err) {
            console.log("does not exist");
            res.send(401);
            return handleError(err);
        }

        console.log(user.isCorrectPassword(req.query.password, (err, same) => {
            if (same) {
                const payload = { username };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '1h'
                });
                res.cookie('token', token, { httpOnly: true })
                    .sendStatus(200);
            } else {
                res.send(401)
            }
        }));
        console.log(user.username);
    });

});

module.exports = router;
