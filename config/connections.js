const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} 
else {
  
    sequelize = new Sequelize(
   // process.env.DB_USER,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = {
    sequelize
}