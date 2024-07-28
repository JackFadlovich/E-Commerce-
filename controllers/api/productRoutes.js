const router = require('express').Router();
const Product = require('../../models/Product');

router.post('/', async (req, res) => {
    const newProduct = Product.create({
      product_name: 'PlaceHolder',
      category: 'Tech',
      product_description: 'Technology',
      price: '200',
      manufacturer: 'Logitech',
      product_rating: '2',
    });
    res.json(newProduct);
  });

  module.exports = router;