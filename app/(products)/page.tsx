import { Suspense } from "react";
import { CardsGrid } from "@/features/product/components/grid/grid";
import { ProductPagination } from "@/features/product/components/grid/pagination";
import { parseSearchParams } from "@/lib/url-state";
import { ITEMS_PER_PAGE } from "@/lib/const";
import { API_URL } from "@/config/site";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProductCategory } from "@/features/product/components/filters/category";
import { Button } from "@/components/ui/button";

async function fetchProducts() {
  const res = await fetch(`${API_URL}/api/products`); // Use absolute URL
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}
export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = parseSearchParams(searchParams);

  // const [products, estimatedTotal] = await Promise.all([[], 0]);

  const products = await fetchProducts();

  // const totalPages = Math.ceil(estimatedTotal / ITEMS_PER_PAGE);
  // const currentPage = Math.max(1, Number(parsedSearchParams.page) || 1);

  return (
    <div className="w-full bg-background">
      <div className="bg-background sticky z-50 top-0 px-4 py-2">
        <div className="h-12 flex items-center">
          <SidebarTrigger
            className="lg:hidden block size-9 px-1 mr-2"
            variant={"secondary"}
          />
          <ProductCategory />
        </div>
      </div>
      <div className="p-4">
        <CardsGrid products={products.products.slice(0, 20)} />
      </div>
      <div className="flex justify-center py-4">
        <Button>View more</Button>
      </div>
    </div>
  );
}
