import { Suspense } from "react";
import { CardsGrid } from "@/app/features/product/components/grid/grid";
import { ProductPagination } from "@/app/features/product/components/grid/pagination";
import { parseSearchParams } from "@/lib/url-state";
import { ITEMS_PER_PAGE } from "@/lib/const";

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams = await props.searchParams;
  const parsedSearchParams = parseSearchParams(searchParams);

  const [products, estimatedTotal] = await Promise.all([[], 0]);

  const totalPages = Math.ceil(estimatedTotal / ITEMS_PER_PAGE);
  const currentPage = Math.max(1, Number(parsedSearchParams.page) || 1);

  return (
    <div className="flex flex-col h-full">
      <div className="group-has-[[data-pending]]:animate-pulse p-4">
        <CardsGrid cards={products} searchParams={parsedSearchParams} />
      </div>
      <div className="mt-auto p-4">
        <Suspense fallback={null}>
          <ProductPagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalResults={estimatedTotal}
            searchParams={parsedSearchParams}
          />
        </Suspense>
      </div>
    </div>
  );
}
