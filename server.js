const express = require('express');
const routes = require('./controllers/index');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const path = require('path');
const helpers = require('./views/helpers.js');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

app.use(express.static(path.join(__dirname, 'public')));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the routes defined in controllers
app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started`);
  });
});
