const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const db = require('./db');
const { Contact } = db;

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
app.get('/', (req, resp) => {
  resp.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, resp) => {
  resp.send('I am the about page.');
});

app.get('/contact', (req, resp) => {
  resp.render('contacts/index');
});

app.post('/contact', function(req, resp) {
  const { name, email, message } = req.body;
  const contact = Contact.build({
    name,
    email,
    message,
    createdAt: new Date(),
    updatedAt: new Date(),
  });

  contact.save().then(() => {
    console.log(`${contact.email} is created successfully..`);
    return resp.redirect('/contact');
  });
});

// start the server

app.listen(port, () => {
  console.log('App is listening on http://localhost:' + port);
});
