import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group rounded-xl overflow-hidden bg-white shadow hover:shadow-2xl"
    >
      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.alt}
          loading="lazy"
          width="400"
          height="260"
          className="h-60 w-full object-cover group-hover:scale-110 transition duration-500"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
          <span className="bg-white text-gray-900 px-5 py-2 rounded-md text-sm font-medium">
            View Project
          </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h3 className="font-semibold text-lg leading-snug">{project.title}</h3>

        <p className="text-sm text-gray-600 mt-2">{project.description}</p>

        <div className="mt-3 flex justify-between text-xs text-gray-500">
          <span>{project.city}</span>
          <span>{project.category}</span>
        </div>
      </div>
    </motion.article>
  );
}
