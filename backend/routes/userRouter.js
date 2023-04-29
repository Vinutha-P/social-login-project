const router = require("express").Router();
const User = require("../models/userModel");
const { registerValidation } = require("../validate");
const { v4: uuidv4 } = require("uuid");

router.post("/signup", async (req, res, next) => {
  //Input Validation
  const valid = registerValidation(req.body);
  if (valid.error) {
    return res.status(422).send(valid.error.details[0].message);
  }
  const user = new User({
    userId: req.body.userId,
    name: req.body.name,
    email: req.body.email,
  });
  try {
    //save user to db
    const savedUser = await user.save();
    //send response to client
    const response = {
      message: "User created successfully",
      id: user._id,
    };
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
  next();
  let token = "token";

  res.status(200).send(token);
});

module.exports = router;
