var express = require('express');
var router = express.Router();
var user = require('../models/users');
const auth = require('../middleware/authentication')

/* GET users listing. */
router.post('/', auth, function (req, res, next) {
    console.log("Adding todo", req.body.username, req.body.todo);
    // console.log(req);
    const todoItem = req.body.todo;

    user.findOneAndUpdate({ username: req.query.username }, { $push: { todos: todoItem } },
        function (error, success) {
            if (error) {
                console.log("DET G{R INTE");
                res.send("ERROR")
            } else {
                res.send("Added " + todoItem, 200);
            }
        });
});

module.exports = router;
