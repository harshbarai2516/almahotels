import { createContext, useContext, useState, useEffect } from "react";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {

  // ✅ Load from localStorage initially
  const [wishlist, setWishlist] = useState(() => {
    const stored = localStorage.getItem("wishlist");
    return stored ? JSON.parse(stored) : [];
  });

  // ✅ Sync to localStorage whenever wishlist changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Add
  const addToWishlist = (hotel) => {
    setWishlist((prev) => {
      if (prev.find((h) => String(h.id) === String(hotel.id))) {
        return prev;
      }
      return [...prev, hotel];
    });
  };

  // Remove
  const removeFromWishlist = (id) => {
    setWishlist((prev) =>
      prev.filter((h) => String(h.id) !== String(id))
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);