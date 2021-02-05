const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    subscription_name: {
        type: String,
        required: 'Choose a subscription'
    },
    subscription_price: {
        type: Number,
        required: 'Choose a subscription plan'
    }
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;