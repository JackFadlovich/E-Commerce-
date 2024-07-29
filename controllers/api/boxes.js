const router = require('express').Router();
const { Product, Buyer, Order, Seller, SellerProduct, Users } = require('../../models');

router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll();
    const userData = await Users.findAll();
    const buyerData = await Buyer.findAll();
    const orderData = await Order.findAll();
    const sellerData = await Seller.findAll();
    const sellerProductData = await SellerProduct.findAll();

    const products = productData.map(product => product.get({ plain: true }));
    const users = userData.map(user => user.get({ plain: true }));
    const buyers = buyerData.map(buyer => buyer.get({ plain: true }));
    const orders = orderData.map(order => order.get({ plain: true }));
    const sellers = sellerData.map(seller => seller.get({ plain: true }));
    const sellerProducts = sellerProductData.map(sellerProduct => sellerProduct.get({ plain: true }));

    res.json({ products, users, buyers, orders, sellers, sellerProducts });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

module.exports = router;
