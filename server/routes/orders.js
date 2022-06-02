const express = require("express");
const router = express.Router();
const { Order } = require("../models");

// GET / all orders
router.get("/", async (req, res, next) => {
  try {
    const orders = await Order.findAll();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

// GET / order by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedOrder = await Order.findByPk(req.params.id);
    res.send(selectedOrder);
  } catch (error) {
    next(error);
  }
});

//POST order
router.post("/", async (req, res, next) => {
  try {
    const [order, wasCreated] = await Order.findOrCreate({
      where: {
        itemName: req.body.itemName,
        description: req.body.description,
        quantity: req.body.quantity,
        orderDate:req.body.orderDate
      }
    });
    res.send(order);
  } catch (error) {
    next(error);
  }
});

// PUT / Update order id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedOrder = await Order.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedOrder);
  } catch (error) {
    next(error);
  }
});


// DELETE / order by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Order.destroy({
      where: {
        id: req.params.id
      }
    });
    const orders = await Order.findAll();
    res.send(orders);
  } catch (error) {
    next(error);
  }
});

module.exports = router;