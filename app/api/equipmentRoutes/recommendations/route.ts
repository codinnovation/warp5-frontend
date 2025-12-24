'use server';

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req: Request) {
  const store = await cookies();
  const user = store.get("user");

  const parseuser = user ? JSON.parse(user.value) : null;
  const userId = parseuser?.id;
  const baseUrl = process.env.BASE_URL;

  try {
    const apiRes = await fetch(`${baseUrl}/api/equipment/${userId}/recommendations`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json({ message: apiData.message || 'Failed to fetch most viewed equipment.' }, { status: apiRes.status });
    }

    return NextResponse.json({ data: apiData }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' + error }, { status: 500 });
  }
}