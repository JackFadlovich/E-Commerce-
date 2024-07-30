const router = require('express').Router();
const { Users } = require("../../models");

router.post('/', async (req, res) => {
  try {
    const newUser = await Users.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      phone_number: req.body.phone_number,
      user_name: req.body.user_name,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(newUser);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await Users.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userData) {
      res.status(400).json({ message: 'Incorrect email or password.'});
      return;
    }

    const authPW = await userData.checkPassword(req.body.password);

    if (!authPW) {
      res.status(400).json({ message: 'Incorrect email or password.'});
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json({ user: userData, message: 'Login successful.'});
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    })
  } else {
    res.status(404).end();
  }
});

module.exports = router;
