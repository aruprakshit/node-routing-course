const express = require('express');
const router = express.Router();

const { index, create } = require('../controllers/contacts');

router
  .route('/contacts')
  .get('/', index)
  .post('/', create);

module.exports = router;
