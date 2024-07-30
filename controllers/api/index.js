const router = require("express").Router();

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

module.exports = router;
