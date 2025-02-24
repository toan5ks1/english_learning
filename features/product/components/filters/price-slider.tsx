import { Slider } from "@/components/ui/slider";
import { useDebounce } from "@/hooks/use-debounce";
import { useEffect, useState } from "react";

type PriceSliderProps = {
  value: string | string[] | null;
  filterValues: Record<string, any>;
  setFilterValues: (
    updater: (prev: Record<string, any>) => Record<string, any>
  ) => void;
};

export function PriceSlider({
  value,
  filterValues,
  setFilterValues,
}: PriceSliderProps) {
  const DEFAULT_PRICE_RANGE: [number, number] = [0, 200];

  const getInitialPriceRange = (): [number, number] => {
    const priceRangeParam = filterValues["price_range"];
    if (priceRangeParam) {
      const [min, max] = priceRangeParam.split("-").map(Number);
      if (!isNaN(min) && !isNaN(max)) {
        return [min, max];
      }
    }
    return DEFAULT_PRICE_RANGE; // Default range
  };

  const [priceRange, setPriceRange] =
    useState<[number, number]>(getInitialPriceRange);
  const debouncedPrice = useDebounce(priceRange, 500);

  useEffect(() => {
    if (
      JSON.stringify(debouncedPrice) !== JSON.stringify(DEFAULT_PRICE_RANGE)
    ) {
      setFilterValues((prev) => ({
        ...prev,
        price_range: `${debouncedPrice[0]}-${debouncedPrice[1]}`,
      }));
    }
  }, [debouncedPrice, setFilterValues]);

  useEffect(() => {
    if (!value) {
      setPriceRange(DEFAULT_PRICE_RANGE);
    }
  }, [value]);

  return (
    <>
      <Slider
        variant="range"
        max={200}
        step={1}
        value={priceRange}
        onValueChange={(value: typeof priceRange) => setPriceRange(value)}
      />
      <div className="flex justify-between mt-1 text-sm text-muted-foreground">
        <span>0.01 ETH</span>
        <span>200 ETH</span>
      </div>
    </>
  );
}
