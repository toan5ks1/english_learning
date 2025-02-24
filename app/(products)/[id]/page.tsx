import { Photo } from "@/features/product/components/photo";
import { ScrollArea } from "@/components/ui/scroll-area";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  const product = { title: "x", image_url: "/", description: "y" };

  return (
    <ScrollArea className="px-4 h-full">
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
