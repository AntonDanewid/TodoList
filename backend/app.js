var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var userSchema = require('./models/users');
var cors = require('cors');
const bodyParser= require('body-parser')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createUserRouter = require('./routes/createUser');
var loginRouter = require('./routes/login');
var addTodoRouter = require('./routes/addTodo');
var getTodosRouter = require('./routes/getTodos');


const secret = 'draganTheGreat';


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}))
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/createUser', createUserRouter);
app.use('/login', loginRouter);
app.use('/addTodo', addTodoRouter);
app.use('/getTodos', getTodosRouter);



var port = 3001;

const mongoose = require('mongoose');
const mongo_uri = 'mongodb://localhost:27017/todoList';
mongoose.connect(mongo_uri, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongo_uri}`);
  }
});



// app.get('/', function (req, res) {
//   res.send('hello world')
// })

// app.get('/users', function (req, res) {
//   res.send('hello user')
// });

// app.get('/users/lol', function (req, res) {
//   res.send('ASDSADSADS')
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







// app.listen(port, () => console.log(`Example app listening on port ${port}!`))

module.exports = app;
