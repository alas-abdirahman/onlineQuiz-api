const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  tel: {
    type: Number,
    required: true,
    unique: true
  },
 
usename:{
  type: String,
  require: true,
  unique: true
},
password: {
  type: String,
  require: true,
},

status: {
  type: String,
  default: "Active"
}
});

module.exports = mongoose.model('Admin', Admin, 'Admins');