'use server';

import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const searchParams = new URL(req.url).searchParams;

  const limit = parseFloat(searchParams.get('limit') || '10');

  const baseUrl = process.env.BASE_URL;

  try {
    const apiRes = await fetch(`${baseUrl}/api/equipment/highly-rated?limit=${limit}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const apiData = await apiRes.json();

    if (!apiRes.ok) {
      return NextResponse.json({ message: apiData.message || 'Failed to fetch highly rated equipment.' }, { status: apiRes.status });
    }

    return NextResponse.json({ data: apiData }, { status: 200 });

  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' + error }, { status: 500 });
  }
}