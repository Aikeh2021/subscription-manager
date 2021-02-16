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
    {
      type: Schema.Types.ObjectId,
      ref: "Subscription"
    }
  ]
  // books: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Book"
  //   }
  // ]
  // subscription_name: {
  //     type: String,

  // },
  // subscription_plan: {
  //     type: String,

  // },
  // subscription_price: {
  //     type: String,

  // }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
