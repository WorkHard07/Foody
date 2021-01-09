const mongoose = require("mongoose");
///------------------------------- Schema----------------------------///
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
