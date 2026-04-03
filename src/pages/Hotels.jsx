import { useEffect, useState } from "react";
import { getHotelsByCountry } from "../services/api";
import HotelCard from "../components/Hotelcard";
import HotelCarousel from "../components/HotelCarousel";
import { countries } from "../constants/countries";

export default function Hotels() {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const hotelsPerPage = 9;

  const fetchHotels = async (code) => {
    setLoading(true);
    try {
      let data = await getHotelsByCountry(code);

      // limit to 50
      if (data.length > 50) {
        data = data.slice(0, 50);
      }

      setHotels(data);
      setPage(1);
    } catch (err) {
      console.error("Error fetching hotels", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHotels(selectedCountry);
  }, [selectedCountry]);

  // Pagination
  const totalPages = Math.ceil(hotels.length / hotelsPerPage);
  const start = (page - 1) * hotelsPerPage;
  const currentHotels = hotels.slice(start, start + hotelsPerPage);

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <h1 className="text-3xl font-bold">Hotels</h1>

        {/* Dropdown */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-sm"
        >
          {countries.map((c) => (
            <option key={c.code} value={c.code}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* Loader */}
      {loading ? (
        <div className="flex justify-center h-60 items-center">
          <div className="animate-spin h-10 w-10 border-b-2 border-black rounded-full"></div>
        </div>
      ) : (
        <>
          <HotelCarousel hotels={hotels} />
          {/* Grid */}
          <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-10 gap-2 flex-wrap">
            <button
              disabled={page === 1}
              onClick={() => {
                setPage(page - 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPage(i + 1);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`px-3 py-1 border rounded ${
                  page === i + 1
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              disabled={page === totalPages}
              onClick={() => {
                setPage(page + 1);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-3 py-1 border rounded disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}