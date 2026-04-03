import { useState } from "react";

export default function HotelCarousel({ hotels = [] }) {
  const [index, setIndex] = useState(0);

  // take only 5 items
  const items = hotels.slice(0, 5);

  const prev = () => {
    setIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const next = () => {
    setIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!items.length) return null;

  const hotel = items[index];

  return (
    <div className="max-w-6xl mx-auto mb-10">

      {/* Container */}
      <div className="relative rounded-2xl overflow-hidden shadow-md">

        {/* Image */}
        <img
          src={hotel.main_photo || "https://picsum.photos/800/400"}
          className="w-full h-[250px] md:h-[350px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
          <h2 className="text-xl md:text-2xl font-bold">
            {hotel.name}
          </h2>

          <p className="text-sm text-gray-800 dark:text-white">
            {hotel.city || "Unknown City"}
          </p>
        </div>

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900/80 px-3 py-1 rounded-full"
        >
          ◀
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900/80 px-3 py-1 rounded-full"
        >
          ▶
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-3 gap-2">
        {items.map((_, i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}