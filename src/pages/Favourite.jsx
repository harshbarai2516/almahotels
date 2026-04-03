import { useWishlist } from "../context/WishlistContext";
import HotelCard from "../components/Hotelcard";

export default function Wishlist() {
  const { wishlist } = useWishlist();

  return (
    <div className="min-h-screen bg-gray-50 px-4 md:px-10 py-10">

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold">Your Favourites</h1>

        <span className="text-sm text-gray-800 dark:text-white">
          {wishlist.length} saved
        </span>
      </div>

      {/* Empty State */}
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-[60vh] text-center">
          
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            className="w-32 opacity-70 mb-4"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            No favourites yet
          </h2>

          <p className="text-gray-800 dark:text-white mt-2">
            Go add something before this page gets lonely.
          </p>
        </div>
      ) : (
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {wishlist.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}

        </div>
      )}
    </div>
  );
}