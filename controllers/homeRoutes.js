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

//Get all products
router.get("/product", async (req, res) => {
  try {
    const allProducts = await Product.findAll({});
    console.log("Im working");

    const products = allProducts.map((product) => product.get({ plain: true})); 

    res.render('product', {
      products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
})

module.exports = router;
