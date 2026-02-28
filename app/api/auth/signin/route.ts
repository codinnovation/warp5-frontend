"use server";

import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { loginId, password } = await request.json();

  if (!loginId || !password) {
    return NextResponse.json(
      { message: "Login ID and password are required." },
      { status: 400 }
    );
  }

  const baseUrl = process.env.BASE_URL;

  try {
    const apiRes = await fetch(`${baseUrl}/api/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ loginId, password })
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json(
        { message: apiData.message || "Something went wrong." },
        { status: apiRes.status }
      );
    }

    const response = NextResponse.json(
      { message: "Sign-in successful.", data: apiData },
      { status: 200 }
    );

    response.cookies.set('auth_token', apiData.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    response.cookies.set('user', JSON.stringify(apiData), {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error("Sign-in error:", error);
    return NextResponse.json(
      { message: "Failed to sign in. Please try again later." + error },
      { status: 500 }
    );
  }
}
