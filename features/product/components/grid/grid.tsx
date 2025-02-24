"use client";

import { useProducts } from "../../hooks/useProducts";
import ProductCard from "./card";
import { IProduct } from "@/db/model";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductGridProps {
  readonly [x: string]: {};
}

export function ProductGrid({ searchParams }: ProductGridProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProducts(searchParams);
  const products = data?.pages.flatMap((page) => page.products) || [];

  console.log(products);

  return (
    <div className="p-8 space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
      {hasNextPage && (
        <Button
          className="flex justify-center py-4 sticky top-0"
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
        >
          {isFetchingNextPage ? "Loading..." : "View More"}
        </Button>
      )}
    </div>
  );
}
