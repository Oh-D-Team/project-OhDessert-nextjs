import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    lat: {
      type: Number,
      required: true,
    },
    lng: {
      type: Number,
      required: true,
    },
    open: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export default mongoose.models.Product ||
  mongoose.model("Product", ProductSchema);
