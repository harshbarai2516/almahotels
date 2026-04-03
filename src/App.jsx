import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blogs";
import Hotels from "./pages/Hotels";
import Wishlist from "./pages/Favourite";
import About from "./pages/About";
import HotelDetail from "./pages/Details";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}