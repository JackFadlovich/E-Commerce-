const router = require("express").Router();

<<<<<<< HEAD
const userRoutes = require('./userRoutes');
const productRoutes = require('./productRoutes');
const orderRoutes = require('./orderRoutes');
const boxesRoutes = require('./boxes')

router.use('/users', userRoutes);
router.use('/product', productRoutes);
router.use('/order', orderRoutes);
router.use('/boxes', boxesRoutes);
=======
const userRoutes = require("./userRoutes");
const productRoutes = require("./productRoutes");
const orderRoutes = require("./orderRoutes");
const buyerRoutes = require("./buyerRoutes");
const sellerRoutes = require("./sellerRoutes");
const sellerproductRoutes = require("./sellerproductRoutes");

router.use("/users", userRoutes);
router.use("/product", productRoutes);
router.use("/order", orderRoutes);
router.use("/buyer", buyerRoutes);
router.use("/seller", sellerRoutes);
router.use("/sellerproduct", sellerproductRoutes);
>>>>>>> 0aab8c23f90aab8e0790f902fa42132892fe9feb

module.exports = router;
