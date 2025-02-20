import ProductCard from "./card";
import { IProduct } from "@/db/model";

export async function CardsGrid({ products }: { products: IProduct[] }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {!products?.length ? (
        <p className="text-center text-muted-foreground col-span-full">
          No products found.
        </p>
      ) : (
        products.map((product, index) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
