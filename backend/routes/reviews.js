import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

/* GET all reviews */
router.get("/", async (req, res) => {
  const reviews = await Review.find().sort({ createdAt: -1 });
  res.json(reviews);
});

/* POST new review */
router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

/* UPDATE review */
router.put("/:id", async (req, res) => {
  const updated = await Review.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
});

/* DELETE review */
router.delete("/:id", async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.json({ message: "Review deleted" });
});

export default router;
