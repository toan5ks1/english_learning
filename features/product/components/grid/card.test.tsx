import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ProductCard from "./card"; // Adjust path if needed
import { IProduct } from "@/db/model";

// Mock utility functions
jest.mock("@/lib/utils", () => ({
  getGradientByRarity: jest.fn(
    () => "linear-gradient(to right, #ff7e5f, #feb47b)"
  ),
  getImageUrlById: jest.fn((id) => `https://example.com/image/${id}`),
  cn: jest.fn((...args) => args.filter(Boolean).join(" ")), // Mock 'cn' function
}));

describe("ProductCard", () => {
  const mockProduct: IProduct = {
    id: 1,
    title: "Metal Gear Girl",
    category: "Mythic",
    price: 30.09,
    isFavorite: false,
    createdAt: 1624533946000,
    theme: "Halloween",
    tier: "Premium",
    imageId: 8,
    author: {
      firstName: "Dewie",
      lastName: "Labeuil",
      email: "dlabeuilv@nba.com",
      gender: "Male",
      avatar:
        "https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1",
      onlineStatus: "idle",
    },
  };

  it("renders product information correctly", () => {
    render(<ProductCard product={mockProduct} />);

    // Check title and price
    expect(screen.getByText("Metal Gear Girl")).toBeInTheDocument();
    expect(screen.getByText("30.09")).toBeInTheDocument();

    // Check author name
    expect(screen.getByText("Dewie Labeuil")).toBeInTheDocument();

    // Check category badge
    expect(screen.getByText("Mythic")).toBeInTheDocument();
  });

  it("renders product image with correct alt text", () => {
    render(<ProductCard product={mockProduct} />);

    const image = screen.getByAltText("Metal Gear Girl");
    expect(image).toBeInTheDocument();
  });

  it("applies background gradient based on product category", () => {
    render(<ProductCard product={mockProduct} />);

    const figure = screen.getByRole("figure");
    expect(figure).toHaveStyle(
      "background: linear-gradient(to right, #ff7e5f, #feb47b)"
    );
  });

  it("renders the HeartIcon", () => {
    render(<ProductCard product={mockProduct} />);
    const heartIcon = document.querySelector(".lucide-heart");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders the Avatar with fallback", () => {
    render(<ProductCard product={mockProduct} />);
    const avatarFallback = screen.getByText("CN");
    expect(avatarFallback).toBeInTheDocument();
  });
});
