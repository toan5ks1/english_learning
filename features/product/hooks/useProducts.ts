import { API_URL } from "@/config/site";
import { IProduct } from "@/db/model";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";

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
  });
}
