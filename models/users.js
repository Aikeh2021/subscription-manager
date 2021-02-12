const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    subscription_name: {
        type: String,
    
    },
    subscription_plan: {
        type: String,
    
    },
    subscription_price: {
        type: String,
  
    }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;