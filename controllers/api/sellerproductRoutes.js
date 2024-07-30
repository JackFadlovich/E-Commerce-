const router = require('express').Router();
const { SellerProduct } = require("../../models");

router.post('/', async (req, res) => {
    try{
        const newSellerProduct = await SellerProduct.create({
            seller_id: localStorage.getItem("seller_id"),
            product_id: localStorage.getItem("product_id"),
        });
        res.status(200).json(newSellerProduct);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
