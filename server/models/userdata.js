import  mongoose  from "mongoose" ;
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
export default Userdata ;
