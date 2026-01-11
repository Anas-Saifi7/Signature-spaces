export default function ServiceCard({ service }) {
  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border">
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="h-56 w-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badge */}
        <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full">
          {service.category || "Premium"}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
          <span className="text-2xl">{service.icon}</span>
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4">{service.description}</p>

        <ul className="space-y-1 text-sm text-gray-700 mb-5">
          {service.features.map((f, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="text-green-600">✔</span> {f}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="/contact"
          className="block text-center w-full py-2.5 rounded-lg bg-black text-white hover:bg-gray-800 transition"
        >
          Get Free Consultation
        </a>
      </div>
    </div>
  );
}
