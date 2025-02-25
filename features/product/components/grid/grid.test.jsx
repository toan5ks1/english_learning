import React from "react";
import "@testing-library/jest-dom";
import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductGrid } from "./grid";
import { useProducts } from "../../hooks/useProducts";

// Mock dependencies
jest.mock("../../hooks/useProducts");
jest.mock("./card", () => ({ product }) => (
  <div data-testid="product-card">{product.title}</div>
));

jest.mock("@/app/(products)/loading", () => () => <div>Loading...</div>);

const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

// Sample product data
const mockProductsPage1 = {
  products: [
    {
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
    },
  ],
  hasMore: true,
};

// Utility function to mock `useProducts`
const mockUseProducts = (overrides = {}) => {
  useProducts.mockReturnValue({
    data: { pages: [mockProductsPage1] },
    fetchNextPage: jest.fn(),
    hasNextPage: true,
    isFetchingNextPage: false,
    isLoading: false,
    ...overrides,
  });
};

describe("ProductGrid", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders loading state", () => {
    mockUseProducts({ isLoading: true });

    render(<ProductGrid searchParams={null} />, { wrapper: createWrapper() });

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays products when data is available", () => {
    mockUseProducts();

    render(<ProductGrid searchParams={null} />, { wrapper: createWrapper() });

    expect(screen.getByTestId("product-card")).toHaveTextContent(
      "Metal Gear Girl"
    );
  });

  test("displays 'No products found' when no products are returned", () => {
    mockUseProducts({ data: { pages: [{ products: [] }] } });

    render(<ProductGrid searchParams={{}} />, { wrapper: createWrapper() });

    expect(screen.getByText("No products found.")).toBeInTheDocument();
  });

  test("loads more products when 'View More' is clicked", async () => {
    const fetchNextPage = jest.fn();
    mockUseProducts({ fetchNextPage });

    render(<ProductGrid searchParams={{}} />, { wrapper: createWrapper() });

    fireEvent.click(screen.getByText("View More"));

    await waitFor(() => {
      expect(fetchNextPage).toHaveBeenCalled();
    });
  });

  test("displays 'Đã hết' when no more products are available", () => {
    mockUseProducts({
      data: { pages: [mockProductsPage1] },
      hasNextPage: false,
    });

    render(<ProductGrid searchParams={{}} />, { wrapper: createWrapper() });

    expect(screen.getByText("Đã hết")).toBeInTheDocument();
  });
});
