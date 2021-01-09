const mongoose = require("mongoose");
const UserdataSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true,
  },
  Usermail: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
  },
  isadmin: {
    type: Boolean,
    required: false,
  },
  isowner: {
    type: Boolean,
    required: false,
  },
});
const Userdata = mongoose.model("userdata", UserdataSchema);
module.exports = Userdata;
// const mongoose = require('mongoose');
// var userSchema = new mongoose.Schema({
//     username: {
//         type: String,
//         required: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     isadmin:{
//         type: Boolean,
//         required: false
//     },
//     isowner:{
//         type: Boolean,
//         required: false
//     }
// })
// var User = mongoose.model('user', userSchema)
// module.exports = User;
