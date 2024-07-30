const router = require("express").Router();
const { Product } = require("../../models");

//Get all products
router.get("/", async (req, res) => {
  try {
    const allProducts = await Product.findAll({});
    console.log("Im working");

    const products = allProducts.map((product) => product.get({ plain: true})); 

    res.render('product', {
      products,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one product by name
router.get("/:category", async (req, res) => {
  Product.findByPk(req.params.category).then((productData) => {
    res.json(productData);
  });
});
//   try {
//     const oneProductData = await Product.findByPk(req.params.category);
//   //   if (!oneProductData) {
//   //     res.status(404).json({ message: "No Product found!" });
//   //     return;
//   //   }
//   //   res.status(200).json(oneProductData);
//   // } catch (err) {
//   //   res.status(500).json(err);
//   }
// });

router.post("/", async (req, res) => {
  try {
    const newProduct = await Product.create({
      product_name: req.body.product_name,
      category: req.body.category,
      product_description: req.body.product_description,
      price: req.body.price,
      manufacturer: req.body.manufacturer,
    });
    res.status(200).json(newProduct);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
