"use client";

import {
  Filter,
  FilterFallback,
  ResetFilter,
} from "@/app/features/product/components/filters/filters";
import { useSearchTable } from "@/hooks/use-search-table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { useGenres } from "../hooks/useGenre";
import { SearchProduct } from "./filters/search";
import { FilterBox } from "./filters/filter-box";

export function SideBar() {
  const { isFetching, genres } = useGenres();
  const searchField = { id: "product_name", label: "Product name" };
  const filterField = { id: "genre", label: "Genre", options: genres };
  const { filterValues, isFilterActive, setFilterValues } = useSearchTable({
    searchFields: [searchField],
    filterFields: [filterField],
  });

  console.log(filterValues);

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Filter</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SearchProduct
                searchKey={searchField.id}
                searchLabel={searchField.label}
                value={filterValues[searchField.id] as string}
                onChange={setFilterValues}
              />
              <FilterBox
                key={filterField.id}
                filterKey={filterField.id}
                filterLabel={filterField.label}
                options={filterField.options}
                filterValues={filterValues}
                setFilterValues={(updater) => setFilterValues(updater)}
              />
              <Filter />
              <ResetFilter isFilterActive={isFilterActive} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
