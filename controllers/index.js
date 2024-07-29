const router = require('express').Router();

const apiRoutes = require('./api');

router.use('/api', apiRoutes);


const {Product} = require('../models'); // Ensure this matches the export in models/index.js

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    //const users = await User();
    
    // Render the data in the view
    res.render('index', { products, //users 

    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});






module.exports = router;


