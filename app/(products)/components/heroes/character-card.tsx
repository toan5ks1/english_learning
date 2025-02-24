"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface CharacterCardProps {
  title: string;
  url: string;
}
// export default function CharacterCard({ title, url }: CharacterCardProps) {
//   return (
//     <Card className="relative w-[300px] bg-[url('/heroes/hero-nft-bg.webp')] p-6 flex flex-col items-center">
//       {/* Black Shadow Behind Image */}
//       {/* <div className="absolute top-6 left-6 w-[250px] h-[150px] bg-black" /> */}

//       {/* Image with Floating Effect */}
//       <div className="relative z-10">
//         <Image
//           src={url}
//           alt={title}
//           width={250}
//           height={250}
//           className="rounded-md"
//         />
//       </div>

//       {/* Title */}
//       <CardContent className="mt-4 text-center font-bold text-black text-lg tracking-wide">
//         {title}
//       </CardContent>
//     </Card>
//   );
// }

export default function CharacterCard({ title, url }: CharacterCardProps) {
  return (
    <div className="bg-transparent w-[200px] relative text-center flex flex-col gap-4">
      <figure className="h-full hover:opacity-90 hover:cursor-pointer">
        <div className="absolute w-full aspect-video bottom-12 bg-black -translate-x-3 translate-y-3"></div>
        <Image
          src="/heroes/hero-nft-bg.webp"
          alt="Background Image"
          className="absolute aspect-video bottom-12 w-full h-auto object-cover border border-[#FBC625]"
          width={200}
          height={120}
        />
        <Image
          className="h-auto transition-all hover:scale-105 absolute bottom-12"
          src={url}
          alt={title}
          width={200}
          height={168}
        />
      </figure>
      <p className="text-md font-bold text-black">{title}</p>
    </div>
  );
}
