import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import HotelCard from "../Hotelcard";
import { WishlistProvider } from "../../context/WishlistContext";

const mockHotel = {
  id: 1,
  name: "Test Hotel",
  city: "Mumbai",
  main_photo: "https://picsum.photos/200",
  reviewScore: 4.5,
  reviewCount: 120,
};

describe("HotelCard", () => {
  test("renders hotel info", () => {
    render(
      <MemoryRouter>
        <WishlistProvider>
          <HotelCard hotel={mockHotel} />
        </WishlistProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Test Hotel")).toBeInTheDocument();
    expect(screen.getByText("Mumbai")).toBeInTheDocument();
  });

  test("adds to wishlist when clicked", () => {
    render(
      <MemoryRouter>
        <WishlistProvider>
          <HotelCard hotel={mockHotel} />
        </WishlistProvider>
      </MemoryRouter>
    );

    const button = screen.getByText("🤍 Add to Favs");

    fireEvent.click(button);

    expect(screen.getByText("❤️ Remove")).toBeInTheDocument();
  });
});