const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/api');
const helpers = require('./utils/helpers.js');

const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers });

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/api/productRoutes'));
// Use the routes defined in controllers
// app.use(routes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server started`);
  });
});
