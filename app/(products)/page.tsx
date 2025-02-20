import { Suspense } from "react";
import { CardsGrid } from "@/features/product/components/grid/grid";
import { ProductPagination } from "@/features/product/components/grid/pagination";
import { parseSearchParams } from "@/lib/url-state";
import { ITEMS_PER_PAGE } from "@/lib/const";
import { API_URL } from "@/config/site";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

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
    <div className="z-10 h-full px-4 py-6 space-y-4 bg-background">
      <div className="rounded-md sticky z-20 top-0 h-12 bg-slate-200">
        category
      </div>
      <CardsGrid products={products.products.slice(0, 20)} />
    </div>
  );
}
