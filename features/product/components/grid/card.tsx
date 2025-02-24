import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { IProduct } from "@/db/model";
import { cn, getGradientByRarity, getImageUrlById } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface ProductCardProps {
  product: IProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="p-4">
      <figure
        className={`relative aspect-square group overflow-hidden rounded-md hover:opacity-90 hover:cursor-pointer pt-8 border-b`}
        style={{ background: getGradientByRarity(product.category) }}
      >
        <HeartIcon className="fill-background text-background size-4 my-0.5 absolute top-3 end-3" />
        <Badge className="bg-[rgba(49,59,69,0.5)] absolute top-3 start-3 rounded-sm dark:text-black">
          {product.category}
        </Badge>
        <Image
          className="w-full transition-all hover:scale-105"
          src={getImageUrlById(product.imageId)}
          width={500}
          height={500}
          alt={product.title}
        />
      </figure>
      <CardContent className="space-y-2 p-0 pt-6">
        <div className="flex justify-between">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-lg font-semibold">{product.price}</p>
        </div>
        <div className="flex space-x-2">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p>{product.author.firstName + " " + product.author.lastName}</p>
        </div>
      </CardContent>
    </Card>
  );
}
