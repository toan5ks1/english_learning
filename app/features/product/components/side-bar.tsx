"use client";

import { ResetFilter } from "@/app/features/product/components/filters/clear-filter";
import { useSearchTable } from "@/hooks/use-search-table";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { SearchProduct } from "./filters/search";
import { FilterBox } from "./filters/filter-box";
import { THEME, TIER } from "@/lib/const";
import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export function SideBar() {
  const searchField = { id: "product_name", label: "Quick search" };
  const tierField = { id: "tier", label: "Tier", options: TIER };
  const themeField = { id: "theme", label: "Theme", options: THEME };

  const { filterValues, isFilterActive, setFilterValues } = useSearchTable({
    searchFields: [searchField],
    filterFields: [tierField, themeField],
  });

  const [priceRange, setPriceRange] = useState<[number, number]>([0, 500]);

  return (
    <Sidebar>
      <SidebarContent className="px-2 py-4">
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
              <Slider
                variant="range"
                defaultValue={[0, 500]}
                max={500}
                step={1}
                value={priceRange}
                onValueChange={(value: typeof priceRange) =>
                  setPriceRange(value)
                }
              />
              <div className="flex justify-between mt-1 text-sm text-muted-foreground">
                <span>0.01 ETH</span>
                <span>200 ETH</span>
              </div>
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
