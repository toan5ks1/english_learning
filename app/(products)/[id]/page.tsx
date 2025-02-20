import { StarIcon, ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Photo } from "@/features/product/components/photo";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { SearchParams, stringifySearchParams } from "@/lib/url-state";

const LANGUAGES = [
  { value: "en", label: "English" },
  { value: "spa", label: "Spanish" },
  { value: "ita", label: "Italian" },
  { value: "ara", label: "Arabic" },
  { value: "fre", label: "French" },
  { value: "ger", label: "German" },
  { value: "ind", label: "Indonesian" },
  { value: "por", label: "Portuguese" },
];

function getLanguageLabel(code: string | null): string {
  if (!code) return "Unknown";
  const language = LANGUAGES.find((lang) => lang.value === code.toLowerCase());
  return language ? language.label : "Unknown";
}

export default async function Page(props: {
  params: Promise<{ id: string }>;
  searchParams: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const params = await props.params;
  const product = { title: "x", image_url: "/", description: "y" };

  return (
    <ScrollArea className="px-4 h-full">
      <Button variant="ghost" className="mb-4" asChild>
        <Link href={`/?${stringifySearchParams(searchParams)}`}>
          <ArrowLeftIcon className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </Button>

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-1/2 md:w-1/4 mx-auto md:mx-0">
          <Photo
            src={product.image_url!}
            title={product.title}
            priority={true}
          />
        </div>

        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {product.title}
          </h1>
          <p className="text-gray-700 mb-6">{product.description}</p>
        </div>
      </div>
    </ScrollArea>
  );
}

function StarRating({ rating }: { rating: string | null }) {
  if (rating === null) return null;

  return (
    <div className="flex items-center mr-4">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`w-5 h-5 ${
            i < Math.floor(Number(rating))
              ? "text-yellow-400 fill-current"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
