const express = require('express');
const router = express.Router();

const db = require('../db');

const { Contact } = db;

router.get('/', (req, resp) => {
  resp.render('contacts/index');
});

router.post('/contacts', function(req, resp) {
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
    return resp.redirect('/');
  });
});

module.exports = router;
