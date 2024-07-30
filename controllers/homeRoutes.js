const router = require("express").Router();
const { Product, Seller } = require("../models");

router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({
      include: [
        {
          model: Seller,
          attributes: ["seller_id"],
        },
      ],
    });

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
