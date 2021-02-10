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

router.get("/:id", (req, res) => {
    Subscription.findById(req.params.id).then((foundSubscription) => {
        res.json(foundSubscription)
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    })
})

router.post("/", (req, res) => {
    console.log(req.body);
    Subscription.create(req.body).then((newSubscription) => {
        console.log(newSubscription);
        res.json(newSubscription);
    }).catch((err) => {
        console.log(err);
        res.status(400).end();
    });
});

router.put("/:id", (req, res) => {
    Subscription.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((updatedSubscription) => {
        res.json(updatedSubscription);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    }); 
});

router.delete("/:id", (req, res) => {
    Subscription.findByIdAndDelete(req.params.id).then((response) => {
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    });
});


module.exports = router;