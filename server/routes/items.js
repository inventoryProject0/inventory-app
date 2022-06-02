const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET /all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

// GET / items by id
router.get("/:id", async (req, res, next) => {
  try {
    const selectedItems = await Item.findByPk(req.params.id);
    res.send(selectedItems);
  } catch (error) {
    next(error);
  }
});

// GET /items by category
router.get("/category/:category", async (req, res, next) => {
  try {
    const items = await Item.findAll({where: {category: req.params.category}});
    res.send(items);
  } catch (error) {
    next(error);
  }
});


//POST Item
router.post("/", async (req, res, next) => {
  try {
    const [item, wasCreated] = await Item.findOrCreate({
      where: {
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        category:req.body.category,
        imageUrl: req.body.imageUrl
      }
    });
    res.send(item);
  } catch (error) {
    next(error);
  }
});

// PUT / Update item by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedItem = await Item.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedItem);
  } catch (error) {
    next(error);
  }
});


// DELETE / item by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await Item.destroy({
      where: {
        id: req.params.id
      }
    });
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

module.exports = router;