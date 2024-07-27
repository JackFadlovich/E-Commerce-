const router = require("express").Router();
const User = require('../../models/User');

router.post('/', async (req, res) => {
    const newUser = User.create({
        first_name: 'John',
        last_name: 'Doe',
        phone_number: '123-456-7890',
        user_name: 'JohnDoe',
        email: 'johndoe@gmail.com',
        password: 'john'
    });

    res.json(newUser);
});

module.exports = router;