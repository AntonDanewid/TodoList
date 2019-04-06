var express = require('express');
var router = express.Router();
var user = require('../models/users');
const jwt = require('jsonwebtoken');
const secret = 'draganTheGreat';



/* GET users listing. */
router.post('/', function (req, res, next) {
    console.log(req.body.username);
    console.log(req.body.password);
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;

    if (!username) {
        console.log("No usernane");
        res.send(401);
        return;
    }
    if (!password) {
        console.log("No password");
        res.send(401);
        return;
    }

    user.findOne({ 'username': username }, 'username password', function (err, user) {
        if (err) {
            console.log("does not exist");
            res.send(401);
            return handleError(err);
        }
        console.log("The user is ", user);
        if (user === null) {
            console.log("The user was null");
            res.send(401);
            return;
        }

        console.log(user.isCorrectPassword(password, (err, same) => {
            if (same) {
                console.log("Exists");
                const payload = { username };
                const token = jwt.sign(payload, secret, {
                    expiresIn: '1h'
                });
                res.cookie('token', token, { httpOnly: true })
                    .sendStatus(200);
                return;
            } else {
                console.log("Does not exist");
                res.send(401)
                return;
            }
        }));
    });

});

module.exports = router;
