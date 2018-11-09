const express = require('express')
const db = require('./routes/queries')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'This is a sample application' })
  })

app.get('/users', db.getUsers)
app.get('/expense', db.getExpense)
app.post('/expense', db.createExpense)


app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  })


  /**
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var port = 3001;
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var expenseRouter = require('./routes/expense');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/expense', expenseRouter);

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app;

 */