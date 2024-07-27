const router = require("express").Router();
const Orders = require("../../models/Orders");

router.post("/", async (req, res) => {
    const newOrder = Orders.create({
      shipping_info: "123 Road Ave",
    });
    res.json(newOrder);
  });
  
  module.exports = router;