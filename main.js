//importing modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const express = require('express');

const port = normalizePort(process.env.PORT || '5000');

const indexRouter = require('./routes/index');

const app = express();

app.set('port',port);

//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.listen(port, () => console.log(`Listening on ${ port }`));

//http.createServer(function (req, res) {
  //fs.readFile('demo.html', function(err, data) {
    //res.writeHead(200, {'Content-Type': 'text/html'});
    //res.write(data);
    //return res.end();
  //});
//}).listen(port);


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
