import { useState } from "react";

export default function BeforeAfterSlider({ before, after }) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className="relative w-full h-64 overflow-hidden rounded-2xl shadow-lg cursor-col-resize"
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        setPos(Math.max(0, Math.min(100, (x / rect.width) * 100)));
      }}
    >
      {/* AFTER */}
      <img
        src={after}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* BEFORE */}
      <img
        src={before}
        className="absolute inset-0 h-full object-cover"
        style={{ width: `${pos}%` }}
      />

      {/* DIVIDER */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white"
        style={{ left: `${pos}%` }}
      />
    </div>
  );
}
