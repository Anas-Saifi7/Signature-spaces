import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    city: { type: String, required: true },
    text: { type: String, required: true },
    rating: { type: Number, default: 5 }
  },
  { timestamps: true }
);

export default mongoose.model("Review", reviewSchema);
