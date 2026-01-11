import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../../data/projectsData";

export default function ProjectGrid() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Living Room", "Kitchen", "Office"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <>
      {/* FILTER */}
      <div className="flex flex-wrap gap-4 justify-center mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full text-sm border transition
              ${
                filter === cat
                  ? "bg-[#b88c4a] text-white border-[#b88c4a]"
                  : "bg-white hover:bg-gray-50"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </>
  );
}
