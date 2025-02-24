import { createDynamicSearchParams, pagingParamsSchema } from "@/lib/url-state";
import { parseAsArrayOf, parseAsString } from "nuqs/server";

export interface ProductSearchParams {
  product_name: string;
  category: string;
  price_range: string;
  tier: string[];
  theme: string[];
}

export const productSearchParamsSchema = {
  ...pagingParamsSchema,
  product_name: { parser: parseAsString, defaultValue: "" },
  category: { parser: parseAsString, defaultValue: "" },
  price_range: { parser: parseAsString, defaultValue: "" },
  tier: { parser: parseAsArrayOf(parseAsString, ","), defaultValue: [] },
  theme: { parser: parseAsArrayOf(parseAsString, ","), defaultValue: [] },
};

export const productSearchParamsCache = createDynamicSearchParams(
  productSearchParamsSchema
);
