import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getHotelById, getHotelsByCountry } from "../services/api";
import { useWishlist } from "../context/WishlistContext";
import HotelCard from "../components/Hotelcard";

export default function HotelDetail() {
  const { id } = useParams();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [moreHotels, setMoreHotels] = useState([]);

  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  // ✅ FIXED wishlist check
  const isFav = wishlist.some((h) => String(h.id) === String(id));

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch selected hotel
        const data = await getHotelById(id);
        setHotel(data);

        // fetch more hotels (same country fallback IN)
        const more = await getHotelsByCountry("IN");

        // remove current hotel + limit
        const filtered = more
          .filter((h) => String(h.id) !== String(id))
          .slice(0, 6);

        setMoreHotels(filtered);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // ✅ Price fallback
  const price =
    hotel?.price ||
    hotel?.minRate ||
    ((Number(id) * 137) % 90000 + 10000);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <div className="animate-spin h-10 w-10 border-b-2 border-black rounded-full"></div>
      </div>
    );
  }

  if (!hotel) {
    return <div className="text-center mt-20">Hotel not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">

      {/* 🔹 MAIN SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        
        {/* Image */}
        <div>
          <img
            src={hotel?.main_photo || "https://picsum.photos/400/250"}
            className="w-full h-[350px] object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-between">

          <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              {hotel?.name || "Hotel Name"}
            </h1>

            <p className="text-gray-800 dark:text-white mt-2">
              {hotel?.address?.cityName || hotel?.city || "Unknown City"}
            </p>

            {/* Badges */}
            <div className="flex gap-2 mt-3">
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Free Cancellation
              </span>
              <span className="text-xs font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                Breakfast Included
              </span>
            </div>

            {/* Price + Rating */}
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-bold">
                ₹10000
              </span>

              <span className="text-sm text-gray-600">
                ⭐ {hotel?.rating || hotel?.reviewScore || "4.0"} (
                {hotel?.reviewCount || 0})
              </span>
            </div>


            {/* Amenities */}
            <div className="mt-6">
              <h3 className="font-semibold text-lg mb-2">
                Amenities
              </h3>

              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "Free WiFi",
                  "Swimming Pool",
                  "Parking",
                  "Air Conditioning",
                  "Room Service",
                ].map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ✅ Wishlist Button FIXED */}
          <button
            onClick={() => {
              if (isFav) {
                removeFromWishlist(hotel.id);
              } else {
                addToWishlist({
                  ...hotel,
                  id: hotel.id || id,
                });
              }
            }}
            className={`mt-6 py-3 rounded-lg text-sm font-medium ${
              isFav
                ? "bg-red-500 text-white"
                : "bg-black text-white"
            }`}
          >
            {isFav ? "Remove from Wishlist ❤️" : "Add to Wishlist 🤍"}
          </button>
        </div>
      </div>

      {/* 🔹 MORE HOTELS SECTION */}
      <div className="max-w-6xl mx-auto mt-16">
        <h2 className="text-2xl font-bold mb-6">
          More Hotels You May Like
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {moreHotels.map((item) => (
            <HotelCard key={item.id} hotel={item} />
          ))}
        </div>
      </div>

    </div>
  );
}