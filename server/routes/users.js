const express = require("express");
const router = express.Router();
const { User } = require("../models");


// GET /user
router.get("/", async (req, res, next) => {
    try {
      const users = await User.findAll();
      res.send(users);
    } catch (error) {
      next(error);
    }
  });
  
  module.exports = router;