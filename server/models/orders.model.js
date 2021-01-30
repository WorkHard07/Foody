import mongoose from "mongoose";
const Schema = mongoose.Schema;
const orderSchema = new Schema({
  menus: [
    {
      type: Schema.Types.ObjectId,
      ref: "menu",
    },
  ],
  resto: {
    type: Schema.Types.ObjectId,
    ref: "resto",
  },
  userName: {
    type: String,
  },
  deliveryAddress:{
    type:String,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "order_owner",
  },
  total: {
    type: Number,
    ref: "total",
  },
  phoneNumber: {
    type: Number,
  }
});
export default mongoose.model("Orders", orderSchema);
