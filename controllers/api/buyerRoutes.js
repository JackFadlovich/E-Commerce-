const router = require("express").Router();
const { Buyer } = require("../../models");

router.post("/", async (req, res) => {
  try {
    const newBuyer = await Buyer.create({
      user_id: localStorage.getItem("user_id"),
    });
    res.status(200).json(newBuyer);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
