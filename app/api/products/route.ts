import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "db", "db.json");

  try {
    const fileData = await fs.readFile(filePath, "utf-8"); // Read file asynchronously
    const jsonData = JSON.parse(fileData); // Parse JSON data

    // console.log(jsonData);

    return NextResponse.json(jsonData, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to load data" }, { status: 500 });
  }
}
