const sequelize = require('../config/connection');
const Product = require('../models/Product');
const Users = require('../models/Users')

const userData = require("./userData.json");
const productData = require("./productData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData);

   await Users.bulkCreate(userData);
  //  , {
  //   individualHooks: true,
  //   returning: true,
  //  });


   process.exit(0);

}

seedDatabase();