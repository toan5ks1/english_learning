import "@testing-library/jest-dom";
import { cn, getImageUrlById, getGradientByRarity } from "./utils"; // Adjust the path

describe("utils functions", () => {
  describe("cn function", () => {
    it("should merge class names correctly", () => {
      expect(cn("bg-red-500", "text-white")).toBe("bg-red-500 text-white");
    });

    it("should handle dynamic class names", () => {
      expect(cn("bg-red-500", "text-white", "hover:bg-blue-500")).toBe(
        "bg-red-500 text-white hover:bg-blue-500"
      );
    });

    it("should merge class names with tailwind-merge", () => {
      expect(cn("bg-red-500", "bg-blue-500")).toBe("bg-blue-500");
    });
  });

  describe("getImageUrlById function", () => {
    it("should return the correct image URL for id 1", () => {
      expect(getImageUrlById(1)).toBe("/products/assassin.webp");
    });

    it("should return the correct image URL for id 6", () => {
      expect(getImageUrlById(6)).toBe("/products/assassin.webp");
    });

    it("should return the correct image URL for id 11", () => {
      expect(getImageUrlById(11)).toBe("/products/assassin.webp");
    });

    it("should return a different image URL for different ids", () => {
      expect(getImageUrlById(2)).toBe("/products/bassketball-girl.webp");
      expect(getImageUrlById(3)).toBe("/products/mafia-england.webp");
    });
  });

  describe("getGradientByRarity function", () => {
    it("should return the correct gradient for 'Epic'", () => {
      expect(getGradientByRarity("Epic")).toBe(
        "linear-gradient(90.13deg, #DD5AFE 0%, #6366F1 100%)"
      );
    });

    it("should return the default gradient for unknown categories", () => {
      expect(getGradientByRarity("Unknown")).toBe(
        "linear-gradient(to bottom right, #555, #333)"
      );
    });

    it("should return the correct gradient for 'Common'", () => {
      expect(getGradientByRarity("Common")).toBe(
        "linear-gradient(90.13deg, #49DD81 0%, #22B4C6 100%)"
      );
    });

    it("should return the correct gradient for 'Mythic'", () => {
      expect(getGradientByRarity("Mythic")).toBe(
        "linear-gradient(90.13deg, #FE5A5A 0%, #F163D2 100%)"
      );
    });
  });
});
