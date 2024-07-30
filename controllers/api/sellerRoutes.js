const router = require("express").Router();
const { Seller } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newSeller = await Seller.create({
      user_id: localStorage.getItem("user_id"),
    });
    res.status(200).json(newSeller);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
