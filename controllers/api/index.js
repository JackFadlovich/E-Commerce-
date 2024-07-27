const router = require("express").Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const ordersRoutes = require('./ordersRoutes');

router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/orders', ordersRoutes);

module.exports = router;
