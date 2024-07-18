require("dotenv").config();
import { NextRequest, NextResponse } from "next/server";

interface SubscribeRequest {
  email: string;
}

export async function POST(request: Request) {
  const { email }: SubscribeRequest = await request.json();

  const response = await fetch(
    `https://api.convertkit.com/v3/forms/${process.env.NEXT_PUBLIC_CONVERT_KIT_FORM_ID}/subscribe`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify({
        api_key: process.env.NEXT_PUBLIC_CONVERT_KIT_API_KEY,
        email,
      }),
    }
  );

  const data = await response.json();
  return NextResponse.json(data);
}
