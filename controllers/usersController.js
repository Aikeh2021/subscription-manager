const express = require("express");
const Subscription = require("../models/subscriptions");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");


  //Creating a new user
router.post("/", (req, res) => {
  bcrypt.hash(req.body.password, 10).then((hashedPassword) => {
    req.body.password = hashedPassword
    User.create(req.body)
    .then((newUser) => {
      // console.log(req.body);
      console.log(newUser);
      res.json(newUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).end();
    });
  })
  
});

//Finding a subscription in the subscriptions collection in the database and adding it to a user's subscription array
router.post("/subscriptions" , async (req, res) => {
  const user = await User.findById(req.user._id)
  user.subscriptions.push(req.body)
  user.save();
  res.json(user);
});

//Getting a single user's subscriptions array from the database
router.get("/subscriptions", async (req, res) => {
  const user = await User.findById(req.user._id)
  const subscriptions = [];
  for(let i =0; i < user.subscriptions.length; i++){
    subscriptions.push(await Subscription.findById(user.subscriptions[i].subscriptionId))
  }
res.json(subscriptions);
});

//Deleting a subscription from a user's subscription array
router.delete("/:id", async (req, res) => {
  const user = await User.findById(req.user._id)
  const subscriptionArr = [...user.subscriptions];
  const updatedSubsArr = subscriptionArr.filter((item) => {
      return item.subscriptionId !== req.params.id
    });
user.subscriptions = updatedSubsArr
user.save()
res.json(user)
});

//Authenticating the user
router.post("/login", (req, res) => {
  User.findOne({email:req.body.email}).then((foundUser) => {
    bcrypt.compare(req.body.password, foundUser.password).then((result) => {
      if(result){
        delete foundUser.password
        res.json({
          token: jwt.sign({data: foundUser}, "123456"), 
          user: foundUser
        })
      }
    })
  })
})


module.exports = router;
