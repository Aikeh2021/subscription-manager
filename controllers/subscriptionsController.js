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

router.post("/", (req, res) => {
    console.log(req.body);
    Subscription.create(req.body).then((newSubscription) => {
        console.log(newSubscription);
        res.json(newSubscription);
    });
});

router.put("/:id", (req, res) => {
    Subscription.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((updatedSubscription) => {
        res.json(updatedSubscription);
    }); 
})


module.exports = router;