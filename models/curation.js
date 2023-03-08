import mongoose from "mongoose";

const CurationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    sub: {
      type: String,
      required: true,
    },
    shop1: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
    shop2: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
    shop3: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "Product",
    },
    contentId: {
      type: Number,
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Curation ||
  mongoose.model("Curation", CurationSchema);
