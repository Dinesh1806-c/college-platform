import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  await prisma.college.createMany({
    data: [
      {
        name: "IIIT Dharwad",
        location: "Karnataka",
        fees: 250000,
        rating: 4.5,
        description: "Top engineering institute",
        image: "/images/iit-bombay.webp"
      },
      {
        name: "IIT Bombay",
        location: "Mumbai",
        fees: 300000,
        rating: 4.9,
        description: "Premier IIT college",
        image: "/images/iiit.jpg"
      },
      {
        name: "NIT Trichy",
        location: "Tamil Nadu",
        fees: 200000,
        rating: 4.7,
        description: "Top NIT in India",
        image: "/images/nit-trichy.jpg"
      },
    ],
  });

  return NextResponse.json({
    message: "College data seeded successfully",
  });
}