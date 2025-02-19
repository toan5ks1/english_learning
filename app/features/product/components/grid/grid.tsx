import Link from "next/link";
import { Photo } from "../photo";
import { SearchParams, stringifySearchParams } from "@/lib/url-state";
import { Card } from "@/lib/types";

export async function CardsGrid({
  cards,
  searchParams,
}: {
  cards: Card[];
  searchParams: SearchParams;
}) {
  return (
    <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7">
      {!cards?.length ? (
        <p className="text-center text-muted-foreground col-span-full">
          No products found.
        </p>
      ) : (
        cards.map((card, index) => (
          <ProductLink
            key={card.id}
            priority={index < 10}
            product={card}
            searchParams={searchParams}
          />
        ))
      )}
    </div>
  );
}

function ProductLink({
  priority,
  product,
  searchParams,
}: {
  priority: boolean;
  product: Card;
  searchParams: SearchParams;
}) {
  let noFilters = Object.values(searchParams).every((v) => v === undefined);

  return (
    <Link
      href={`/${product.id}?${stringifySearchParams(searchParams)}`}
      key={product.id}
      className="block transition ease-in-out md:hover:scale-105"
      prefetch={noFilters ? true : null}
    >
      <Photo
        src={product.image_url!}
        title={product.title}
        priority={priority}
      />
    </Link>
  );
}
