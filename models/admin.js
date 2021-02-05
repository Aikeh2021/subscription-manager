const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema ({
    userName: {
        type: String,
        required: 'Please input a username'
    }
});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;