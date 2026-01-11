import { useParams } from "react-router-dom";
import SEO from "../../core/SEO";
import { cityContent } from "../../data/cityData";


export default function City() {
  const { city } = useParams();
  const data = cityContent[city];

  if (!data) {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">City not found</h1>
      </section>
    );
  }

  return (
    <>
      {/* ================= SEO ================= */}
      <SEO
        title={`Interior Designer in ${data.name} | 28+ Years Experience`}
        description={`Looking for the best interior designer in ${data.name}? We offer home, hospital, office, retail & custom furniture solutions with 28+ years experience across ${data.areas}.`}
        keywords={`interior designer in ${data.name}, home interior ${data.name}, office interior ${data.name}, custom furniture ${data.name}`}
        url={`https://signaturespacestudio.com/interior-designer/${city}`}
      />

      {/* ================= HERO ================= */}
      <section className="bg-[#f9f9f9] py-24 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold">
          Interior Designer in {data.name}
        </h1>

        <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg">
          {data.description}
        </p>

        <div className="mt-8">
          <a
            href="/contact"
            className="inline-block bg-[#b88c4a] text-white px-10 py-4 rounded-md font-semibold hover:bg-[#a0783f] transition"
          >
            Get Free Consultation in {data.name}
          </a>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Interior Services in {data.name}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {[
            "Home Interior Design",
            "Modular Kitchens & Wardrobes",
            "Office & Corporate Interiors",
            "Custom Furniture Manufacturing",
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow hover:shadow-xl transition"
            >
              <p className="font-semibold">{service}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE ================= */}
      <section className="py-24 bg-[#fafafa]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center">
            Why Choose Us for Interior Design in {data.name}
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-12 text-gray-700">
            <ul className="space-y-4">
              <li>✔ 28+ Years of Interior Design Experience</li>
              <li>✔ In-House Furniture Manufacturing</li>
              <li>✔ Premium Quality Materials</li>
              <li>✔ Transparent Pricing</li>
            </ul>

            <ul className="space-y-4">
              <li>✔ Residential & Commercial Projects</li>
              <li>✔ Timely Project Delivery</li>
              <li>✔ Dedicated Project Managers</li>
              <li>✔ PAN India Execution Capability</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= LOCAL SEO CONTENT ================= */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">
            Interior Design Company Serving {data.name}
          </h2>

          <p>
            Signature Space Studio Interiors is a trusted interior design
            company in {data.name}, offering complete A–Z interior solutions for
            homes, offices, retail spaces, and commercial properties. Our team
            combines creative design, premium materials, and expert
            craftsmanship to deliver interiors that are functional, elegant, and
            long-lasting.
          </p>
        </div>
      </section>

      {/* ================= CITY CTA ================= */}
      <section className="py-24 bg-[#b88c4a] text-white text-center">
        <h2 className="text-3xl font-bold">
          Looking for the Best Interior Designer in {data.name}?
        </h2>
        <p className="mt-4">
          Get expert guidance from our interior designers today.
        </p>

        <a
          href="/contact"
          className="inline-block mt-8 bg-white text-[#b88c4a] px-10 py-4 rounded-md font-semibold hover:bg-gray-100"
        >
          Book Free Consultation
        </a>
      </section>
    </>
  );
}
