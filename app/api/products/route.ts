import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: 1,
      title: "The Great Gatsby",
      description: "A novel written by American author F. Scott Fitzgerald.",
      genre: "Fiction",
      imageUrl: "https://example.com/gatsby.jpg",
    },
    {
      id: 2,
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee published in 1960.",
      genre: "Classic",
      imageUrl: "https://example.com/mockingbird.jpg",
    },
    {
      id: 3,
      title: "1984",
      description: "A dystopian social science fiction novel by George Orwell.",
      genre: "Dystopian",
      imageUrl: "https://example.com/1984.jpg",
    },
  ];

  return NextResponse.json(products, { status: 200 });
}
