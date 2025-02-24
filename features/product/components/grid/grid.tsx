"use client";

import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./card";
import { IProduct } from "@/db/model";
import { Button } from "@/components/ui/button";
import Loading from "@/app/(products)/loading";

interface ProductGridProps {
  readonly [x: string]: {};
}

export function ProductGrid({ searchParams }: ProductGridProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useProducts(searchParams);
  const products = data?.pages.flatMap((page) => page.products) || [];

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
        {!products?.length ? (
          <div className="h-60 flex justify-center items-center col-span-full">
            <p className="text-center text-muted-foreground">
              No products found.
            </p>
          </div>
        ) : (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
      <div className="flex justify-center pt-16 sm:h-80 h-20">
        {hasNextPage ? (
          <Button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading..." : "View More"}
          </Button>
        ) : products?.length ? (
          <p>Đã hết</p>
        ) : null}
      </div>
    </div>
  );
}
