const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema ({

});

const Admin = mongoose.model("Admin", AdminSchema);

module.exports = Admin;