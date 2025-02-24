import React from "react";
import { useQueryStates } from "nuqs"; // Assuming nuqs provides this
import { parseAsString, parseAsArrayOf, Parser } from "nuqs/server";

type Field = {
  id: string;
  label?: string;
  options?: string[];
};

type UseSearchTableProps = {
  fields: Field[];
  queryStateOptions?: Record<string, any>;
};

export function useSearchTable({
  fields,
  queryStateOptions = { shallow: false },
}: UseSearchTableProps) {
  const filterParsers = React.useMemo(() => {
    return fields.reduce<Record<string, Parser<string> | Parser<string[]>>>(
      (acc, field) => {
        if (field.options) {
          acc[field.id] = parseAsArrayOf(parseAsString, ",").withOptions(
            queryStateOptions
          );
        } else {
          acc[field.id] = parseAsString.withOptions(queryStateOptions);
        }
        return acc;
      },
      {}
    );
  }, [fields, queryStateOptions]);

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
