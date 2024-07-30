const router = require('express').Router();

// Render the profile page
router.get('/', (req, res) => {
  res.render('profile');
});

module.exports = router;
