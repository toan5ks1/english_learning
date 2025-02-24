"use client";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Toggle } from "@/components/ui/toggle";
import { CATEGORIES } from "@/lib/const";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export function ProductCategory() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Get selected categories from URL (convert comma-separated values into an array)
  const selectedCategories = searchParams.get("category")?.split(",") || [];

  const handleCategoryClick = (category: string) => {
    const params = new URLSearchParams(searchParams);
    let newCategories = [...selectedCategories];

    if (category === "All") {
      params.delete("category"); // Clear all selected categories
    } else {
      if (selectedCategories.includes(category)) {
        // Remove category if already selected
        newCategories = newCategories.filter((c) => c !== category);
      } else {
        // Add category if not selected
        newCategories.push(category);
      }

      if (newCategories.length === 0) {
        params.delete("category"); // If no categories selected, remove param
      } else {
        params.set("category", newCategories.join(",")); // Update category param
      }
    }

    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <ScrollArea className="whitespace-nowrap lg:w-[calc(100vw-30rem)]">
      <div className="flex space-x-3">
        {["All", ...CATEGORIES].map((category) => (
          <Toggle
            key={category}
            aria-label={`Toggle ${category}`}
            className="bg-primary/50 hover:bg-primary/40 data-[state=on]:bg-primary px-3"
            pressed={
              category === "All"
                ? selectedCategories.length === 0
                : selectedCategories.includes(category)
            }
            onPressedChange={() => handleCategoryClick(category)}
          >
            {category}
          </Toggle>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
