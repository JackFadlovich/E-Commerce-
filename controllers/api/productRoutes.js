const router = require("express").Router();
const { Product } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create({
      product_name: req.body.product_name,
      category: req.body.category,
      product_description: req.body.product_description,
      price: req.body.price,
      manufacturer: req.body.manufacturer,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
