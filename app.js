// importing modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');
var bodyParser = require('body-parser');

const indexRouter = require('./routes/index');

// Setting port
const port = normalizePort(process.env.PORT || '5000');

// setting express app
const app = express();

app.set('port',port);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.header === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    return res.sendStatus(200);
  }
});

app.use('/', indexRouter);

app.use(function(error, req, res, next){
  console.log(error.status + ":" + error.message)
});

app.listen(port, () => console.log(`Listening on ${ port }`));

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}
