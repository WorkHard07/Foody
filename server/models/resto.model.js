import mongoose from "mongoose";
const Schema = mongoose.Schema;
const restoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  restaurantName: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },
  partner: {
    type: String,
    default: "none",
  },

  password: {
    type: String,
  },
  menus:[ {
    type: Schema.Types.ObjectId,
    ref: "menus",
  }],
  isowner: {
    type: Boolean,
    required: true,
    default:true
  },
});

export default mongoose.model("Resto", restoSchema);
