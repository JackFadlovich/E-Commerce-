const express = require("express");
const sequelize = require("./config/connections");
const controllers = require('./controllers');
// const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
// const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
// app.engine('handlebars', hbs.engine);
// app.set('view engine', 'handlebars');

//Calling in the models to create the databases
const model = require('./models');
// const model = require("./models/Buyer");
// const model = require('');
// const model = require('');
// const model = require('');
// const model = require('');

app.use(controllers);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("server started");
  })
});
