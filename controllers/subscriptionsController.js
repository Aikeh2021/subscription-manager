const express = require('express');
const router = express.Router();
const Subscription = require("../models/subscriptions");

router.get("/", (req, res) => {
    //Get all the subscriptions in the database
    Subscription.find().then((subscriptions) => {
        res.json(subscriptions);
    }).catch((err) => {
        console.log(err);
        res.status(500).end();
    });
});

router.get("/:id", (req, res) => {
    // Update foundSubscription to featuredSubscription
    Subscription.findById(req.params.id).then((featuredSubscription) => {
        res.json(featuredSubscription)
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    })
})

router.post("/", (req, res) => {
    //Create a new subscription
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
    //Update an existing subscription
    Subscription.findByIdAndUpdate(req.params.id, req.body, {new:true}).then((updatedSubscription) => {
        res.json(updatedSubscription);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    }); 
});

router.delete("/:id", (req, res) => {
    //Delete a subscription from the database
    Subscription.findByIdAndDelete(req.params.id).then((response) => {
        res.json(response);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    });
});


module.exports = router;