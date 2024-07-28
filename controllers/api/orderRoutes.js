const router = require('express').Router();
const Order = require('../../models/Order');

router.post('/', async (req, res) => {
    const newOrder = Order.create({
      shipping_info: '123 Road Ave',
    });
    res.json(newOrder);
  });
  
  module.exports = router;