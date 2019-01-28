const db = require('../db');

const { Contact } = db;

module.exports = {
  index,
};

function index(req, resp) {
  Contact.findAll({
    attributes: ['name', 'email', 'message'],
  }).then(contacts => {
    resp.render('home/index', { contacts });
  });
}
