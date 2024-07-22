const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");


router.post("/loginuser",
    //validations
    body("email").isEmail(),
    body("password", "password must have 6 char").isLength({ min: 6 }),
    
  
    async (req, res) => {
    
      // Finds the validation errors in this request and wraps them in an object with handy functions
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
    let email = req.body.email;
    //wiil find if  data matches with database
    try {
      let userData = await User.findOne({ email });
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }
      if (req.body.password !== userData.password) {
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }
  
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  });
module.exports = router;
