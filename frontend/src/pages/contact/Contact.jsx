import { useState } from "react";
import axios from "axios";
import SEO from "../../core/SEO";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, form);
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* ================= SEO ================= */}
      {/* <SEO
        title="Contact Interior Designers in India | Signature Space Studio Interiors"
        description="Contact Signature Space Studio Interiors for premium interior design and custom furniture services across India. Get a free consultation with our expert designers."
        keywords="contact interior designer india, interior design consultation, custom furniture contact"
        url="https://signaturespacestudio.com/contact"
      /> */}

      <SEO
        title="Contact Interior Designers in India | Signature Space Studio Interiors"
        description="Contact Signature Space Studio Interiors for premium home, office, modular kitchen, and custom furniture services across India. Book your free interior design consultation today."
        keywords="interior designer, home interior, modular kitchen, office interior, custom furniture, contact interior designer india"
        url="https://signature-spaces.vercel.app/contact"
      />

      {/* ================= HERO ================= */}
      <section className="bg-[#f9f9f9] py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900">
          Contact Our Interior Design Experts
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-lg">
          With over <strong>28 years of experience</strong>, we help you design
          beautiful, functional interiors tailored to your lifestyle and
          business needs.
        </p>
      </section>

      {/* ================= CONTACT CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          {/* ===== LEFT INFO (GET IN TOUCH) ===== */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Get In Touch</h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              Whether you are planning a home interior, office renovation, or
              custom furniture project, our team is here to guide you from
              concept to completion.
            </p>

            <ul className="mt-10 space-y-4 text-gray-700">
              <li>
                📍 <strong>Service Area:</strong> PAN India
              </li>
              <li>
                📞 <strong>Phone:</strong> +91 9643715746 || +91 7668014201
              </li>
              <li>
                ✉️ <strong>Email:</strong> signatureinteriors8@yahoo.com
              </li>
              <li>
                ⏱ <strong>Working Hours:</strong> Mon – Sat (10 AM – 7 PM)
              </li>
            </ul>

            <div className="mt-10 flex gap-4">
              <a
                href="tel:+917668014201"
                className="border px-6 py-3 rounded-md hover:bg-gray-50"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/917668014201"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-md hover:opacity-90"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>

          {/* ===== CONTACT FORM (BACKEND CONNECTED) ===== */}
          <div className="bg-[#fafafa] p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold text-gray-900">
              Request a Free Consultation
            </h3>

            {success && (
              <div className="mt-5 rounded-lg border border-green-200 bg-green-50 p-4">
                <p className="font-semibold text-green-700">
                  ✅ Request Submitted Successfully!
                </p>

                <p className="text-green-600 mt-1">
                  Thank you for contacting Signature Space Studio Interiors.
                  Our team will get in touch with you within 24 hours.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
                className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
              >
                <option value="">Select Service</option>
                <option>Home Interior Design</option>
                <option>Luxury Villa Interior</option>
                <option>Modular Kitchen</option>
                <option>Bedroom Interior</option>
                <option>Living Room Interior</option>
                <option>Office Interior</option>
                <option>Commercial Interior</option>
                <option>Restaurant & Cafe Interior</option>
                <option>False Ceiling Design</option>
                <option>Wardrobe Design</option>
                <option>Custom Furniture</option>
                <option>Turnkey Interior Solutions</option>
                <option>Renovation & Remodeling</option>
              </select>

              <textarea
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows="4"
                placeholder="Please describe your project, location, budget, and preferred timeline."
                className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#b88c4a] text-white py-3 rounded-md font-semibold hover:bg-[#a0783f]"
              >
                {loading ? "Submitting..." : "Book Free Consultation"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-20 bg-[#b88c4a] text-white text-center">
        <h2 className="text-3xl font-bold">
          Let’s Start Designing Your Dream Space
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Talk to our experienced interior designers and get a personalized
          consultation today.
        </p>
        <a
          href="https://wa.me/917668014201"
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-8 bg-white text-[#b88c4a] px-10 py-4 rounded-md font-semibold hover:bg-gray-100"
        >
          Chat on WhatsApp
        </a>
      </section>
    </>
  );
}
