import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">

        {/* Logo + About */}
        <div>
          <h2 className="text-xl font-bold">AlmaHotels</h2>
          <p className="text-sm text-gray-400 mt-3">
            Discover the best hotels, compare prices, and save your favourites —
            all in one place.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <Link to="/" className="hover:text-white transition">
              Blog
            </Link>
            <Link to="/hotels" className="hover:text-white transition">
              Hotels
            </Link>
            <Link to="/wishlist" className="hover:text-white transition">
              Favourites
            </Link>
            <Link to="/about" className="hover:text-white transition">
              About
            </Link>
          </div>
        </div>

        {/* Extra Links */}
        <div>
          <h3 className="font-semibold mb-3">Support</h3>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">
              Contact Us
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 text-center text-sm text-gray-800 dark:text-white py-4">
        © {new Date().getFullYear()} AlmaHotels. All rights reserved.
      </div>
    </footer>
  );
}