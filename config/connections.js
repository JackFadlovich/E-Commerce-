const Sequelize = require('sequelize');

const sequelize = new Sequelize(
'commerce_db',    
'USER',
'PASSWORD',

{
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;