const db = require('../db');

const { Contact } = db;

module.exports = {
  index,
  create,
};

function index(req, resp) {
  resp.render('contacts/index');
}

function create(req, resp) {
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
}
