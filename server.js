const express =  require('express');
const sequelize = require('./config/connections')

const app = express();
const PORT = process.env.PORT || 3001;


sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log('server started');
    });
});