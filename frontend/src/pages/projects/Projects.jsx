import SEO from "../../core/SEO";
import ProjectGrid from "../../components/projects/ProjectGrid";

export default function Projects() {
  return (
    <>
      <SEO
        title="Interior Design & Custom Furniture Projects | 28 Years Experience"
        description="Explore interior design and custom furniture projects completed across homes, offices, and commercial spaces in India by a team with 28+ years of experience."
        keywords="interior design projects india, custom furniture work, office interior projects, home interior gallery"
        url="https://signaturespacestudio.com/projects"
      />

      {/* HERO */}
      <section className="bg-[#f9f9f9] py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Our Interior Design & Furniture Projects
        </h1>
        <p className="mt-6 text-gray-600 max-w-3xl mx-auto text-lg">
          With over <strong>28 years of experience</strong>, we have delivered
          premium residential, office, and commercial interior projects across
          major cities in India.
        </p>
      </section>

      {/* PROJECTS */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ProjectGrid />
      </section>

      {/* SEO CONTENT BLOCK */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-6 text-gray-700 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">
            Interior Projects Across India
          </h2>
          <p>
            Our portfolio includes luxury home interiors, modular kitchens,
            corporate office interiors, and custom furniture projects delivered
            across cities like Delhi, Mumbai, Bangalore, and more. Each project
            reflects our commitment to quality craftsmanship, functional
            layouts, and timeless design.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-[#b88c4a] text-white text-center">
        <h2 className="text-3xl font-bold">
          Want a Similar Interior for Your Space?
        </h2>
        <p className="mt-4">
          Talk to our expert designers and start your interior journey today.
        </p>
        <a
          href="/contact"
          className="inline-block mt-8 bg-white text-[#b88c4a] px-10 py-4 rounded-md font-semibold hover:bg-gray-100"
        >
          Get Free Consultation
        </a>
      </section>
    </>
  );
}
