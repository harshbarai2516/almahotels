export default function BlogBanner() {
  return (
    <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-md">

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        className="w-full h-[300px] md:h-[400px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col justify-center px-6 md:px-12">

        <h1 className="text-white text-2xl md:text-4xl font-bold max-w-xl">
          Discover Travel Stories & Smart Hotel Picks
        </h1>

        <p className="text-gray-800 dark:text-white mt-3 max-w-md text-sm md:text-base">
          Tips, guides, and insights to help you find the perfect stay —
          without overthinking every decision.
        </p>

        {/* CTA */}
        <button className="mt-5 w-fit bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition">
          Explore Blogs
        </button>
      </div>
    </div>
  );
}