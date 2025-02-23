import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function ResetFilter({ isFilterActive }: { isFilterActive: boolean }) {
  const router = useRouter();
  const pathname = usePathname();

  const onReset = () => {
    router.push(pathname, {
      scroll: false,
    });
  };

  return (
    <>
      {isFilterActive ? (
        <Button variant="outline" className="w-full" onClick={onReset}>
          Clear all filters
        </Button>
      ) : null}
    </>
  );
}
