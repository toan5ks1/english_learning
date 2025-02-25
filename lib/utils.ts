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

export const getGradientByRarity = (category: string) => {
  const gradients: Record<string, string> = {
    "Upper Body": "linear-gradient(to bottom right, #ff9a9e, #fad0c4)", // Soft Pink to Peach
    "Lower Body": "linear-gradient(to bottom right, #a18cd1, #fbc2eb)", // Purple to Pink
    Hat: "linear-gradient(to bottom right, #fbc2eb, #a6c1ee)", // Pink to Light Blue
    Shoes: "linear-gradient(to bottom right, #ffdde1, #ee9ca7)", // Light Pink to Rose
    Common: "linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)", // Green to Teal
    Accessory: "linear-gradient(to bottom right, #74ebd5, #acb6e5)", // Cyan to Blue Gray
    Legendary: "linear-gradient(90.13deg, #FE955A 0%, #F1DA63 100%)", // Orange to Yellow
    Mythic: "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)",
    Epic: "linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)",
    Rare: "linear-gradient(90deg, #43A6F6 0%, #5868F3 100%)",
  };

  return gradients[category] || "linear-gradient(to bottom right, #555, #333)"; // Default Gray
};
