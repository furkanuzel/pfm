import { env } from "@/env";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const secretKey = env.JWT_SECRET;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId } = body;

    if (!userId) {
      return NextResponse.json(
        { error: "UserId is required" },
        { status: 400 }
      );
    }

    const token = jwt.sign({ userId }, secretKey, { expiresIn: "1h" });

    return NextResponse.json({ token });
  } catch (err) {
    console.error("Error generating JWT:", err);
    return NextResponse.json(
      { error: "Failed to generate token" },
      { status: 500 }
    );
  }
}
