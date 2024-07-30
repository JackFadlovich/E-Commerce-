const router = require('express').Router();

const homeRoutes = require('./homeRoutes.js');
const apiRoutes = require('./api');
const categoryRoutes = require('./api/category');


router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/category', categoryRoutes);


router.use('/api', require('./api'));

// Route for homepage
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    const products = productData.map(product => product.get({ plain: true }));
    res.render('homepage', { products });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

// Route category pages
router.get('/category/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const productData = await Product.findAll({
      where: { category }
    });
    const products = productData.map(product => product.get({ plain: true }));
    res.render('category', { category, products });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});


module.exports = router;