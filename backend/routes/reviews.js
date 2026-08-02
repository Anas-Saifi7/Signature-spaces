import express from "express";
import Review from "../models/Review.js";

const router = express.Router();

/* GET all reviews */
router.get("/", async (req, res) => {
  try {
    const reviews = await Review.find().sort({ createdAt: -1 });

    res.status(200).json(reviews);
  } catch (err) {
    console.error(err);

    res.status(500).json({
      success: false,
      message: "Failed to fetch reviews",
    });
  }
});

/* POST new review */
router.post("/", async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});





export default router;
