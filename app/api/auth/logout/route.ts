'use server';

import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
    const store = await cookies();
    store.delete('user');
    return NextResponse.json({ message: 'User logged out successfully' }, { status: 200 });
}
