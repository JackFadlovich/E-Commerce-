const router = require("express").Router();

const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const ordersRoutes = require('./ordersRoutes');

router.use('/User', userRoutes);
router.use('/Product', productRoutes);
router.use('/Orders', ordersRoutes);

module.exports = router;
