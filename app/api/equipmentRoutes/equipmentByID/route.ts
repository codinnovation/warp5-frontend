'use server';

import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const baseUrl = process.env.BASE_URL;
    const id = req.nextUrl.searchParams.get('id');

    try {
        const apiRes = await fetch(`${baseUrl}/api/equipment/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const apiData = await apiRes.json();

        if (!apiRes.ok) {
            return NextResponse.json(
                { message: apiData.message || "Something went wrong." },
                { status: apiRes.status }
            )
        }

        return NextResponse.json(
            { message: "Equipment fetched successfully.", data: apiData },
            { status: 200 }
        )

    } catch (error) {
        console.error('Failed to fetch equipment', error);
        return NextResponse.json(
            { message: "Failed to fetch equipment. Please try again later." + error },
            { status: 500 }
        )
    }
}