const router = require('express').Router();
const { Order } = require("../../models");

router.get('/order', async (req, res) => {
  try {
    const allOrders = await Order.findAll();
    console.log('all orders');
    res.status(200).json(allOrders);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create({
      shipping_info: req.body.shipping_info,
    });
    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
