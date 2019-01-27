const Sequelize = require('sequelize');
const ContactModel = require('./models/contact');


const sequelize = new Sequelize('node_contact_app', 'finley', 'password', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Contact = ContactModel(sequelize, Sequelize);

module.exports = {
  connect: () => {
    sequelize
      .authenticate()
      .then(() => {
        console.log('Connection has been established successfully.');
      })
      .catch(err => {
        console.error('Unable to connect to the database:', err);
      });
  },
  Contact
};

// https://dev.mysql.com/doc/refman/8.0/en/sha256-pluggable-authentication.html
// https://dev.mysql.com/doc/refman/8.0/en/adding-users.html
// CREATE USER 'finley'@'localhost' IDENTIFIED WITH sha256_password BY 'Password_@12';
// GRANT ALL PRIVILEGES ON *.* TO 'finley'@'localhost' WITH GRANT OPTION;
// ALTER USER 'finley'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password'
// https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz
