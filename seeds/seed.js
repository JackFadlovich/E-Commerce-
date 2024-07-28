const sequelize = require('../config/connection');
const Product = require('../models/Product');
const User = require('../models/User')

const userData = require("./userData.json");
const productData = require("./productData.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Product.bulkCreate(productData);

   await User.build(userData, {
    individualHooks: true,
    returning: true,
   });


   process.exit(0);

}

seedDatabase();