const router = require('express').Router();
const Order = require('../../models/Order');

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
