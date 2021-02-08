const express = require('express');
const router = express.Router();
const Subscription = require("../models/subscriptions");

router.get("/", (req, res) => {
    Subscription.find().then((subscriptions) => {
        res.json(subscriptions);
    }).catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

module.exports = router;