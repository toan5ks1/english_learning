"use client";

import { Input } from "@/components/ui/input";
import { useDebouncedCallback } from "@/hooks/use-debounced-callback";
import { useEffect, useState } from "react";

interface SearchProductProps {
  searchKey: string;
  searchLabel: string;
  value: string;
  onChange: (value: any) => void;
}

export function SearchProduct({
  searchKey,
  searchLabel,
  value,
  onChange,
}: SearchProductProps) {
  const [inputValue, setInputValue] = useState(value ?? "");
  // Create a debounced setter for filters
  const debouncedSetFilterValues = useDebouncedCallback(onChange, 300);

  // Clear input
  useEffect(() => {
    console.log(value);
    if (!value) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <Input
      placeholder={searchLabel}
      value={inputValue ?? ""}
      onChange={(e) => {
        const input = e.target.value;
        setInputValue(input);
        debouncedSetFilterValues({ [searchKey]: input });
      }}
      className="w-full md:max-w-80"
    />
  );
}
