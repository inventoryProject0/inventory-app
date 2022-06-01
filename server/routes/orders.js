const express = require("express");
const router = express.Router();
const { Order } = require("../models");


// GET /order
router.get("/", async (req, res, next) => {
    try {
      const orders = await Order.findAll();
      res.send(orders);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;