import { API_URL } from "@/config/site";
import { useInfiniteQuery } from "@tanstack/react-query";

const fetchProducts = async (searchParams: any) => {
  const queryParams = new URLSearchParams(searchParams);

  const res = await fetch(`${API_URL}/api/products?${queryParams.toString()}`);
  if (!res.ok) throw new Error("Failed to fetch products");

  return res.json();
};

export function useProducts(filters = {}) {
  return useInfiniteQuery({
    queryKey: ["products", filters], // Cache key
    queryFn: ({ pageParam }) => fetchProducts({ ...filters, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.hasMore ? allPages.length + 1 : undefined; // Next page number
    },
    initialPageParam: 1, // Start from page 1
    refetchInterval: 60000, // Auto-refetch every 60 seconds
    staleTime: 30000, // Data is considered fresh for 30s
  });
}
