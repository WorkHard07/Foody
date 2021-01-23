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
  user: {
    type: Schema.Types.ObjectId,
    ref: "order_owner",
  },
});

export default mongoose.model("Orders", orderSchema);
