const router = require("express").Router();
const { Product, Seller, Buyer, Order, Users, SellerProduct  } = require("../models");

//Display all categories of items being sold on homepage
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

//Display all products being sold on product page
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

//Display form to sell products and products being sold by user
router.get('/profile', async (req, res) => {
  try {
    const profileData = await Users.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Product, SellerProduct, Seller, Buyer, Order }]
    });

    const profile = profileData.get({ plain: true });

    res.render('profile', {
      ...profile,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


//Login route and redirect if already logged in
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }
  res.render('login');
})

module.exports = router;
