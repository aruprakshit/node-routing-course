module.exports = (sequelize, Sequelize) => {
  const Contact = sequelize.define('contacts', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.TEXT,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  Contact.sync().then(() => {
    console.log('Table `contacts` created');
  });

  return Contact;
};
