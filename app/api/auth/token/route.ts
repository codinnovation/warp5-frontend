'use server'

import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const store = await cookies();
  const tokenCookie = store.get('auth_token');

  if (!tokenCookie?.value) {
    return NextResponse.json({ user: null, error: 'Not authenticated' }, { status: 401 });
  }

  return NextResponse.json({ token: tokenCookie.value }, { status: 200 });
}

// {"addressLine1":"AE-0132-0051","addressLine2":"qq","authToken":null,"city":"Kumasi Ghana","createdAt":"2025-12-19","dateOfBirth":"2025-12-12","email":"a@gmail.com","firstName":"Kwabena","id":1,"lastName":"Asumadu","password":"$2a$10$DSU6OlZ1yA8micqtKU0Xw.kU6x2KkUJiV81CFch6yhd4NOu1XdaUu","phoneNumber":"0551234987","resetCode":null,"resetExpiry":null,"resetToken":null}