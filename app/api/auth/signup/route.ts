"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const {
    first_name,
    last_name,
    date_of_birth,
    addressLine1,
    addressLine2,
    accountType,
    email,
    password,
    phoneNumber
  } = await req.json();

  if (
    !first_name ||
    !last_name ||
    !date_of_birth ||
    !addressLine1 ||
    !phoneNumber ||
    !email ||
    !password ||
    !accountType
  ) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  const baseUrl =
    "https://warp5-construction-backend-v2-134fa1681ed7.herokuapp.com";

  try {
    const apiRes = await fetch(`${baseUrl}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        first_name,
        last_name,
        date_of_birth,
        addressLine1,
        addressLine2,
        accountType,
        email,
        password,
        phoneNumber
      })
    });

    console.log("user response", apiRes);

    const apiData = await apiRes.json();
    console.log("user data", apiData);

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: apiData.message || "Something went wrong." },
        { status: apiRes.status }
      );
    }

    return NextResponse.json(
      { message: "User registered successfully.", data: apiData },
      { status: 201 }
    );
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Failed to sign up. Please try again later." + error },
      { status: 500 }
    );
  }
}
