const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');

var routes = require('./routes');

const app = express();

db.connect();

const port = process.env.port || 8080;

// configure
app.use(morgan('dev'));

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve static files from /public
app.use(express.static(__dirname + '/public'));

// view engine setup
app.set('view engine', 'pug');
app.set('views', 'views');

// route set up
app.use(...routes);

// start the server

app.listen(port, () => {
  console.log('App is listening on http://localhost:' + port);
});
