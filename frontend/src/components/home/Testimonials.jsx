import { useEffect, useState } from "react";
import axios from "axios";
import {
  FaChevronLeft,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
} from "react-icons/fa";
import { motion } from "framer-motion";

import { testimonials as staticTestimonials } from "../../data/testimonialsData";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);
const [loading, setLoading] = useState(true);
  const fetchReviews = async () => {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/api/reviews`,
      {
        // timeout: 10000,
      }
    );

    const realReviews = data.filter(
      (review) =>
        review.name?.trim() &&
        review.city?.trim() &&
        review.text?.trim()
    );

    setReviews([...staticTestimonials, ...realReviews]);
  } catch (err) {
    console.error(err);
    setReviews(staticTestimonials);
  } finally {
    setLoading(false);
  }
};
   

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    if (!reviews.length) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [reviews]);

if (loading) {
  return (
    <section className="py-24 text-center">
      <p className="text-gray-500 text-lg">
        Loading testimonials...
      </p>
    </section>
  );
}

if (!reviews.length) {
  return null;
}

 useEffect(() => {
  if (current >= reviews.length) {
    setCurrent(0);
  }
}, [reviews, current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? reviews.length - 1 : prev - 1
    );
  };

const initials = (review?.name || "Guest")
  .split(" ")
  .map((i) => i[0])
  .join("")
  .toUpperCase();

  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-b from-[#faf7f2] via-white to-[#faf7f2]">

      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#b88c4a]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}

        <div className="text-center">

          <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#b88c4a]/10 text-[#b88c4a] uppercase tracking-widest text-sm font-semibold">

            Testimonials

          </span>

          <h2 className="mt-6 text-5xl font-bold">

            What Our

            <span className="text-[#b88c4a]">

              {" "}Clients Say

            </span>

          </h2>

          <p className="mt-5 text-gray-600 max-w-3xl mx-auto">

            Real experiences from homeowners and businesses who trusted Signature Space Studio Interiors.

          </p>

          <div className="mt-8 flex justify-center gap-1">

            {[1,2,3,4,5].map((i)=>

              <FaStar
                key={i}
                className="text-[#b88c4a] text-xl"
              />

            )}

          </div>

          <p className="mt-3 font-semibold">

            Rated 4.9 by Hundreds of Happy Clients

          </p>

        </div>

        {/* Premium Review Card */}

<div className="mt-16 relative">

  {/* <div className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-gray-100 p-10 md:p-16"> */}
  <motion.div
  key={current}
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="bg-white/90 backdrop-blur-xl rounded-[32px] shadow-[0_20px_80px_rgba(0,0,0,.08)] border border-gray-100 p-10 md:p-16"
>

    {/* Quote */}

    <div className="flex justify-center">

      <div className="w-20 h-20 rounded-full bg-[#b88c4a]/10 flex items-center justify-center">

        <FaQuoteLeft className="text-[#b88c4a] text-3xl" />

      </div>

    </div>

    {/* Review */}

    <p className="mt-8 text-xl leading-9 text-gray-700 text-center max-w-3xl mx-auto">

      "{review?.text || "Amazing Interior Work!"}"

    </p>

    {/* Stars */}

    <div className="flex justify-center gap-1 mt-8">

      {Array.from({ length: review.rating || 5 }).map((_, index) => (

        <FaStar
          key={index}
          className="text-[#b88c4a] text-xl"
        />

      ))}

    </div>

    {/* Client */}

    <div className="mt-10 flex flex-col items-center">

      <div className="w-20 h-20 rounded-full bg-[#b88c4a] text-white text-2xl font-bold flex items-center justify-center shadow-lg">

        {initials}

      </div>

      <h3 className="mt-5 text-2xl font-bold text-gray-900">

       {review?.name || "Guest"}

      </h3>

      <p className="text-gray-500">

      {review?.city || "India"}

      </p>

    </div>

    {/* Navigation */}

<div className="flex items-center justify-center gap-8 mt-10">

<button
  onClick={prevSlide}
  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#b88c4a] hover:text-white transition-all duration-300"
>
  <FaChevronLeft />
</button>

<p className="font-semibold text-[#b88c4a]">
   <span className="text-lg font-bold tracking-wider text-[#b88c4a]">
  {current + 1} / {reviews.length}
</span>
</p>

<button
  onClick={nextSlide}
  className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-[#b88c4a] hover:text-white transition-all duration-300"
>
  <FaChevronRight />
</button>

</div>

  {/* </div> */}
  </motion.div>

</div>

{/* Google Review CTA */}

<div className="mt-20 text-center">

  <div className="inline-block bg-gradient-to-r from-[#b88c4a] to-[#d4a85d] rounded-3xl px-10 py-10 shadow-2xl text-white max-w-3xl">

    <h3 className="text-3xl font-bold">

      Loved Our Work?

    </h3>

    <p className="mt-4 text-white/90 leading-8">

      Your feedback helps us grow and helps other homeowners
      discover Signature Space Studio Interiors.

      We'd love to hear about your experience.

    </p>

  <a
  href="https://maps.app.goo.gl/TfzZfPMcYf2Yuu4n8?g_st=aw"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex mt-8 items-center justify-center bg-white text-[#b88c4a] font-semibold px-8 py-4 rounded-full hover:scale-105 transition duration-300"
>
  ⭐ Write a Google Review
</a>

  </div>

</div>

</div>

</section>

  );
}



