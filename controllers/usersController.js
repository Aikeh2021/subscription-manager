const express = require('express');
const Subscription = require('../models/subscriptions');
const router = express.Router();
const User = require("../models/users");


router.post("/login/:email", (req, res) => {
    //Getting a user by their email
    console.log("login")
    User.findOne({ email: {$eq: req.body.email}}).then((foundUser) => {
        res.json(foundUser);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    })
})


router.post("/user", (req, res) => {
    //Creating a new user
    // console.log(req.body);
    User.create(req.body).then((newUser) => {
        console.log(newUser);
        res.json(newUser);
    }).catch((err) => {
        console.log(err)
        res.status(400).end();
    });
});

router.get("/populated", (req, res) => {
    User.find({}).populate("subscriptions")
    //To return the subscriptions a single user is tracking
    .then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        res.json(err);
        res.status(500).end();
    });
});

router.post("/submit", ({body}, res) => {
    //To push a new subscription into a User's array of subscriptions
    console.log("Hello")
    Subscription.create(body)
    .then(({_id}) => User.findByIdAndUpdate(body.id, { $push: {subscriptions: _id} }, { new: true }))
    .then(user => {
        console.log(user)
        res.json(user);
        res.status(400).end();
    })
    .catch(err => {
        res.json(err);

    });
});



module.exports = router;