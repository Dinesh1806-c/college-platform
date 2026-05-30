import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const colleges = await prisma.college.findMany();

    console.log(colleges);

    return NextResponse.json(colleges);
  } catch (error: any) {
    console.log("FULL ERROR:", error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}