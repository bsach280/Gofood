const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");

router.post(
  "/createuser",
  // username must be an email
  body("name","name must have min 4 char").isLength({ min: 4 }),
  body("email").isEmail(),
  // password must be at least 5 chars long
  body("password","password must have 6 char").isLength({ min: 6 }),
  body("location", "location is required").notEmpty(),


  async (req, res) => {
    console.log(" create User Request Body:", req.body); 
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        location: req.body.location,
      });

      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
