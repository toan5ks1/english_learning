import { parseAsInteger, createSearchParamsCache } from "nuqs/server";

export function createDynamicSearchParams(schema: Record<string, any>) {
  return createSearchParamsCache(
    Object.keys(schema).reduce(
      (acc, key) => {
        const { parser, defaultValue } = schema[key];
        acc[key] = parser.withDefault(defaultValue);
        return acc;
      },
      {} as Record<string, any>
    )
  );
}

export const pagingParamsSchema = {
  page: { parser: parseAsInteger, defaultValue: 1 },
  limit: { parser: parseAsInteger, defaultValue: 12 },
};
