const Sequelize = require('sequelize');
// change db name, username, and password as appropriate here
module.exports = new Sequelize('your-db', 'your-username', 'your-password', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }

});