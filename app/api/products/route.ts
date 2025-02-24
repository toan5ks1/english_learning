import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import { productSearchParamsCache } from "@/features/product/helper";

export async function GET(req: NextRequest) {
  const filePath = path.join(process.cwd(), "db", "db.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8"); // Read file asynchronously

    const searchParams = Object.fromEntries(req.nextUrl.searchParams.entries());
    const filters = productSearchParamsCache.parse(searchParams);

    let jsonData = JSON.parse(fileData); // Parse JSON data
    // Apply Filters
    jsonData = jsonData.products.filter((item: any) => {
      if (
        filters.product_name &&
        !item.product_name
          .toLowerCase()
          .includes(String(filters.product_name).toLowerCase())
      ) {
        return false;
      }

      if (filters.category && item.category !== filters.category) {
        return false;
      }

      if (filters.price_range) {
        const [minPrice, maxPrice] = String(filters.price_range)
          .split("-")
          .map(Number);
        if (item.price < minPrice || item.price > maxPrice) {
          return false;
        }
      }

      if (filters.tier && Array.isArray(filters.tier) && filters.tier.length) {
        if (!filters.tier.includes(item.tier)) {
          return false;
        }
      }

      if (
        filters.theme &&
        Array.isArray(filters.theme) &&
        filters.theme.length
      ) {
        if (!filters.theme.includes(item.theme)) {
          return false;
        }
      }

      return true;
    });

    console.log(filters);
    const page = Number(filters.page) || 1;
    const limit = Number(filters.limit) || 16;
    const startIndex = (page - 1) * limit;
    const paginatedProducts = jsonData.slice(startIndex, startIndex + limit);
    const hasMore = startIndex + paginatedProducts.length < jsonData.length;

    return NextResponse.json(
      { products: paginatedProducts, hasMore },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
