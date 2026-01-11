import  {services}  from "../../data/servicesData";
import ServiceCard from "../../components/services/ServiceCard";

export default function ServicesSection() {
  return (
    <section className="py-24 bg-[#f9f9f9]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our Interior Design Services
          </h2>
          <p className="text-gray-600">
            Premium interior & plywood solutions crafted for modern homes,
            offices, and commercial spaces.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
