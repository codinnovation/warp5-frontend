'use server';

import { NextResponse, NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json({ message: 'Email and password are required.' }, { status: 400 });
  }

  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

  try {
    const apiRes = await fetch(`${baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json({ message: apiData.message || 'Something went wrong.' }, { status: apiRes.status });
    }

    return NextResponse.json({ message: 'Sign-in successful.', data: apiData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error || 'Failed to sign in' },
      { status: 500 }
    );
  }
}