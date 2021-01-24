import mongoose from "mongoose";
const Schema = mongoose.Schema;
const menuSchema = new Schema({
  cathegory: {
    type: String,
    /*enum:['pizzas','sandwiches','snacks','other'],*/
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },
  resto: {
    type: Schema.Types.ObjectId,
    ref: "resto",
    required:true
  },
});

export default mongoose.model("Menu", menuSchema);
