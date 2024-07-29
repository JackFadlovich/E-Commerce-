const router = require('express').Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');
const boxesRoutes = require('./boxes')

router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
router.use('/boxes', boxesRoutes);

module.exports = router;
