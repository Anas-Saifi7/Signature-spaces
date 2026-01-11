import SEO from "../../core/SEO";
import BusinessSchema from "../../core/BusinessSchema";

export default function About() {
  return (
    <>
      {/* SEO */}
      <SEO
        title="About Us | Signature Space Studio Interiors – Interior Design Company India"
        description="Learn about Signature Space Studio Interiors, a premium interior design and custom furniture company delivering residential and commercial interiors across India."
        keywords="about interior design company, signature space studio interiors, interior designers india, custom furniture company"
        url="https://signaturespacestudio.com/about"
      />

      <BusinessSchema />

      {/* HERO */}
      <section className="bg-[#f9f9f9] py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-gray-900">
            About Signature Space Studio Interiors
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-gray-600 text-lg font-poppins">
            We design timeless interiors and craft custom furniture that elevate
            homes, offices, and commercial spaces across India.
          </p>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="text-3xl font-playfair font-semibold text-gray-900">
              Who We Are
            </h2>
            <p className="mt-6 text-gray-600 leading-relaxed">
              <strong>Signature Space Studio Interiors</strong> is a
              professional interior design and custom furniture company
              delivering complete interior solutions for residential, office,
              and commercial spaces across India.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              With a strong focus on design aesthetics, functionality, and
              premium craftsmanship, we transform spaces into elegant,
              comfortable, and purposeful environments.
            </p>
          </div>

          <div className="bg-[#f5f5f5] rounded-xl p-8">
            <ul className="space-y-4 text-gray-700">
              <li>✔ 100% Customized Design Solutions</li>
              <li>✔ Premium Materials & Finishes</li>
              <li>✔ End-to-End Project Execution</li>
              <li>✔ Pan India Service</li>
            </ul>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-playfair font-semibold text-center text-gray-900">
            Why Choose Us
          </h2>

          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                title: "Expert Design Team",
                desc: "Experienced designers delivering functional and aesthetic interiors.",
              },
              {
                title: "Custom Furniture",
                desc: "In-house custom furniture manufacturing with premium quality.",
              },
              {
                title: "Transparent Process",
                desc: "Clear timelines, pricing, and regular project updates.",
              },
              {
                title: "Trusted by Clients",
                desc: "Satisfied residential and commercial clients across India.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <h3 className="font-semibold text-lg text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-playfair font-semibold text-center text-gray-900">
            Our Design Process
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-10 text-center">
            {[
              "Consultation & Requirement Analysis",
              "Design Planning & 3D Visualization",
              "Material Selection & Manufacturing",
              "Execution & Final Handover",
            ].map((step, i) => (
              <div key={i}>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#b88c4a] text-white flex items-center justify-center font-semibold">
                  {i + 1}
                </div>
                <p className="text-gray-700 text-sm">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#b88c4a] text-white text-center">
        <h2 className="text-3xl font-playfair font-semibold">
          Let’s Design Your Space
        </h2>
        <p className="mt-4 max-w-2xl mx-auto">
          Get in touch with our experts to transform your space with elegant
          interior design and custom furniture solutions.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-white text-[#b88c4a] px-8 py-3 rounded-md font-medium hover:bg-gray-100 transition"
        >
          Get Free Consultation
        </a>
      </section>
    </>
  );
}
