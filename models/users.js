const mongoose = require("mongoose");
const { stringify } = require("querystring");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },

  subscriptions: [

  ],
  
  isAdmin: {
    type: Boolean,
    default: false
  }
  
});


const User = mongoose.model("User", UserSchema);

module.exports = User;
