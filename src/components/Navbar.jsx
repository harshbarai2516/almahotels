import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";
import { Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import Logo from "./Logo";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { wishlist } = useWishlist();

    const { dark, toggleTheme } = useTheme();

    const navItems = [
        { name: "Blog", path: "/" },
        { name: "Hotels", path: "/hotels" },
        { name: "Favs", path: "/wishlist" },
        { name: "About", path: "/about" },
    ];

    return (
        <nav className="bg-white dark:bg-gray-900/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

                {/* Logo */}
                <div className="hover:scale-105 transition duration-300">
                    <Logo />
                </div>
                <h1 className="text-xl font-bold text-gray-800 dark:text-white">
                    AlmaHotels
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `relative text-sm font-medium transition ${isActive
                                    ? "text-gray-800 dark:text-white"
                                    : "text-gray-800 dark:text-white hover:text-gray-800 dark:text-white"
                                }`
                            }
                        >
                            {item.name}

                            {/* Active underline */}
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all group-hover:w-full"></span>

                            {/* Wishlist badge */}
                            {item.name === "Favs" && wishlist.length > 0 && (
                                <span className="ml-1 text-xs bg-black text-white px-2 py-[2px] rounded-full">
                                    {wishlist.length}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>

                <button
                    onClick={toggleTheme}
                    className="ml-4 px-3 py-1 rounded-lg border text-sm"
                >
                    {dark ? "🌙 Dark" : "☀️ Light"}
                </button>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-60" : "max-h-0"
                    }`}
            >
                <div className="flex flex-col px-4 pb-4 gap-3">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `py-2 px-2 rounded-md text-sm ${isActive
                                    ? "bg-black text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                }`
                            }
                        >
                            {item.name}

                            {item.name === "Favs" && wishlist.length > 0 && (
                                <span className="ml-2 text-xs bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-2 py-[2px] rounded-full">
                                    {wishlist.length}
                                </span>
                            )}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
}