import React from "react";
import { useQueryStates } from "nuqs"; // Assuming nuqs provides this
import { parseAsString, parseAsArrayOf, Parser } from "nuqs/server";

type Option = {
  label: string;
  id: number;
  icon?: any;
};

type Field = {
  id: string;
  label?: string;
  options?: Option[];
};

type UseSearchTableProps = {
  searchFields: Field[];
  filterFields?: Field[];
  queryStateOptions?: Record<string, any>;
};

export function useSearchTable({
  searchFields,
  filterFields,
  queryStateOptions = { shallow: false },
}: UseSearchTableProps) {
  const allFields = React.useMemo(
    () => [...searchFields, ...(filterFields ?? [])],
    [searchFields, filterFields]
  );

  const filterParsers = React.useMemo(() => {
    return allFields.reduce<Record<string, Parser<string> | Parser<string[]>>>(
      (acc, field) => {
        if (field.options) {
          // Faceted filter
          acc[field.id] = parseAsArrayOf(parseAsString, ",").withOptions(
            queryStateOptions
          );
        } else {
          // Search field
          acc[field.id] = parseAsString.withOptions(queryStateOptions);
        }
        return acc;
      },
      {}
    );
  }, [allFields, queryStateOptions]);

  // Create state for filter values
  const [filterValues, setFilterValues] = useQueryStates(filterParsers);

  const isFilterActive = Object.values(filterValues).some(
    (value) => value && value.length > 0
  );

  return {
    filterValues,
    isFilterActive,
    setFilterValues,
  };
}
