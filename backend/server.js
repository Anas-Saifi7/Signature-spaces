import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";
import reviewsRoute from "./routes/reviews.js";

dotenv.config();

// console.log("EMAIL_USER =", process.env.EMAIL_USER);
// console.log("EMAIL_PASS =", process.env.EMAIL_PASS);
// console.log("ADMIN_EMAIL =", process.env.ADMIN_EMAIL);

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewsRoute);

import transporter from "./config/mail.js";

app.get("/test-mail", async (req, res) => {
  try {
    await transporter.verify();
    console.log("SMTP Connected ✅");

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: "SMTP Test",
      text: "SMTP Working 🎉",
    });

    res.send("MAIL SENT ✅");
  } catch (err) {
    console.error(err);
    res.status(500).send(err.message);
  }
});

app.get("/", (req, res) => {
  res.send("SignatureSpace Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
