const express = require('express');
const router = express.Router();
const User = require("../models/users");

router.get("/", (req, res) => {
    
})

router.post("/", (req, res) => {
    console.log(req.body);
    User.create(req.body).then((newUser) => {
        console.log(newUser);
        res.json(newUser);
    }).catch((err) => {
        console.log(err)
    });
});

module.exports = router;