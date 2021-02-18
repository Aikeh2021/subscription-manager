const express = require("express");
const Subscription = require("../models/subscriptions");
const router = express.Router();
const User = require("../models/users");


router.post("/", (req, res) => {
  //Creating a new user
  // console.log(req.body);
  User.create(req.body)
    .then((newUser) => {
      console.log(newUser);
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
});

router.post("/subscriptions" , async (req, res) => {
  const user = await User.findById(req.user.id)
  user.subscriptions.push(req.body)
  user.save();
  res.json(user);
});

router.get("/subscriptions", async (req, res) => {
  const user = await User.findById(req.user.id)
  const subscriptions = [];
  for(let i =0; i < user.subscriptions.length; i++){
    subscriptions.push(await Subscription.findById(user.subscriptions[i].subscriptionId))
  }
res.json(subscriptions);
});




module.exports = router;
