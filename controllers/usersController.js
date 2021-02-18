const express = require("express");
const Subscription = require("../models/subscriptions");
const router = express.Router();
const User = require("../models/users");

  //Creating a new user
router.post("/", (req, res) => {
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

//Finding a subscription in the subscriptions collection in the database and adding it to a user's subscription array
router.post("/subscriptions" , async (req, res) => {
  const user = await User.findById(req.user.id)
  user.subscriptions.push(req.body)
  user.save();
  res.json(user);
});

//Getting a single user's subscriptions array from the database
router.get("/subscriptions", async (req, res) => {
  const user = await User.findById(req.user.id)
  const subscriptions = [];
  for(let i =0; i < user.subscriptions.length; i++){
    subscriptions.push(await Subscription.findById(user.subscriptions[i].subscriptionId))
  }
res.json(subscriptions);
});

//Deleting a subscription from a user's subscription array
// router.delete("/:id", (req, res) => {

// })



module.exports = router;
