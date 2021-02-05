const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    first_name: {
        type: String,
        required: 'Please enter your first name'
    },
    last_name: {
        type: String,
        required: 'Please enter your last name'
    },
    email: {
        type: String,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    password: {
        type: String,
        required: 'Password must be at least 5 characters'
    },
    subscriptions: [
        {
        type: Schema.Types.ObjectId,
        ref:"Subscription"
        }
    ]
});

const User = mongoose.model("User", UserSchema);

module.exports = User;