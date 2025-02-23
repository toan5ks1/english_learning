"use client";

import { ResetFilter } from "@/features/product/components/filters/clear-filter";
import { useSearchTable } from "@/hooks/use-search-table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { SearchProduct } from "./filters/search";
import { FilterBox } from "./filters/filter-box";
import { THEME, TIER } from "@/lib/const";
import { Label } from "@/components/ui/label";
import { PriceSlider } from "./filters/price-slider";

export function SideBar() {
  const searchField = { id: "product_name", label: "Quick search" };
  const tierField = { id: "tier", label: "Tier", options: TIER };
  const themeField = { id: "theme", label: "Theme", options: THEME };

  const { filterValues, isFilterActive, setFilterValues } = useSearchTable({
    searchFields: [searchField],
    filterFields: [tierField, themeField],
  });

  return (
    <Sidebar className="sticky top-0">
      <SidebarContent className="px-4 py-6">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-4">
              <SearchProduct
                searchKey={searchField.id}
                searchLabel={searchField.label}
                value={filterValues[searchField.id] as string}
                onChange={setFilterValues}
              />
              <Label htmlFor="price-range">Prices</Label>
              <PriceSlider
                value={filterValues["price_range"]}
                filterValues={filterValues}
                setFilterValues={setFilterValues}
              />
              <FilterBox
                key={tierField.id}
                filterKey={tierField.id}
                filterLabel={tierField.label}
                options={tierField.options}
                filterValues={filterValues}
                setFilterValues={(updater) => setFilterValues(updater)}
              />
              <FilterBox
                key={themeField.id}
                filterKey={themeField.id}
                filterLabel={themeField.label}
                options={themeField.options}
                filterValues={filterValues}
                setFilterValues={(updater) => setFilterValues(updater)}
              />
              <ResetFilter isFilterActive={isFilterActive} />
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
