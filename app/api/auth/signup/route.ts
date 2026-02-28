"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    addressLine1,
    addressLine2,
    city,
    phoneNumber,
    email,
    password
  } = await req.json();

  if (
    !firstName ||
    !lastName ||
    !dateOfBirth ||
    !addressLine1 ||
    !city ||
    !phoneNumber ||
    !email ||
    !password
  ) {
    return NextResponse.json(
      { message: "All fields are required." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.BASE_URL;

  try {
    const apiRes = await fetch(`${baseUrl}/api/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstName,
        lastName,
        dateOfBirth,
        addressLine1,
        addressLine2,
        city,
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
