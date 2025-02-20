import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageUrlById(id: number) {
  const imageUrls = [
    "/products/assassin.webp",
    "/products/bassketball-girl.webp",
    "/products/mafia-england.webp",
    "/products/neon-guy.webp",
    "/products/the-dj.webp",
  ];

  // Use modulo to cycle through the images
  const index = (id - 1) % imageUrls.length;
  return imageUrls[index];
}
