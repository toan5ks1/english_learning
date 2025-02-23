import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Toggle } from "@/components/ui/toggle";
import { CATEGORIES } from "@/lib/const";

export function ProductCategory() {
  return (
    <ScrollArea className="whitespace-nowrap lg:w-[calc(100vw-26rem)]">
      <div className="flex space-x-3">
        {["All", ...CATEGORIES].map((category) => (
          <Toggle
            key={category}
            aria-label="Toggle italic"
            className="bg-primary/50 hover:bg-primary/40 data-[state=on]:bg-primary px-3"
          >
            {category}
          </Toggle>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
