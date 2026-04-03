export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800 dark:text-white">

      {/* 🔹 HERO SECTION */}
      <section className="bg-black text-white py-20 px-4 md:px-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          About AlmaHotels
        </h1>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          We help travelers discover, compare, and book the best hotels —
          without the headache of endless tabs and confusion.
        </p>
      </section>

      {/* 🔹 OUR STORY */}
      <section className="max-w-6xl mx-auto px-4 md:px-10 py-16 grid md:grid-cols-2 gap-10 items-center">
        
        <img
          src="https://picsum.photos/600/400?travel"
          className="rounded-xl shadow-md"
        />

        <div>
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-600 leading-relaxed">
            AlmaHotels started with a simple frustration — finding the right
            hotel shouldn’t feel like solving a puzzle. We built this platform
            to simplify travel decisions and give users a seamless experience.
          </p>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Today, we are focused on building a smart, intuitive platform that
            helps travelers make confident choices — faster and better.
          </p>
        </div>
      </section>

      {/* 🔹 MISSION + VISION */}
      <section className="bg-white dark:bg-gray-900 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To simplify hotel discovery and booking by providing transparent,
              reliable, and user-friendly solutions.
            </p>
          </div>

          <div className="p-6 rounded-xl shadow-sm border">
            <h3 className="text-xl font-semibold mb-3">Our Vision</h3>
            <p className="text-gray-600">
              To become the most trusted platform for travelers worldwide —
              where every stay is a great experience.
            </p>
          </div>

        </div>
      </section>

      {/* 🔹 STATS SECTION */}
      <section className="bg-gray-100 py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          
          <div>
            <h3 className="text-2xl font-bold">10K+</h3>
            <p className="text-gray-800 dark:text-white">Hotels Listed</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">5K+</h3>
            <p className="text-gray-800 dark:text-white">Happy Users</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-gray-800 dark:text-white">Countries</p>
          </div>

          <div>
            <h3 className="text-2xl font-bold">4.8⭐</h3>
            <p className="text-gray-800 dark:text-white">Average Rating</p>
          </div>

        </div>
      </section>

      {/* 🔹 TEAM SECTION */}
      <section className="py-16 px-4 md:px-10 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-bold">Meet Our Team</h2>
          <p className="text-gray-800 dark:text-white mt-2">
            The people behind the platform
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {["Founder", "Co-Founder", "CTO"].map((role, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm text-center"
            >
              <img
                src={`https://i.pravatar.cc/150?img=${index + 10}`}
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Person {index + 1}</h3>
              <p className="text-sm text-gray-800 dark:text-white">{role}</p>
            </div>
          ))}

        </div>
      </section>

      {/* 🔹 INVESTORS */}
      <section className="bg-gray-100 py-16 px-4 md:px-10 text-center">
        <h2 className="text-2xl font-bold mb-6">Our Investors</h2>

        <div className="flex flex-wrap justify-center gap-6 text-gray-600">
          <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            Alpha Ventures
          </span>
          <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            Travel Fund
          </span>
          <span className="px-4 py-2 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
            Global Angels
          </span>
        </div>
      </section>

      {/* 🔹 CTA */}
      <section className="bg-black text-white py-16 px-4 md:px-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">
          Ready to explore your next stay?
        </h2>
        <p className="text-gray-400 mt-3">
          Discover hotels, save favourites, and travel smarter.
        </p>

        <a
          href="/hotels"
          className="inline-block mt-6 bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-200 transition"
        >
          Explore Hotels
        </a>
      </section>

    </div>
  );
}