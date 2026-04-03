import { useWishlist } from "../context/WishlistContext";
import { Link } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const { addToWishlist, removeFromWishlist, wishlist } = useWishlist();

  const isFav = wishlist.find((h) => h.id === hotel.id);

  const randomPrice = Math.floor(10000 + Math.random() * 90000);

  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition">
      
      {/* 🔗 Wrap image + content */}
      <Link to={`/hotels/${hotel.id}`}>
        <img
          src={hotel.main_photo || "https://picsum.photos/400/250"}
          className="h-48 w-full object-cover"
        />

        <div className="p-4">
          <h2 className="font-semibold text-lg  text-gray-800 dark:text-white">{hotel.name}</h2>
          <p className="text-sm text-gray-800 dark:text-white">{hotel.city}</p>

          <div className="flex flex-wrap gap-2 mt-2">
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
              Free Cancellation
            </span>
            <span className="text-xs font-bold text-blue-700 bg-blue-100 px-2 py-1 rounded-full">
              Breakfast Included
            </span>
          </div>

          <div className="flex justify-between mt-3 text-sm  text-gray-800 dark:text-white">
            <span>₹{randomPrice}</span>
            <span>
              ⭐ {hotel.reviewScore || "4.0"} ({hotel.reviewCount || 0})
            </span>
          </div>
        </div>
      </Link>

      {/* ❗ Keep button OUTSIDE link */}
      <button
        onClick={() =>
          isFav ? removeFromWishlist(hotel.id) : addToWishlist(hotel)
        }
        className="m-4 text-sm  text-gray-800 dark:text-white"
      >
        {isFav ? "❤️ Remove" : "🤍 Add to Favs"}
      </button>
    </div>
  );
}