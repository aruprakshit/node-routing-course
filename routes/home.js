const express = require('express');
const router = express.Router();

const db = require('../db');

const { Contact } = db;

router.get('/', (req, resp) => {
  Contact.findAll({
    attributes: ['name', 'email', 'message'],
  }).then(contacts => {
    resp.render('home/index', { contacts });
  });
});

module.exports = router;
