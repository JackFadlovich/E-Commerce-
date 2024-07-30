const router = require("express").Router();
const { Product } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({});

    const products = allProducts.map((product) => product.get({ plain: true }));

    res.render("homepage", {
      products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
