const express = require('express');
const Subscription = require('../models/subscriptions');
const router = express.Router();
const User = require("../models/users");


router.get("/:email", (req, res) => {
    //Getting a user by their email
    User.findOne({ email: {$eq: req.body.email}}).then((foundUser) => {
        res.json(foundUser);
    }).catch((err) => {
        console.log(err);
        res.status(404).end();
    })
})

// router.get("/:id", (req, res) => {
//     //Getting a user by their id
//     User.findById(req.params.id).then((foundUser) => {
//         res.json(foundUser);
//     }).catch((err) => {
//         console.log(err);
//         res.status(404).end();
//     })
// })

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



// app.post("/submit", ({body}, res) => {
//     db.Book.create(body)
//       .then(({_id}) => db.Library.findOneAndUpdate({}, { $push: { books: _id } }, { new: true }))
//       .then(dbLibrary => {
//         res.json(dbLibrary);
//       })
//       .catch(err => {
//         res.json(err);
//       });
//   });



// router.post("/submitNew", ({body}, res) => {
//     Subscription.create(body).then(({_id} => db.User.findOneAndUPdate({}, { $push: {subscriptions: _id} }, {new:true})))
//     .then((usersNewSub) => {
//         res.json(usersNewSub);
//     }).catch((err) => {
//         console.log(err);
//     })
// })
// router.post("/submitNew", ({body}, res) => {
//     User.create(body).then(({_id}) => db.)
// })

router.get("/populated", (req, res) => {
    User.find({}).populate("subscriptions")
    //To return the subscriptions a single user is tracking
    .then(dbUser => {
        res.json(dbUser);
    }).catch(err => {
        res.json(err);
    });
});

router.post("/submit", ({body}, res) => {
    Subscription.create(body)
    .then(({_id}) => User.findOneAndUpdate({}, { $push: {subscriptions: _id} }, { new: true }))
    .then(user => {
        res.json(user);
    })
    .catch(err => {
        res.json(err);
    });
});

//To push a new subscription into a User's array of subscriptions

module.exports = router;