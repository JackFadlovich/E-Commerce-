const router = require('express').Router();
const { Product } = require('../../models');

router.get('/:category', async (req, res) => {
  try {
    const category = req.params.category;
    const productData = await Product.findAll({
      where: {
        category: category
      }
    });

    const products = productData.map(product => product.get({ plain: true }));

    res.render('category', { products, category });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch products by category' });
  }
});

module.exports = router;
