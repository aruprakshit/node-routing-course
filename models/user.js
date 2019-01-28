module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('contacts', {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    firstName: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    addressOne: {
      type: Sequelize.STRING,
    },
    addressTwo: {
      type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

  User.sync().then(() => {
    console.log('Table `contacts` created');
  });

  return User;
};
