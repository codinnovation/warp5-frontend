'use server'

import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const store = await cookies();
  const userCookie = store.get('user');

  if (!userCookie?.value) {
    return NextResponse.json({ user: null, error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ user: JSON.parse(userCookie.value) }, { status: 200 });
}