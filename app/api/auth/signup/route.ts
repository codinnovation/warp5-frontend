'use server';

import { NextResponse, NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    gender,
    address,
    address2,
    city,
    phoneNumber,
    email,
    password,
  } = await req.json();

  if (!firstName || !lastName || !dateOfBirth || !gender || !address || !city || !phoneNumber || !email || !password) {
    return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
  }

  const baseUrl = process.env.BASE_URL || 'http://localhost:3000';

  try {
    const apiRes = await fetch(`${baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstName,
        lastName,
        dateOfBirth,
        gender,
        address,
        address2,
        city,
        phoneNumber,
        email,
        password,
      })
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json({ message: apiData.message || 'Something went wrong.' }, { status: apiRes.status });
    }

    return NextResponse.json({ message: 'User registered successfully.', data: apiData }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error || 'Failed to sign up' },
      { status: 500 }
    )
  }

}