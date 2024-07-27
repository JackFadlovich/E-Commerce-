const router = require("express").Router();
const User = require('../../models/User');
const Product = require("../../models/Product");
const Orders = require('../../models/Orders');

router.post('/', async (req, res) => {
    const newUser = User.create({
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '1234567890',
        user_name: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'john'
    });

    res.json(newUser);
});

router.post("/", async (req, res) => {
  const newProduct = Product.create({
    product_name: "PlaceHolder",
    category: "Tech",
    product_description: "Technology",
    price: "200",
    manufacturer: "Logitech",
    product_rating: "2",
  });
  res.json(newProduct);
});

router.post("/", async (req, res) => {
    const newOrder = Orders.create({
        shipping_info: "123 Road Ave",
    });
    res.json(newOrder);
});

module.exports = router;
