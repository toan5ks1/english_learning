"use client";

import Image from "next/image";

interface CharacterCardProps {
  title: string;
  url: string;
}

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
