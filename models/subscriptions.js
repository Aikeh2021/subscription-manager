const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubscriptionSchema = new Schema ({
    subscription_name: {
        type: String,
        trim:true,
        required: 'Choose a subscription'
    },
    subscription_thumbnail: {
        type: String,
        trim:true,
    },
    subscription_price: {
        
        type: Number,
        required: 'Choose a subscription price'
        
    },
    subscription_category: {
        trim:true,
        type: String
    }
});

const Subscription = mongoose.model("Subscription", SubscriptionSchema);

module.exports = Subscription;