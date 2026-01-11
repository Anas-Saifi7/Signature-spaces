import { useState } from "react";
import axios from "axios";
import SEO from "../../core/SEO";
import BusinessSchema from "../../core/BusinessSchema";
import VideoSchema from "../../core/VideoSchema";
import BeforeAfterSlider from "../../components/home/BeforeAfterSlider";
import ReviewSchema from "../../core/ReviewSchema";
import Testimonials from "../../components/home/Testimonials";
import FAQSchema from "../../core/FAQSchema";

export default function Home() {
  const [homeForm, setHomeForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title="Interior Design & Custom Furniture Company in India | 28 Years Experience"
        description="Signature Space Studio Interiors is a premium interior design and custom furniture company with 28+ years of experience delivering residential and commercial interiors across India."
        keywords="interior design india, custom furniture, modular kitchen, office interior, 28 years interior experience"
        url="https://signaturespacestudio.com/"
      />
      <ReviewSchema />
      <BusinessSchema />
      <VideoSchema />
      <FAQSchema />

      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:min-h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right"
          style={{ backgroundImage: "url('/hero.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-transparent" />

        <div className="relative z-10 min-h-[75vh] md:min-h-[80vh] flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl">
              {/* EXPERIENCE BADGE */}
              <div className="inline-flex items-center gap-2 bg-white/90 px-4 py-2 rounded-full mb-4 shadow-sm">
                <span className="text-[#b88c4a] font-bold">28+</span>
                <span className="text-sm text-gray-700 font-medium">
                  Years of Interior Design Excellence
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-playfair font-semibold leading-tight text-gray-900">
                Interior Design & <br />
                Custom Furniture <br />
                Across India
              </h1>

              <p className="mt-6 text-lg text-gray-600 font-poppins">
                <strong>Signature Space Studio Interiors</strong> is a trusted
                interior design and custom furniture company with over 28 years
                of experience delivering premium residential and commercial
                interiors across India.
              </p>

              <div className="mt-8 flex gap-4">
                <a
                  href="/contact"
                  className="bg-[#b88c4a] text-white px-8 py-3 rounded-md hover:bg-[#a0783f] transition"
                >
                  Get Free Consultation
                </a>
                <a
                  href="/projects"
                  className="bg-white border border-gray-300 px-8 py-3 rounded-md hover:bg-gray-50 transition"
                >
                  View Our Projects
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-700">
          <span>🏠 Home Interiors</span>
          <span>🏥 Hospital Interiors</span>
          <span>🏢 Office & Corporate</span>
          <span>🛍️ Retail & Showrooms</span>
          <span>🛠️ Custom Furniture</span>
        </div>
      </section>

      {/* ================= TRUST COUNTERS ================= */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["28+", "Years Experience"],
            ["1200+", "Projects Delivered"],
            ["350+", "Happy Clients"],
            ["PAN India", "Service Network"],
          ].map((item, i) => (
            <div key={i} className="hover:scale-105 transition">
              <p className="text-3xl font-bold text-[#b88c4a]">{item[0]}</p>
              <p className="text-gray-600">{item[1]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="relative -mt-16 pt-24 pb-28 bg-white rounded-t-3xl shadow-sm">
        <div className="max-w-7xl mx-auto px-6 text-center">
          {/* SECTION HEADING */}
          <h2 className="text-3xl md:text-4xl font-bold">
            A–Z Interior Design & Furniture Solutions
          </h2>

          <p className="mt-4 text-gray-600 max-w-4xl mx-auto text-lg">
            From residential homes to hospitals, offices, and large commercial
            projects, we provide complete interior design and custom furniture
            solutions — all under one roof.
          </p>

          {/* SERVICE GRID */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              {
                title: "Residential Interior Design",
                img: "/service-home.jpg",
                tags: ["Homes", "Apartments", "Villas"],
                desc: "Complete home interiors including living rooms, bedrooms, kitchens, and wardrobes.",
              },
              {
                title: "Modular Kitchens & Wardrobes",
                img: "/service-kitchen.jpg",
                tags: ["Modular", "Storage", "Customization"],
                desc: "Premium modular kitchens and wardrobes with space-efficient designs.",
              },
              {
                title: "Office & Commercial Interiors",
                img: "/service-office.jpg",
                tags: ["Offices", "Showrooms", "Retail"],
                desc: "Professional office and commercial interiors designed for productivity and branding.",
              },
              {
                title: "Custom Furniture Manufacturing",
                img: "/service-furniture.jpg",
                tags: ["Furniture", "Woodwork", "Manufacturing"],
                desc: "In-house custom furniture manufacturing with premium materials and finishes.",
              },
              {
                title: "Hospital & Clinic Interiors",
                img: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3",
                tags: ["Hospitals", "Clinics", "Healthcare"],
                desc: "Hygienic, functional, and patient-friendly hospital & clinic interior solutions.",
              },

              {
                title: "Luxury Bedroom Interiors",
                img: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",
                tags: ["Bedrooms", "Wardrobes", "Lighting"],
                desc: "Elegant bedroom interiors with custom wardrobes and ambient lighting.",
              },
              {
                title: "Living Room Interior Design",
                img: "https://images.unsplash.com/photo-1618220179428-22790b461013",
                tags: ["Living Rooms", "TV Units", "Decor"],
                desc: "Stylish living room interiors with premium finishes and custom furniture.",
              },
              {
                title: "Office & Commercial Interiors",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c",
                tags: ["Offices", "Showrooms", "Retail"],
                desc: "Professional office and commercial interiors designed for productivity and branding.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center p-6">
                    <p className="text-white text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6 text-left">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {item.title}
                  </h3>

                  {/* TAGS */}
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-100 px-3 py-1 rounded-full text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <a
                    href="/contact"
                    className="inline-block mt-5 text-sm font-medium text-[#b88c4a] hover:underline"
                  >
                    Get Consultation →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WHY TRUST US (ADVANCED) ================= */}
      <section className="py-16 bg-gradient-to-b from-[#fafafa] to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Clients Trust Our 28+ Years of Experience
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              Built on decades of expertise, transparent processes, and
              uncompromised quality — trusted by clients across India.
            </p>
          </div>

          {/* TRUST GRID */}
          <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "28+ Years Expertise",
                desc: "Decades of hands-on experience delivering residential and commercial interiors.",
                icon: "🏆",
              },
              {
                title: "In-House Manufacturing",
                desc: "Complete furniture manufacturing under one roof for quality control.",
                icon: "🛠️",
              },
              {
                title: "Premium Materials",
                desc: "High-grade materials and finishes ensuring durability and elegance.",
                icon: "✨",
              },
              {
                title: "Dedicated Managers",
                desc: "Single point of contact ensuring smooth coordination and execution.",
                icon: "👨‍💼",
              },
              {
                title: "Transparent Pricing",
                desc: "Clear and honest pricing with no hidden costs or surprises.",
                icon: "📊",
              },
              {
                title: "On-Time Delivery",
                desc: "Strict timelines and project planning to ensure timely handover.",
                icon: "⏱️",
              },
              {
                title: "Residential & Commercial",
                desc: "Expertise across homes, offices, hospitals, and retail spaces.",
                icon: "🏢",
              },
              {
                title: "PAN India Coverage",
                desc: "Seamless interior execution across major cities in India.",
                icon: "🇮🇳",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PROCESS (ADVANCED) ================= */}
      <section className="py-4 bg-gradient-to-b from-[#fafafa] to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our End-to-End Interior Design Process
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              A well-defined process built over{" "}
              <strong>28+ years of experience</strong>, ensuring quality,
              transparency, and timely delivery across all interior projects.
            </p>
          </div>

          {/* PROCESS STEPS */}
          <div className="mt-20 grid md:grid-cols-4 gap-12 relative">
            {[
              {
                step: "01",
                title: "Consultation & Planning",
                desc: "Understanding your requirements, space analysis, budget planning, and project goals.",
                icon: "🧠",
              },
              {
                step: "02",
                title: "Design & 3D Visualization",
                desc: "Concept designs, layout planning, and detailed 3D visuals for complete clarity.",
                icon: "🎨",
              },
              {
                step: "03",
                title: "Manufacturing & Material Selection",
                desc: "In-house furniture manufacturing and premium material selection for durability.",
                icon: "🛠️",
              },
              {
                step: "04",
                title: "Execution & Final Handover",
                desc: "On-site execution, quality checks, and timely project handover.",
                icon: "🏁",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center relative"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#b88c4a] text-white w-12 h-12 rounded-full flex items-center justify-center font-semibold shadow-lg">
                  {item.step}
                </div>

                {/* ICON */}
                <div className="text-4xl mt-6 mb-4">{item.icon}</div>

                {/* CONTENT */}
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO + BEFORE AFTER (ENTERPRISE) ================= */}
      <section className="py-10 bg-gradient-to-b from-white via-[#fafafa] to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* SECTION INTRO */}
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              See How We Transform Spaces Into Experiences
            </h2>

            <p className="mt-5 text-gray-600 text-lg leading-relaxed">
              With <strong>28+ years of interior design expertise</strong>,
              Signature Space Studio Interiors delivers end-to-end interior
              solutions — combining thoughtful design, in-house furniture
              manufacturing, and flawless on-site execution across India.
            </p>

            {/* TRUST BADGES */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white shadow px-4 py-2 rounded-full">
                🏆 28+ Years Experience
              </span>
              <span className="bg-white shadow px-4 py-2 rounded-full">
                🛠️ In-House Manufacturing
              </span>
              <span className="bg-white shadow px-4 py-2 rounded-full">
                🇮🇳 PAN India Execution
              </span>
            </div>
          </div>

          {/* VIDEO BLOCK */}
          <div className="mt-20 max-w-5xl mx-auto relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <video
                controls
                preload="metadata"
                poster="/videos/workshop-poster.jpg"
                aria-label="Interior design and furniture manufacturing process video"
                className="w-full h-[460px] object-cover"
              >
                <source src="/videos/furniture-workshop.mp4" type="video/mp4" />
              </video>
            </div>

            {/* VIDEO CAPTION */}
            <p className="mt-5 text-sm text-gray-600 max-w-3xl mx-auto text-center">
              A behind-the-scenes look at our interior design workflow — from
              concept planning and 3D visualization to in-house furniture
              manufacturing and final on-site execution.
            </p>
          </div>

          {/* BEFORE AFTER HIGHLIGHT */}
          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Before & After Interior Transformation
              </h3>

              <p className="mt-5 text-gray-600 leading-relaxed">
                Every project begins as an empty or outdated space. Through our
                structured design process, premium materials, and skilled
                execution, we transform it into a functional, elegant, and
                long-lasting interior tailored to the client’s lifestyle or
                business needs.
              </p>

              <ul className="mt-8 space-y-3 text-gray-700">
                <li>✔ Design-led planning approach</li>
                <li>✔ Premium materials & finishes</li>
                <li>✔ In-house custom furniture</li>
                <li>✔ Quality checks & timely handover</li>
              </ul>
            </div>

            {/* SLIDER */}
            <div className="relative">
              <BeforeAfterSlider
                before="/before-after/before.jpg"
                after="/before-after/after.jpg"
              />
              <p className="mt-3 text-xs text-gray-500 text-center">
                Drag to see the transformation
              </p>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="mt-24 text-center">
            <a
              href="/projects"
              className="inline-block bg-[#b88c4a] text-white px-12 py-4 rounded-md font-semibold hover:bg-[#a0783f] transition"
            >
              Explore Our Completed Projects
            </a>
          </div>
        </div>
      </section>
      <Testimonials />

      {/* ================= HOME CONTACT ================= */}
      <section className="py-10 bg-gradient-to-b from-[#f9f9f9] to-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT (UNCHANGED) */}
          <div>
            <span className="inline-block mb-4 bg-white px-4 py-2 rounded-full shadow text-sm text-[#b88c4a] font-medium">
              Free Expert Consultation
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Talk to Interior Experts with <br /> 28+ Years of Experience
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Signature Space Studio Interiors delivers premium interior design
              and custom furniture solutions for homes, offices, hospitals, and
              commercial spaces across India — from concept to final handover.
            </p>

            <ul className="mt-8 space-y-4 text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-[#b88c4a]">✔</span>
                28+ Years of Interior Design & Furniture Expertise
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b88c4a]">✔</span>
                Residential, Office, Hospital & Commercial Projects
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b88c4a]">✔</span>
                In-House Furniture Manufacturing & Quality Control
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#b88c4a]">✔</span>
                PAN India Design & Execution Capability
              </li>
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="tel:+919643715746"
                className="border border-gray-300 px-8 py-4 rounded-md font-medium hover:bg-white transition"
              >
                📞 Call Now
              </a>

              <a
                href="https://wa.me/919643715746"
                target="_blank"
                rel="noreferrer"
                className="bg-[#25D366] text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition"
              >
                💬 WhatsApp Chat
              </a>
            </div>

            <p className="mt-4 text-sm text-gray-500">
              ⚡ Average response time: under 30 minutes
            </p>
          </div>

          {/* RIGHT FORM (BACKEND CONNECTED) */}
          <div className="bg-white p-12 rounded-3xl shadow-2xl relative">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900">
                Request a Free Call Back
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                Share your details and our interior expert will contact you
                shortly.
              </p>
            </div>

            {success && (
              <p className="mb-4 text-green-600 text-sm font-medium text-center">
                ✅ Thank you! Our expert will call you shortly.
              </p>
            )}

            <form
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);

                try {
                  await axios.post(`${import.meta.env.VITE_API_URL}/api/contact`, {
                    name: homeForm.name,
                    email: homeForm.email,
                    phone: homeForm.phone,
                    service: homeForm.service,
                    message: "Lead from Home Page - Free Call Back",
                  });

                  setSuccess(true);
                  setHomeForm({ name: "", phone: "", service: "" });
                } catch {
                  alert("Something went wrong. Please try again.");
                } finally {
                  setLoading(false);
                }
              }}
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={homeForm.name}
                  onChange={(e) =>
                    setHomeForm({ ...homeForm, name: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={homeForm.email}
                  onChange={(e) =>
                    setHomeForm({ ...homeForm, email: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  value={homeForm.phone}
                  onChange={(e) =>
                    setHomeForm({ ...homeForm, phone: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Select Service
                </label>
                <select
                  value={homeForm.service}
                  onChange={(e) =>
                    setHomeForm({ ...homeForm, service: e.target.value })
                  }
                  required
                  className="w-full border px-4 py-3 rounded-md focus:ring-2 focus:ring-[#b88c4a]"
                >
                  <option value="">Select Service</option>
                  <option>Home Interior Design</option>
                  <option>Modular Kitchen</option>
                  <option>Office Interior</option>
                  <option>Hospital Interior</option>
                  <option>Custom Furniture</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#b88c4a] text-white py-4 rounded-md font-semibold hover:bg-[#a0783f] transition"
              >
                {loading ? "Submitting..." : "Get Free Consultation"}
              </button>

              <p className="text-xs text-gray-500 text-center">
                🔒 Your information is 100% secure. We never share your details.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ================= CITY-WISE SEO SECTION ================= */}
      <section className="py-10 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold">
            Interior Design Services Across India
          </h2>

          <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
            We provide complete A–Z interior design and custom furniture
            solutions across major cities in India including residential,
            office, hospital, retail, and commercial projects.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-gray-700">
            <a
              href="/interior-designer/delhi"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Delhi
            </a>
            <a
              href="/interior-designer/noida"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Noida
            </a>
            <a
              href="/interior-designer/gurgaon"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Gurgaon
            </a>
            <a
              href="/interior-designer/mumbai"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Mumbai
            </a>
            <a
              href="/interior-designer/bangalore"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Bangalore
            </a>
            <a
              href="/interior-designer/hyderabad"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Hyderabad
            </a>
            <a
              href="/interior-designer/chennai"
              className="underline hover:text-[#b88c4a]"
            >
              Interior Designer in Chennai
            </a>
          </div>
        </div>
      </section>

      {/* ================= FAQ (SEO BOOST) ================= */}
      <section className="py-24 bg-gradient-to-b from-white to-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-center text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about our interior design and custom
            furniture services across India.
          </p>

          <div className="mt-12 space-y-4">
            {/* FAQ ITEM */}
            <details className="group bg-white rounded-xl shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-900">
                How much experience does Signature Space Studio Interiors have?
                <span className="transition group-open:rotate-45 text-[#b88c4a] text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Signature Space Studio Interiors brings over{" "}
                <strong>28 years of professional experience</strong> in interior
                design and custom furniture manufacturing, delivering
                residential and commercial projects across India.
              </p>
            </details>

            {/* FAQ ITEM */}
            <details className="group bg-white rounded-xl shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-900">
                Do you provide PAN India interior design services?
                <span className="transition group-open:rotate-45 text-[#b88c4a] text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we provide complete{" "}
                <strong>PAN India interior design services</strong>
                including homes, offices, hospitals, retail showrooms, and large
                commercial projects with end-to-end execution.
              </p>
            </details>

            {/* FAQ ITEM */}
            <details className="group bg-white rounded-xl shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-900">
                Do you offer custom furniture manufacturing?
                <span className="transition group-open:rotate-45 text-[#b88c4a] text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Yes, we have <strong>in-house furniture manufacturing</strong>{" "}
                facilities that allow us to deliver customized, durable, and
                premium-quality furniture tailored to each project’s
                requirements.
              </p>
            </details>

            {/* FAQ ITEM */}
            <details className="group bg-white rounded-xl shadow-md p-6 cursor-pointer">
              <summary className="flex justify-between items-center font-semibold text-gray-900">
                What types of projects do you handle?
                <span className="transition group-open:rotate-45 text-[#b88c4a] text-xl">
                  +
                </span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                We handle a wide range of projects including{" "}
                <strong>
                  home interiors, hospital interiors, office spaces, retail
                  showrooms,
                </strong>{" "}
                and turnkey commercial interiors across India.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="relative py-10 bg-gradient-to-r from-[#b88c4a] via-[#c9a15a] to-[#b88c4a] text-white overflow-hidden">
        {/* Decorative background circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-black/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Badge */}
          <span className="inline-block mb-5 px-5 py-2 text-xs tracking-widest uppercase bg-white/20 rounded-full">
            Trusted Interior Experts
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            28 Years of Experience.
            <br />
            <span className="text-white/90">One Trusted Interior Partner.</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Transform your home or workspace with premium interior design,
            custom plywood work, and flawless execution by expert designers.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#b88c4a] px-10 py-4 rounded-lg font-semibold shadow-lg hover:scale-105 transition"
            >
              Get Free Consultation
            </a>

            <a
              href="https://wa.me/919643715746"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-white/60 px-10 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#b88c4a] transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
