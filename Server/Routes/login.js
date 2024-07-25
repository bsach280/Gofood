const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const { body, validationResult } = require("express-validator");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const jwtsecret = "qpwbwcKKTxWXOa123##qpwbwcxWXOaQW";

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

    const { email, password } = req.body;
   // let email = req.body.email;

    console.log(`Login attempt for email: ${email}`);

    
    //wiil find if  data matches with database
    try {
      let userData = await User.findOne({ email });
      console.log(`User found for email: ${email}`);
      
      if (!userData) {
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }

      console.log('Entered password:', password);
      console.log('Stored hashed password:', userData.password);

      const pwdCompare = await bcrypt.compare( password, userData.password );
     //  if (req.body.password !== userData.password) {
      if (!pwdCompare) {
        console.log(`Password mismatch for email: ${email}`);
        return res
          .status(400)
          .json({ errors: "try to login with correct credentials" });
      }
      const data = {
        user: {
          id: userData.id,
        },
      };

      const authToken = jwt.sign(data, jwtsecret);
      res.json({ success: true, authToken: authToken });

    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);
module.exports = router;
