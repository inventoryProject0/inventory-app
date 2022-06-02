const express = require("express");
const router = express.Router();
const { User } = require("../models");

// GET / all users
router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});
// GET / single user by id
router.get("/:id", async (req, res, next) => {
  try {
    const singleUser = await User.findByPk(req.params.id);
    res.send(singleUser);
  } catch (error) {
    next(error);
  }
});

//POST User
router.post("/", async (req, res, next) => {
  try {
    const [user, wasCreated] = await User.findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password,
        email: req.body.email
      }
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
});

// PUT / Update user by id 
router.put("/:id", async (req, res, next) => {
  try {
    const updatedUser = await User.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    res.send(updatedUser);
  } catch (error) {
    next(error);
  }
});


// DELETE / user by id 
router.delete("/:id", async (req, res, next) => {
  try {
    await User.destroy({
      where: {
        id: req.params.id
      }
    });
    const users = await User.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
});


module.exports = router;