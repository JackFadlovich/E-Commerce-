const router = require('express').Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');

router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);

module.exports = router;
