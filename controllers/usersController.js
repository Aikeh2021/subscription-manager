const express = require('express');
const router = express.Router();
const User = require("../models/users");

router.get("/:id", (req, res) => {
    //Getting a user by their id
    User.findById(req.params.id).then((foundUser) => {
        res.json(foundUser);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    })
})

router.post("/", (req, res) => {
    //Creating a new user
    // console.log(req.body);
    User.create(req.body).then((newUser) => {
        console.log(newUser);
        res.json(newUser);
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;