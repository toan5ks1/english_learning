import { ProductGrid } from "@/features/product/components/grid/grid";
import Image from "next/image";
import { API_URL } from "@/config/site";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ProductCategory } from "@/features/product/components/filters/category";
import { productSearchParamsCache } from "@/features/product/helper";

async function fetchProducts() {
  const res = await fetch(`${API_URL}/api/products`); // Use absolute URL
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

export default async function Page(props: PageProps) {
  const searchParams = await props.searchParams;
  const cachedSearchParams = productSearchParamsCache.parse(searchParams);

  return (
    <div className="w-full bg-background">
      <div className="bg-background sticky z-50 top-0 py-2 sm:px-8 px-4">
        <div className="h-12 flex items-center">
          <SidebarTrigger
            className="lg:hidden block size-9 px-1 mr-2"
            variant={"secondary"}
          />
          <ProductCategory />
        </div>
      </div>

      <ProductGrid searchParams={cachedSearchParams} />
      <Image
        src="/heroes/page-end.svg"
        alt="Background Image"
        width={900}
        height={300}
        loading="lazy"
        className="w-full h-auto object-cover object-center"
      />
    </div>
  );
}
