import { useEffect, useState } from "react";
import axios from "axios";
import { testimonials as staticTestimonials } from "../../core/data/testimonialsData";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
  const [current, setCurrent] = useState(0);

  const [showForm, setShowForm] = useState(false);
  const [editingReview, setEditingReview] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    city: "",
    text: "",
    rating: 5,
  });

  // ================= FETCH REVIEWS =================
  const fetchReviews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/reviews");
      setReviews([...res.data, ...staticTestimonials]);
    } catch {
      setReviews(staticTestimonials);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // ================= AUTO SLIDER =================
  useEffect(() => {
    if (!reviews.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [reviews]);

  if (!reviews.length) return null;

  const review = reviews[current];
  const isReal = !!review._id;

  // ================= DELETE =================
  const handleDelete = async (review) => {
    if (!window.confirm("Delete this review?")) return;

    if (review._id) {
      // REAL → backend
      await axios.delete(`http://localhost:5000/api/reviews/${review._id}`);
      fetchReviews();
    } else {
      // FAKE → frontend only
      setReviews((prev) => prev.filter((r) => r !== review));
    }
  };

  // ================= EDIT =================
  const handleEdit = (review) => {
    setForm({
      name: review.name,
      city: review.city,
      text: review.text,
      rating: review.rating || 5,
    });
    setEditingId(review._id || "fake");
    setEditingReview(review);
    setShowForm(true);
  };

  // ================= SUBMIT =================
  const submitReview = async (e) => {
    e.preventDefault();

    try {
      if (editingId === "fake") {
        // UPDATE FAKE (frontend only)
        setReviews((prev) =>
          prev.map((r) => (r === editingReview ? { ...form } : r))
        );
      } else if (editingId) {
        // UPDATE REAL
        await axios.put(`http://localhost:5000/api/reviews/${editingId}`, form);
        fetchReviews();
      } else {
        // NEW REAL REVIEW
        await axios.post("http://localhost:5000/api/reviews", form);
        fetchReviews();
      }
    } catch (err) {
      console.error(err);
    }

    setForm({ name: "", city: "", text: "", rating: 5 });
    setEditingId(null);
    setEditingReview(null);
    setShowForm(false);
  };

  // ================= UI =================
  return (
    <section className="relative py-3 bg-gradient-to-b from-[#f7f5f2] to-white overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[520px] h-[520px] bg-[#b88c4a]/10 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        {/* HEADING */}
        <span className="inline-block mb-4 px-4 py-1 text-xs tracking-widest uppercase rounded-full bg-[#b88c4a]/10 text-[#b88c4a]">
          Testimonials
        </span>

        <h2 className="text-4xl md:text-5xl font-extrabold">
          Trusted by <span className="text-[#b88c4a]">Happy Clients</span>
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Real experiences from homeowners & businesses across India
        </p>

        {/* SLIDER CARD */}
        <div className="mt-10 bg-white/90 backdrop-blur rounded-3xl px-12 py-14 shadow-2xl">
          {/* <div className="text-6xl text-[#b88c4a] mb-6">“</div> */}

          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            {review.text}
          </p>

          <div className="flex justify-center gap-1 mt-6 text-[#b88c4a] text-xl">
            {"★".repeat(review.rating || 5)}
          </div>

          <div className="mt-8 pt-5 border-t">
            <p className="font-semibold text-lg">{review.name}</p>
            <p className="text-sm text-gray-500">{review.city}, India</p>
          </div>

          {/* EDIT / DELETE (FAKE + REAL) */}
          <div className="mt-6 flex justify-center gap-6 text-sm">
            <button
              onClick={() => handleEdit(review)}
              className="text-[#b88c4a] hover:underline"
            >
              ✏️ Edit
            </button>
            <button
              onClick={() => handleDelete(review)}
              className="text-red-500 hover:underline"
            >
              🗑 Delete
            </button>
          </div>

          {/* NAVIGATION */}
          <div className="mt-10 flex justify-center gap-8">
            <button
              onClick={() =>
                setCurrent((current - 1 + reviews.length) % reviews.length)
              }
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50"
            >
              ←
            </button>
            <button
              onClick={() => setCurrent((current + 1) % reviews.length)}
              className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-50"
            >
              →
            </button>
          </div>
        </div>

        {/* ADD REVIEW */}
        <div className="mt-16">
          <button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
              setEditingReview(null);
              setForm({
                name: "",
                city: "",
                text: "",
                rating: 5,
              });
            }}
            className="bg-[#b88c4a] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#a0783f]"
          >
            Leave a Review
          </button>
        </div>

        {/* FORM */}
        {showForm && (
          <div className="mt-12 max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl">
            <form onSubmit={submitReview} className="space-y-4">
              <input
                placeholder="Your Name"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border px-4 py-3 rounded-md"
              />
              <input
                placeholder="City"
                required
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
                className="w-full border px-4 py-3 rounded-md"
              />
              <textarea
                placeholder="Your Review"
                required
                rows="3"
                value={form.text}
                onChange={(e) => setForm({ ...form, text: e.target.value })}
                className="w-full border px-4 py-3 rounded-md"
              />
              <button
                type="submit"
                className="w-full bg-[#b88c4a] text-white py-3 rounded-md font-semibold"
              >
                {editingId ? "Update Review" : "Submit Review"}
              </button>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
