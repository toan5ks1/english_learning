import { NextResponse } from "next/server";

export interface Genre {
  id: number;
  value: string;
  label: string;
  description: string;
}

export async function GET() {
  const genres: Genre[] = [
    {
      id: 1,
      value: "novel",
      label: "Novel",
      description: "A novel written by American author F. Scott Fitzgerald.",
    },
    {
      id: 2,
      value: "horror",
      label: "Horror",
      description: "A novel by Harper Lee published in 1960.",
    },
    {
      id: 3,
      value: "epic",
      label: "Epic",
      description: "A dystopian social science fiction novel by George Orwell.",
    },
  ];

  return NextResponse.json(genres, { status: 200 });
}
